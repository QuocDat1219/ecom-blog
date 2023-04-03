import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faGlasses } from "@fortawesome/free-solid-svg-icons";
import Product from "./product";
import axios from "axios";
import Path from "./path";


const Filters = (props) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const categories = props.dataCate
  const [productss, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayPages, setDisplayPages] = useState([]);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isFiterCate, setIsFiterCate] = useState(false);
  const visiblePageCount = 3;
  const startPage = Math.max(currentPage - Math.floor(visiblePageCount / 2), 1);
  const endPage = Math.min(startPage + visiblePageCount - 1, totalPages);
  const container = props.categoriesCTNID

  useEffect(() => {
    const calldata = async () => {
      await axios.get(`https://ecom-oto.vercel.app/api/products?page=${currentPage}&&container=${container}`).then((response) => {
        setData(response.data.Product);

        setTotalPages(response.data.totalPages)
        const totalpage = response.data.totalPages;
        if (totalpage) {

          let pageNumbers = [];
          for (let i = 1; i <= totalpage; i++) {
            pageNumbers.push(i);
          }
          setDisplayPages(pageNumbers);
        }

      })
    }

    calldata();

  }, [currentPage, container])

  const handleClick = (page) => {
    handlePageChange(page);
  };

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedBrands([...selectedBrands, brand]);
    } else {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    }
  };


  const handlefilterButtonClick = () => {
    const categoryString = selectedCategories.join(',');
    const brandString = selectedBrands.join(',');
    console.log(brandString);
    axios.get(`http://localhost:5000/api/products/fitercategory?categories=${categoryString}&brands=${brandString}`)
      .then(response => {

        const datars = response.data.fproducts
        console.log(datars);
        if (datars.length != 0) {
          setProducts(response.data.fproducts);
          setIsFiterCate(true);
        }
        else
          alert("Danh mục rỗng");
      })
      .catch(error => {
        console.log(error);
      });
  };

  const renderPages = () => {
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
      <li key={page}>
        <button
          className={`px-3 py-2 leading-tight text-gray-500 bg-white border ${currentPage === page
            ? "bg-gray-100 text-gray-700"
            : "border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            }`}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      </li>
    ))
  };

  return (
    <>
      <div className="containers">
        <Path data="" />

        <section>
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col md:flex-row -mx-4">
              <aside className="md:w-1/3 lg:w-1/4 px-4 py-4">
                <a className="md:hidden mb-5  w-full text-center px-4 py-2 inline-block text-lg text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600">
                  Lọc sản phẩm
                </a>

                <div className=" md:block px-6 pt-4 bg-color-card rounded-md shadow ">
                  <h3 className="font-semibold mb-2 text-color-title">Danh mục</h3>

                  <ul className="space-y-1">
                    {props.filteredCategories.map((category) => (
                      <li key={category._id}>
                        <div class="flex items-center">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value={category._id}
                            onChange={handleCategoryChange}
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                          />
                          <label
                            for="checked-checkbox"
                            class="ml-2 text-sm font-medium text-gray-900 "
                          >
                            {category.name}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <hr className="my-4 text-color-basic" />
                  <h3 className="font-semibold mb-2 text-color-title">Nhãn hàng</h3>
                  <ul className="space-y-1">
                    {props.brands.map((brand) => (
                      <li key={brand._id}>
                        <div class="flex items-center">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            onChange={handleBrandChange}
                            value={brand._id}
                            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2  "
                          />
                          <label
                            for="checked-checkbox"
                            class="ml-2 text-sm font-medium text-gray-900 "
                          >
                            {brand.title}
                          </label>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <hr className="my-1" />

                  <button class="bg-color-button hover:bg-blue-400 text-text-color font-bold py-2 px-4 border border-black rounded my-2 "
                    onClick={handlefilterButtonClick}
                  >
                    <FontAwesomeIcon icon={faFilter} /> Lọc
                  </button>
                </div>

              </aside>
              <main className="md:w-2/3 lg:w-3/4 w-4/4 px-3">
                {
                  productss.length == 0 ? <Product data={data} dataCate={categories} />
                    : <Product data={productss} dataCate={categories} />

                }
              </main>
            </div>
          </div>
        </section>
      </div>
      <br />
      {isFiterCate == true ? <div> </div> :

        <div className="containers justify-center flex items-center ">
          <nav aria-label="Page navigation example">
            <ul class="inline-flex -space-x-px ">
              <li>
                <button
                  href="#"
                  aria-current="page"
                  className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border ${currentPage === 1
                    ? "bg-gray-100 text-gray-700"
                    : "border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    } rounded-l-lg`}
                  onClick={() => handleClick(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Trở về
                </button>
              </li>
              {renderPages()}
              <li>
                <button
                  href="#"
                  className={`px-3 py-2 leading-tight text-gray-500 bg-white border ${currentPage === totalPages
                    ? "bg-gray-100 text-gray-700"
                    : "border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    } rounded-r-lg`}
                  onClick={() => handleClick(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      }

    </>
  );
};
export default Filters;

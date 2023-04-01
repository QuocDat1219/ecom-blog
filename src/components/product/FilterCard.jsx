import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faGlasses } from "@fortawesome/free-solid-svg-icons";
import Product from "./product";
import axios from "axios";
import { useParams } from "react-router-dom";
const Filters = (props) => {
  const { id } = useParams();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [categoriesCTNID, setCategoriesCTNID] = useState([]);
  const [brands, setBrands] = useState([]);
  const categories = props.dataCate
  const products = props.data

  useEffect(() => {
    axios.get(
      "https://ecom-oto.vercel.app/api/products/getall"
    ).then((response) => {
      const data = response.data.products;
      setAllProduct(data)


    })

    axios.get(
      "https://ecom-oto.vercel.app/api/categorycontainer/"
    ).then((response) => {
      const data = response.data;
      if (data) {
        const categoryId = data.find((categoryId) => categoryId.slug === id);
        setCategoriesCTNID(categoryId._id)
        console.log(categoryId._id);
      }

    })

  }, []);

  const filteredCategories = categories.filter(
    (category) => category.idCategoriesContainer == categoriesCTNID
  );


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://ecom-oto.vercel.app/api/brand/"
        );
        const data = response.data;
        setBrands(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);


  const handleSaveButtonClick = () => {
    const selectedProduct = categories.filter(categorie => checkedItems.includes(categorie._id));
    console.log(selectedProduct);
    // selectedProduct.map((item) => {
     
    //   console.log(item._id);
    //   const foundProduct = allProduct.find((p) => p._id === Number(item._id));
    //   selectedCategories.includes(foundProduct);
    // })
    // console.log(selectedCategories);
  };

  const handleCheckboxChange = (e, itemId) => {
    if (e.target.checked) {
      setCheckedItems([...checkedItems, itemId]);
    } else {
      setCheckedItems(checkedItems.filter(id => id !== itemId));
    }
  };


  return (
    <>
      <aside className="md:w-1/3 lg:w-1/4 px-4 py-4">
        <a className="md:hidden mb-5  w-full text-center px-4 py-2 inline-block text-lg text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600">
          Lọc sản phẩm
        </a>

        <div className=" md:block px-6 pt-4 bg-color-card rounded-md shadow ">
          <h3 className="font-semibold mb-2 text-color-title">Danh mục</h3>

          <ul className="space-y-1">
            {filteredCategories.map((category) => (
              <li key={category._id}>
                <div class="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value={category._id}
                    checked={checkedItems.includes(category._id)}
                    onChange={e => handleCheckboxChange(e, category._id)}
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
            {brands.map((data) => (
              <li key={data._id}>
                <div class="flex items-center">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    // onChange={}
                    value={data._id}
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2  "
                  />
                  <label
                    for="checked-checkbox"
                    class="ml-2 text-sm font-medium text-gray-900 "
                  >
                    {data.title}
                  </label>
                </div>
              </li>
            ))}
          </ul>
          <hr className="my-1" />

          <button class="bg-color-button hover:bg-blue-400 text-text-color font-bold py-2 px-4 border border-black rounded my-2 " onClick={handleSaveButtonClick}>
            <FontAwesomeIcon icon={faFilter} /> Lọc
          </button>
        </div>

      </aside>
      <main className="md:w-2/3 lg:w-3/4 w-4/4 px-3">
        <Product data={products} dataCate={categories} />
      </main>
    </>
  );
};

export default Filters;

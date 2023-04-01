import React, { useState, useEffect } from "react";
import FilterCard from "./FilterCard";
import Path from "./path";

import BrandSillder from "./brandSlider";
import axios from "axios";


const AllProduct = () => {
  const [data, setData] = useState([]);
  const [dataCate, setDataCate] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [displayPages, setDisplayPages] = useState([]);
  const visiblePageCount = 3;
  const startPage = Math.max(currentPage - Math.floor(visiblePageCount / 2), 1);
  const endPage = Math.min(startPage + visiblePageCount - 1, totalPages);


  useEffect(() => {
    const calldata = async () => {
      await axios.get(`https://ecom-oto.vercel.app/api/products?page=${currentPage}`).then((response) => {
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

    const calldata2 = async () => {
      await axios.get("https://ecom-oto.vercel.app/api/category/").then((response) => {


        setDataCate(response.data.category);
      })
    }


    calldata();
    calldata2();


  }, [currentPage])

  const handleClick = (page) => {
    handlePageChange(page);
  };

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }



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
      <div className="p-5">
        <BrandSillder />
      </div>
      <div className="containers">
        <Path data="" />
        
        <section>
          <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col md:flex-row -mx-4">
              <FilterCard data={data} dataCate={dataCate}/>
              
            </div>
          </div>
        </section>
      </div>
      <br />
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
      <br />
    </>
  );
};
export default AllProduct;

import { products } from "../data/Data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useState, useEffect } from "react";
const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://ecom-oto.vercel.app/api/products/");
      setData(result.data.products);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="mt-4 grid gap-y-10 gap-x-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {data.map((item) => (
          <div
            key={item._id}
            className="group relative bg-color-card rounded-md shadow overflow-hidden"
          >
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-color-basic group-hover:opacity-75 lg:aspect-none lg:h-50">
              <img
                src={item.imagesDefault}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <hr className="w-[80%] mx-auto" />
            <div className="mt-2 flex justify-center pl-[10px] py-1 overflow-hidden">
              <div>
                <p className="mt-1 text-sm text-text-color  text-center">
                  {item.idCategory}
                </p>
                <h3 className="text-sm text-text-color text-center">
                  <a href={`/productdetail/${item._id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {item.name}
                  </a>
                </h3>
              </div>
              {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
            </div>

            <div>
              <a href={`/productdetail/${item._id}`}>
                <button
                  type="button"
                  className="bg-color-button hover:bg-blue-400 text-text-color font-bold py-2 px-4 text-center mr-2  w-[100%] rounded-none "
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} /> Xem thêm
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;

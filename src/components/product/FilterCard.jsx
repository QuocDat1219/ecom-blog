
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faGlasses } from '@fortawesome/free-solid-svg-icons'
import { categorys, brands } from "../data/Data"
const Filters = () => {
  let queryParams;


  return (
    <aside className="md:w-1/3 lg:w-1/4 px-4 py-4">
      <a
        className="md:hidden mb-5  w-full text-center px-4 py-2 inline-block text-lg text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"

      >
        Lọc sản phẩm
      </a>


      <div className=" md:block px-6 py-4 border border-color-basic bg-white rounded-md shadow-sm ">
        <h3 className="font-semibold mb-2 text-color-title">Danh mục</h3>

        <ul className="space-y-1">
          {categorys.map((item) => (
            <li key={item._id}>
              <div class="flex items-center">
                <input id="default-checkbox" type="checkbox" value={item._id} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 " />
                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">{item.title}</label>
              </div>

            </li>
          ))}
        </ul>

        <hr className="my-4 text-color-basic" />

        <h3 className="font-semibold mb-2 text-color-title">Nhãn hàng</h3>
        <ul className="space-y-1">
          {brands.map((item) => (
            <li key={item._id}>
              <div class="flex items-center">
                <input id="default-checkbox" type="checkbox" value={item._id} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2  " />
                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">{item.title}</label>
              </div>

            </li>
          ))}
        </ul>
        <hr className="my-4" />

        <button class="bg-color-basic hover:bg-blue-400 text-text-color font-bold py-2 px-4 border border-black rounded">
          <FontAwesomeIcon icon={faFilter} /> Lọc
        </button>
      </div>
    </aside>
  );
};

export default Filters;

import React from "react";
// import StarRatings from "react-star-ratings";
import { categorys, brands } from "../data/Data"
const Filters = () => {
  let queryParams;



  return (
    <aside className="md:w-1/3 lg:w-1/4 px-4 py-4">
      <a
        className="md:hidden mb-5  w-full text-center px-4 py-2 inline-block text-lg text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"

      >
        Filter by
      </a>


      <div className=" md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm ">
        <h3 className="font-semibold mb-2">Category</h3>

        <ul className="space-y-1">
          {categorys.map((item) => (
            <li key={item._id}>
              <div class="flex items-center">
                <input id="default-checkbox" type="checkbox" value={item._id} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item.title}</label>
              </div>

            </li>
          ))}
        </ul>

        <hr className="my-4" />

        <h3 className="font-semibold mb-2">Nhãn hàng</h3>
        <ul className="space-y-1">
          {brands.map((item) => (
            <li key={item._id}>
              <div class="flex items-center">
                <input id="default-checkbox" type="checkbox" value={item._id} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="checked-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item.title}</label>
              </div>

            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Filters;
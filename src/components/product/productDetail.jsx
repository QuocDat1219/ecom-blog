import { products } from "../data/Data";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useParams } from "react-router-dom";
import Path from "./path";
import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductDetail = () => {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);

  const onSlide = (currentIndex) => {
    setCurrentIndex(currentIndex);
  };
  const record = products.find((record) => record._id === id);

  return (
    <>
      <div className="containers">
        <Path data={record.title} />
      </div>
      <section class="overflow-hidden bg-white py-7 ">
        <div class="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full mb-8 md:w-1/2 md:mb-0">
              <div class="sticky top-0 z-30 overflow-hidden ">
                <ImageGallery
                  items={record.imagesDetail}
                  showFullscreenButton={true}
                  useBrowserFullscreen={true}
                  onSlide={onSlide}
                  thumbnailPosition={"left"}
                />

                <div class="px-6 pb-6 mt-6 border-t border-gray-300  ">
                  <div class="flex flex-wrap items-center mt-6">
                    <h2 class="text-lg font-bold text-gray-700 ">Mô tả</h2>
                  </div>
                  <div class="mt-2 px-7">{record.detail}</div>
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2 ">
              <div class="lg:pl-20">
                <div class="mb-8 ">
                  <h2 class="max-w-xl mb-6 text-2xl font-bold  md:text-4xl text-color-title">
                    {record.title}
                  </h2>
                  <p class="inline-block mb-6 text-xl font-bold text-text-color  ">
                    <span>Danh mục: {record.category}</span>
                  </p>
                  <p class="max-w-md text-text-color">{record.description}</p>
                </div>

                <div class="mb-8 ">
                  <div>
                    <div class="flex flex-wrap -mb-2">
                      <a href="">
                        <button class="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 hover:text-black bg-color-button text-text-color">
                          Zalo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="mb-8">
                  <h2 class=" pb-1 mb-4 text-2xl font-bold border-b border-blue-300 ">
                    Liên hệ
                  </h2>
                  <div class="flex flex-wrap -mx-2 -mb-2">
                    <button class="p-1 mb-2 mr-3 bg-color-button">
                      <FaFacebookF className="w-6 h-6 text-text-color" />
                    </button>
                    <button class="p-1 mb-2 mr-3 bg-color-button">
                      <FaTwitter className="w-6 h-6 text-text-color" />
                    </button>
                    <button class="p-1 mb-2 mr-3 bg-color-button">
                      <HiOutlineMail className="w-6 h-6 text-text-color" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProductDetail;

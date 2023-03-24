import { products } from "../data/Data"
import { FaFacebookF, FaTwitter } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { useParams } from 'react-router-dom'
import Path from "./path"
import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

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
                                        <span class="mr-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                class="w-4 h-4 text-gray-700  bi bi-truck"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
                                                </path>
                                            </svg>
                                        </span>
                                        <h2 class="text-lg font-bold text-gray-700 ">Mô tả</h2>
                                    </div>
                                    <div class="mt-2 px-7">
                                        <a class="text-sm text-blue-400 " href="#">{record.detail}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 md:w-1/2 ">
                            <div class="lg:pl-20">
                                <div class="mb-8 ">
                                    <h2 class="max-w-xl mb-6 text-2xl font-bold  md:text-4xl">
                                        {record.title}</h2>
                                    <p class="inline-block mb-6 text-xl font-bold text-gray-700  ">
                                        <span>Danh mục: {record.category}</span>

                                    </p>
                                    <p class="max-w-md text-gray-700 ">
                                        {record.description}
                                    </p>
                                </div>

                                <div class="mb-8 ">

                                    <div>
                                        <div class="flex flex-wrap -mb-2">
                                            <a href="">
                                                <button
                                                    class="px-4 py-2 mb-2 mr-4 font-semibold border rounded-md hover:border-blue-400 dark:border-gray-400 hover:text-black dark:hover:border-gray-300 dark:text-gray-400">
                                                    Zalo
                                                </button>
                                            </a>


                                        </div>
                                    </div>
                                </div>
                                <div class="mb-8">
                                    <h2
                                        class=" pb-1 mb-4 text-2xl font-bold border-b border-blue-300 ">
                                        Liên hệ</h2>
                                    <div class="flex flex-wrap -mx-2 -mb-2">
                                        <button class="p-1 mb-2 mr-3 bg-color-basic">
                                            <FaFacebookF className="w-6 h-6" />

                                        </button>
                                        <button class="p-1 mb-2 mr-3 bg-color-basic">
                                            <FaTwitter className="w-6 h-6" />
                                        </button>
                                        <button class="p-1 mb-2 mr-3 bg-color-basic">
                                            <HiOutlineMail className="w-6 h-6" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )

}
export default ProductDetail
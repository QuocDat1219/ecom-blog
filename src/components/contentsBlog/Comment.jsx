import React from "react";
const Comment = () => {
    return (
        <div className="w-full pt-10">
            <form className="bg-[#F2F2F2] p-5">
                <div className="pb-5">
                    <h2 className="text-[20px] font-bold">Trả lời</h2>
                    <span className="pt-2 text-[#000]">Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</span>
                </div>
                    <div className="flex flex-wrap w-full mb-6">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                            Bình luận <span className="text-red-500">*</span>
                        </label>
                        <textarea className="appearance-none block w-full h-28 bg-white text-gray-700 border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-comment" required ></textarea>
                    </div>          
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
                            Tên <span className="text-red-500">*</span>
                        </label>
                        <input className="appearance-none block w-full  text-gray-700  border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-name" type="text" placeholder="Nhập tên" required />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="Nhập email" required />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-website">
                            Trang web
                        </label>
                        <input className="appearance-none block w-full 0 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-website" type="text" placeholder="Nhập trang web" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full px-3">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            PHẢN HỒI
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Comment;
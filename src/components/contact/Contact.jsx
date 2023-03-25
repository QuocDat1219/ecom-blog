import React from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <div className="containers ">
          <div className="shadow m-4 rounded-md bg-color-card">
            <form className=" justify-center items-center ">
              <h4 className="lg:text-left font-bold text-color-title">Tìm kiếm cửa hàng</h4> <br />
              <div className="flex flex-wrap ">
                <div className="relative sm:flex-grow sm:flex-1 m-2">
                  <select
                    id="countries"
                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-[260px] lg:w-full"
                  >
                    <option selected>Chọn tỉnh, thành phố</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
                <div className="relative sm:flex-row sm:flex-1 m-2">
                  <select
                    id="countries"
                    class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block lg:w-full p-2.5 w-[260px]"
                  >
                    <option selected>Chọn quận, huyện</option>
                  </select>
                </div>
                <div className="relative sm:flex-grow sm:flex-1 lg:w-full w-[100%] m-2">
                  <button className="bg-color-basic w-[100%] rounded-md text-text-color">Tìm kiếm</button>
                </div>
              </div>

            </form>
            <div className="flex flex-wrap p-4 " >
              <iframe
                className="rounded-lg"
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6021385.344638437!2d103.25686172310103!3d16.036623799459683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2zVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1679290776269!5m2!1svi!2s"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div class="flex flex-wrap ">
            <div class="relative sm:flex-grow sm:flex-1">
              <form >
                <h4>Thông tin liên hệ</h4> <br />
                <div>
                  <p>
                    Tên công ty: Công ty Cổ phần ABC <br /> Địa chỉ : ... <br />
                    Email: gmail@gmail.com <br /> Giấy phép kinh doanh:
                  </p>
                </div>
              </form>
            </div>
            <div className="relative sm:flex-grow sm:flex-1">
              <div className="shadow rounded-md bg-color-card">
                <form >
                  <h4 className="font-blod text-color-title text-[24px]">Biểu mẫu liên hệ</h4> <br />
                  <div>
                    <input type="text" className="flex-grow border-gray-400 border-2 p-2 rounded-md mr-4 " placeholder="Họ và tên" />
                    <input type="email" className="flex-grow border-gray-400 border-2 p-2 rounded-md mr-4 " placeholder="Địa chỉ email" />
                    <input type="number" className="flex-grow border-gray-400 border-2 p-2 rounded-md mr-4 " placeholder="Số điện thoại" />
                    <input type="text" className="flex-grow border-gray-400 border-2 p-2 rounded-md mr-4 " placeholder="Địa chỉ" />
                  </div>
                  <textarea cols="28" rows="10"></textarea>
                  <button className="bg-color-basic w-[100%] rounded-md text-text-color">Gửi liên hệ</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

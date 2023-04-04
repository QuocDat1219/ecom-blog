import React from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <div className="containers ">
          <div className="shadow mt-4 mb-4 rounded-md bg-color-card overflow-auto">
            <form className=" justify-center items-center ">
              <h4 className="lg:text-left text-[40px] font-bold text-color-title">
                Vị trí
              </h4>{" "}
            </form>
            <div className="flex flex-wrap p-4 ">
              <iframe
                className="rounded-lg"
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.21859539116!2d107.01874597697699!3d10.959244640974278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174e41307aed27b%3A0x4336319d41d1791f!2z4bqlcCAxLCBUcuG6o25nIEJvbSwgxJDhu5NuZyBOYWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1680585142489!5m2!1svi!2s"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div class="flex flex-wrap ">
            <div class="relative sm:flex-grow sm:flex-1">
              <form className="text-[1.4rem]">
                <h4>Thông tin liên hệ</h4> <br />
                <div>
                  <p>
                    THÀNH ĐẠT
                    <br /> Địa chỉ : 92 Tổ 3, Ấp 1, Xã Sông Trầu, Huyện Trảng
                    Bom, Tỉnh Đồng Nai. <br />
                    Điện Thoại: 0931116080
                  </p>
                </div>
              </form>
            </div>
            <div className="relative sm:flex-grow sm:flex-1">
              <div className="shadow rounded-md bg-color-card">
                <form>
                  <h4 className="font-blod text-color-title text-[24px]">
                    Biểu mẫu liên hệ
                  </h4>{" "}
                  <br />
                  <div>
                    <input
                      type="text"
                      className="flex-grow border-gray-400 border-2 p-2 rounded-md mr-4 "
                      placeholder="Họ và tên"
                    />
                    <input
                      type="email"
                      className="flex-grow border-gray-400 border-2 p-2 rounded-md mr-4 "
                      placeholder="Địa chỉ email"
                    />
                    <input
                      type="number"
                      className="flex-grow border-gray-400 border-2 p-2 rounded-md mr-4 "
                      placeholder="Số điện thoại"
                    />
                    <input
                      type="text"
                      className="flex-grow border-gray-400 border-2 p-2 rounded-md mr-4 "
                      placeholder="Địa chỉ"
                    />
                  </div>
                  <textarea cols="28" rows="10"></textarea>
                  <button className="bg-color-button w-[100%] rounded-md text-white">
                    Gửi liên hệ
                  </button>
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

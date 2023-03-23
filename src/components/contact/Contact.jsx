import React from "react";
import img from "../images/pricing.jpg";
import Back from "../common/Back";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact mb">
        <div className="containers">
          <form className="shadow">
            <h4>Tìm kiếm cửa hàng</h4> <br />
            <div class="flex flex-wrap ">
              <div class="relative sm:flex-grow sm:flex-1">
                <select class="browser-default custom-select">
                  <option selected>Chọn tỉnh, thành phố</option>
                  <option value="1">Cần Thơ</option>
                  <option value="2">Thành phố Hồ Chí Minh</option>
                  <option value="3">Bình Dương</option>
                </select>
              </div>
              <div class="relative sm:flex-grow sm:flex-1">
                <select class="browser-default custom-select">
                  <option selected>Chọn quận, huyện</option>
                </select>
              </div>
              <div class="relative sm:flex-grow sm:flex-1">
                <button class="btntk">Tìm kiếm</button>
              </div>
            </div>
            <div class="flex flex-wrap " style={{ paddingTop: "20px" }}>
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6021385.344638437!2d103.25686172310103!3d16.036623799459683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31157a4d736a1e5f%3A0xb03bb0c9e2fe62be!2zVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1679290776269!5m2!1svi!2s"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </form>
          <div class="flex flex-wrap ">
            <div class="relative sm:flex-grow sm:flex-1">
              <form className="">
                <h4>Thông tin liên hệ</h4> <br />
                <div>
                  <p>
                    Tên công ty: Công ty Cổ phần ABC <br /> Địa chỉ : ... <br />
                    Email: gmail@gmail.com <br /> Giấy phép kinh doanh:
                  </p>
                </div>
              </form>
            </div>
            <div class="relative sm:flex-grow sm:flex-1">
              <form className="shadow">
                <h4>Biểu mẫu liên hệ</h4> <br />
                <div>
                  <input type="text" placeholder="Họ và tên" />
                  <input type="email" placeholder="Địa chỉ email" />
                  <input type="number" placeholder="Số điện thoại" />
                  <input type="text" placeholder="Địa chỉ" />
                </div>
                <textarea cols="30" rows="10"></textarea>
                <button>Gửi liên hệ</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

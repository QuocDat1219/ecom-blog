import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import "../login.css";
import "../button.scss";
import axios from "axios";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}user/forgot-password-token`, {
        email,
      })
      .then((result) => {
        toast.success("Vui lòng kiểm tra email để cập nhật mật khẩu");
      })
      .catch((err) => {
        toast.error("Người dùng không tồn tại");
      });
  };
  return (
    <div>
      <div className="container">
        <h6>
          <b>Hoặc đăng nhập bằng</b>
        </h6>
        <input
          type="email"
          name="email"
          placeholder="E-mail "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div
          class="forget-pass"
          style={{
            textAlign: "left",
          }}
        >
          <Link to={"/login"}>
            <a href="#">Quay lại?</a>
          </Link>
        </div>
        <div
          class="forget-pass"
          style={{
            textAlign: "left",
          }}
        ></div>
        <button
          type="submit"
          id="submit"
          onClick={handleSubmit}
          className="btn-dn"
        >
          Lấy lại
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;

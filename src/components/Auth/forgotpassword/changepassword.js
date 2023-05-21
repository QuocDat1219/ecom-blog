import React, { useState, useEffect } from "react";
import { useNavigate, link, Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import PuffLoader from "react-spinners/PuffLoader";
import "../login.css";
import "../button.scss";
import OAuth2Login from "react-simple-oauth2-login";
import axios from "axios";
import { Result } from "antd";
const ChangPassWord = () => {
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useParams();
  const handleSubmit = () => {
    if (password == confirmpassword) {
      axios
        .put(`${process.env.REACT_APP_API_URL}user/reset-password/${token}`, {
          password,
        })
        .then((result) => {
          toast.success("Mật khẩu đã được cập nhật");
        })
        .catch((err) => {
          toast.error("Mã đã hết hạn");
        });
    } else {
      toast.error("Mật khẩu không trùng khớp");
    }
  };
  return (
    <div>
      <div className="container">
        <h6>
          <b>Hoặc đăng nhập bằng</b>
        </h6>
        <input
          type="password"
          name="pasword"
          placeholder="E-mail "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="confirmpassword"
          name="confirmpassword"
          placeholder="E-mail "
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
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
          Thay đổi mật khẩu
        </button>
      </div>
    </div>
  );
};

export default ChangPassWord;

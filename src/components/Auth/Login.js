import React, { useState, useEffect } from "react";
import { useNavigate, link, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { signin, signinGoogle } from "../../redux/action/auth";
import PuffLoader from "react-spinners/PuffLoader";
import { useGoogleLogin } from "@react-oauth/google";
import imgGoogle from "./image/Google__G__Logo.svg.png";
import imgFacebook from "./image/Facebook_F_icon.svg.png";
import axios from "axios";
import "./login.css";
import "./button.scss";
import OAuth2Login from "react-simple-oauth2-login";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios
  //     .post("https://api-vuon-thong-minh.onrender.com/users/user-data", {
  //       token: window.localStorage.getItem("token"),
  //     })
  //     .then((data) => {
  //       if (data.data.data == "token expired") {
  //         window.localStorage.clear();
  //         window.localStorage.setItem("loggedIn", "false");
  //         window.localStorage.getItem("loggedIn");
  //       }
  //     });
  // }, []);

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   setIsLoading(true);

  //   if (email == "" || password == "") {
  //     toast.warning("Vui lòng nhập đủ thông tin");
  //     setIsLoading(false);
  //   } else {
  //     // toast("Đang xử lý");
  //     document.getElementById("submit").disabled = true;
  //     fetch("https://api-vuon-thong-minh.onrender.com/users/login-user", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({
  //         email,
  //         password,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data, "userRegister");
  //         if (data.status == "ok") {
  //           toast.success("Đăng nhập thành công");
  //           window.localStorage.setItem("token", data.data);

  //           loginRequest();
  //         } else {
  //           setIsLoading(false);
  //           toast.error("Sai email hoặc mật khẩu! ");
  //         }
  //       });
  //     const loginRequest = async () => {
  //       await fetch(
  //         "https://api-vuon-thong-minh.onrender.com/users/user-data",
  //         {
  //           method: "POST",
  //           crossDomain: true,
  //           headers: {
  //             "Content-Type": "application/json",
  //             Accept: "application/json",
  //             "Access-Control-Allow-Origin": "*",
  //           },
  //           body: JSON.stringify({
  //             token: window.localStorage.getItem("token"),
  //           }),
  //         }
  //       )
  //         .then((res) => res.json())
  //         .then((data) => {
  //           //console.log(data);

  //           window.localStorage.setItem("loggedIn", "true");
  //           window.localStorage.setItem("Emaildetails", data.data.email);
  //           window.localStorage.setItem(
  //             "Namedateils",
  //             data.data.fname + " " + data.data.lname
  //           );
  //           window.localStorage.setItem("dtUser", JSON.stringify(data.data));

  //           if (data.data.userType == "Admin") {
  //             setIsLoading(false);
  //             window.localStorage.setItem("isadmin", "true");
  //             window.location.href = "/adminhome";
  //           } else {
  //             setIsLoading(false);
  //             window.localStorage.setItem("isadmin", "false");
  //             window.location.href = "/home";
  //           }

  //           if (data.data == "token expired") {
  //             setIsLoading(false);
  //             alert("Token expired login again");
  //             window.localStorage.clear();
  //             window.location.href = "/login";
  //           }
  //         });
  //     };
  //   }
  // }
  function handleSubmit(e) {
    e.preventDefault();
    if (email !== "" && password !== "") {
      dispatch(signin({ email, password }, navigate));
    } else {
      toast.error("Vui lòng nhập đầy đủ thông tin đăng nhập");
    }
  }
  function handleGoogleLoginSuccess(tokenResponse) {
    const accessToken = tokenResponse.access_token;

    dispatch(signinGoogle(accessToken, navigate));
  }
  const login = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

  const loginFb = async (e) => {
    const accessToken = e.access_token;
    const typeLogin = "facebook";
    const callApi = await axios
      .post("https://ecom-z3we.onrender.com/api/users/login", {
        accessToken,
        typeLogin,
      })
      .then((result) => {
        toast.success("Đăng nhập thành công !");
        console.log(result);
      })
      .catch((err) => {
        console.log(err.response.data);
        if (err.response.status == 400) {
          toast.error("Ú sờ chưa tồn tại vui lòng đăng ký dùm");
        }
      });
  };
  const onFailure = (e) => {
    console.log(e);
  };
  return (
    <div>
      <div className="parent clearfix">
        <div className="bg-illustration">
          <div class="burger-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ToastContainer pauseOnHover={false} draggable={false} />
        <div class="login">
          <div class="container">
            <h1>
              Đăng nhập
              <br />
              <span style={{ color: "#6698FF" }}> DDYB - Electronic </span>
            </h1>

            <div class="login-form">
              {/* <div className="flex justify-center gap-10">
                <div className="bg-blue-gray-900">
                  <Link to={""} className="w-[130px] h-[100px] block">
                    <img
                      src={imgFacebook}
                      alt="facebook_logo"
                      className="w-[3.25rem] h-[3.25rem]"
                    />
                    <OAuth2Login
                      className="text-black bg-green-600 w-[130px]"
                      buttonText="Facebook"
                      authorizationUrl="https://www.facebook.com/dialog/oauth"
                      responseType="token"
                      clientId="203369009102213"
                      redirectUri="http://localhost:3000/"
                      scope="public_profile"
                      onSuccess={loginFb}
                      onFailure={onFailure}
                    />
                  </Link>
                </div>

                <div className="bg-orange-500">
                  <Link onClick={() => login()} className="w-[130px] h-[100px] block">
                    <img
                      src={imgGoogle}
                      alt="google_logo"
                      className="w-[3.25rem] h-[3.25rem]"
                    />
                    Google
                  </Link>
                </div> */}
              <div className="flex justify-center gap-10 lg:w-[500px] w-[351px]">
                <div className="">
                  <button className="w-[130px] h-[100px] flex items-center justify-center space-x-2 text-black">
                    <Link
                      to={""}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <img
                        src={imgFacebook}
                        alt="facebook_logo"
                        className="w-[3.25rem] h-[3.25rem]"
                      />
                      <OAuth2Login
                        className="ml-0 text-black w-[180px] h-[48px]"
                        buttonText="Facebook"
                        authorizationUrl="https://www.facebook.com/dialog/oauth"
                        responseType="token"
                        clientId="203369009102213"
                        redirectUri="http://localhost:3000/"
                        scope="public_profile"
                        onSuccess={loginFb}
                        onFailure={onFailure}
                      />
                    </Link>
                  </button>
                </div>

                <div className="">
                  <button
                    className="w-[130px] h-[100px] flex items-center justify-center"
                    onClick={() => login()}
                  >
                    <img
                      src={imgGoogle}
                      alt="google_logo"
                      className="w-[3.25rem] h-[3.25rem]"
                    />
                    <span className="text-black ml-[25px]">Google</span>
                  </button>
                </div>
              </div>
              <h6 className="pt-[20px] text-center">
                <b>Hoặc đăng nhập bằng</b>
              </h6>
              <form action="">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div
                  class="forget-pass"
                  style={{
                    textAlign: "left",
                  }}
                >
                  <Link to={"/Register"}>
                    <a href="#">
                      Chưa có tài khoản? <b>Đăng kí tại đây!</b>
                    </a>
                  </Link>
                </div>
                <div
                  class="forget-pass"
                  style={{
                    textAlign: "left",
                  }}
                >
                  <Link to={"/Register"}>
                    <a href="#">Quên mật khẩu?</a>
                  </Link>
                </div>

                <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  id="submit"
                  className="btn-dn"
                >
                  {isLoading ? (
                    <div className="flex justify-center items-center">
                      <PuffLoader color="#eaeae8" size={40} />
                    </div>
                  ) : (
                    "Đăng nhập"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

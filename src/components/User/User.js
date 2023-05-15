import "./User.scss";
import moment from "moment";
import React, { useContext, useEffect, useState, useReducer } from "react";
import "./ProfileCard.css";
import avatar from "./profile.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PuffLoader from "react-spinners/PuffLoader";
var checkPassword =
  /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const UserProfile = () => {
  const [data, setData] = useState("");
  const [dataidtelegram, setDataIDtelegram] = useState("");
  const [fnamees, setFNames] = useState("");
  const [lnamees, setLNames] = useState("");
  const [idtelegrams, setIDtelegram] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordPL, setNewPasswordPL] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // const userEmail = window.localStorage.getItem("Emaildetails");
  // let urls =
  //   "https://api-vuon-thong-minh.onrender.com/datas/datadetail/" + userEmail;
  // useEffect(() => {
  //   axios
  //     .post("https://api-vuon-thong-minh.onrender.com/users/user-data", {
  //       token: window.localStorage.getItem("token"),
  //     })
  //     .then((data) => {
  //       console.log(data.data.data);
  //       if (data.data.data === "token expired") {
  //         window.localStorage.clear();
  //         window.localStorage.setItem("loggedIn", "false");
  //         window.localStorage.getItem("loggedIn");
  //         window.location.href = "/login";
  //       }
  //       setData(data.data.data);
  //     });

  //   axios.get(urls).then((data) => {
  //     // console.log(data.data.data.idtelegram);
  //     setDataIDtelegram(data.data.data.idtelegram);
  //   });
  // }, []);

  // const handleChangePassword = async (e) => {
  //   e.preventDefault();

  //   if (newPassword === "" || oldPassword === "" || newPasswordPL === "") {
  //     toast.warning("Vui lòng nhập đầy đủ thông tin!");
  //   } else if (!checkPassword.test(newPassword) || newPassword.length === "") {
  //     toast.error("Mật khẩu phải có chữ hoa, số và kí tự đặc biệt!");
  //   } else if (newPassword != newPasswordPL) {
  //     toast.error("Nhập lại mật khẩu không trùng khớp");
  //   } else {
  //     await axios
  //       .post("https://api-vuon-thong-minh.onrender.com/users/changepassword", {
  //         tokenold: window.localStorage.getItem("token"),
  //         newpassword: newPassword,
  //         oldpassword: oldPassword,
  //       })
  //       .then(function (response) {
  //         // console.log(response);
  //         if (response.data.error === "Passwords don't match") {
  //           toast.error("Mật khẩu cũ không đúng");
  //         } else if (response.data.status === "verified") {
  //           toast.success("Đổi mật khẩu thành công");
  //         }
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //         toast.warning("Đổi mật khẩu không thành công");
  //       });
  //   }
  // };

  // const editidtelegram = async () => {
  //   await axios
  //     .post("https://api-vuon-thong-minh.onrender.com/datas/updatedht", {
  //       email: window.localStorage.getItem("Emaildetails"),
  //       idtelegram: idtelegrams,
  //     })
  //     .then(function (data) {
  //       setIsLoading(false);
  //       toast.promise(
  //         new Promise((resolve, reject) => {
  //           setTimeout(() => {
  //             resolve();
  //           }, 2000);
  //         }),
  //         {
  //           pending: "Đang xử lí....",
  //           success: "Đổi thông tin thành công",
  //         },
  //         {
  //           autoClose: 2000,
  //         }
  //       );
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       toast.error("Lỗi");
  //     });
  // };

  // const handleClickSave = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   if (
  //     fnamees === data.fname &&
  //     lnamees === data.lname &&
  //     idtelegrams == dataidtelegram
  //   ) {
  //     setIsLoading(false);
  //     toast.warning("Thông tin không thay đổi");
  //   } else if (fnamees === "" || lnamees === "") {
  //     setIsLoading(false);
  //     toast.warning("Vui lòng nhập đủ thông tin");
  //   } else {
  //     // toast("Đang xử lý...");
  //     await axios
  //       .post("https://api-vuon-thong-minh.onrender.com/users/edituser", {
  //         token: window.localStorage.getItem("token"),
  //         lname: lnamees,
  //         fname: fnamees,
  //       })
  //       .then(function (data) {
  //         // console.log(data);

  //         setData(data.data.data);
  //         editidtelegram();
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //         toast.error("Lỗi");
  //       });
  //   }
  // };
  const userName = localStorage.getItem("username") || "";
  const userEmail = localStorage.getItem("useremail") || "";
  const userMobile = localStorage.getItem("usermobile") || "";
  const userFirstName = localStorage.getItem("userfirstname") || "";

  const userCreate = localStorage.getItem("usercreatedAt") || "";
  return (
    <div className="home w-full">
      <div className="homeContainer w-3/4 ml-auto mr-auto p-10">
        <div>
          <div className="card-container" style={{ textAlign: "center" }}>
            <div className="headerUser">
              <img
                className="imgavt"
                src={avatar}
                alt={userName + " " + userFirstName}
                style={{
                  height: "200px",
                  width: "200px",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              />
            </div>
            <div className="social-container">
              <div className="followers">
                <h1 className="text-sm text-gray-700">Email</h1>
                <h2 className="bold-text" style={{ paddingBottom: "20px" }}>
                  {userEmail ? userEmail : "Loading..."}
                </h2>
              </div>
              <div className="likes">
                <h1 className="text-sm text-gray-700">Họ và tên</h1>
                <h2 className="bold-text" style={{ paddingBottom: "20px" }}>
                  {userName ? userName + " " + userFirstName : "Loading..."}
                </h2>
              </div>
              <div className="likes">
                <h1 className="text-sm text-gray-700">Số điện thoại</h1>
                <h2 className="bold-text" style={{ paddingBottom: "20px" }}>
                  {userMobile ? userMobile : "Loading..."}
                </h2>
              </div>
              <div className="likes">
                <h1 className="text-sm text-gray-700">Ngày đăng ký</h1>
                <h2 className="bold-text" style={{ paddingBottom: "20px" }}>
                  {userCreate
                    ? moment(userCreate).format("DD/MM/YYYY")
                    : "Loading..."}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="orderhistory w-full ml-auto mr-auto p-10">
        <div className="card-container" style={{ textAlign: "center" }}>
          <div className="text-2xl text-transform: uppercase p-3">
            <h1>Đơn hàng</h1>
            <hr />
            <table
              className="w-full text-sm lg:text-base text-center"
              cellspacing="0"
            >
              <thead>
                <tr className="h-12 uppercase text-center">
                  <th className="md:table-cell">Ảnh </th>
                  <th className="text-center">Sản phẩm</th>
                  <th className="lg:text-center text-left pl-5 lg:pl-0">
                    <span className="lg:hidden" title="Quantity">
                      Qtd
                    </span>
                    <span className="hidden lg:inline">Số lượng</span>
                  </th>
                  <th className="hidden md:table-cell">Giá</th>
                  <th>Tổng giá</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className=" pb-4 md:table-cell ">
                    <a href="#">
                      <img
                        src={avatar}
                        className="w-20 h-20 rounded mx-auto rounded-lg shadow-lg"
                        alt="Thumbnail"
                      />
                    </a>
                  </td>
                  <td>
                    <p className="mb-2 md:text-center truncate max-w-[130px] mx-auto ">
                      Atermix
                    </p>
                  </td>
                  <td className="justify-center md:justify-center md:flex mt-6">
                    <div className="w-20 h-10 ">
                      <div className="relative flex w-full h-8">
                        <input
                          type="text"
                          value="1"
                          className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black "
                          disabled
                        />
                      </div>
                    </div>
                  </td>
                  <td className="text-center md:table-cell">
                    <span className="text-sm lg-text-left lg:text-base font-medium text-red-500">
                      {new Intl.NumberFormat({
                        style: "currency",
                        currency: "VND",
                      }).format(100000)}{" "}
                      VNĐ
                    </span>
                  </td>
                  <td className="text-center md:table-cell">
                    <span className="text-sm text-center lg:text-base font-medium text-red-500">
                      {new Intl.NumberFormat({
                        style: "currency",
                        currency: "VND",
                      }).format(100000)}{" "}
                      VNĐ
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;

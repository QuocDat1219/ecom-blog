import "./User.scss";
import { Link } from "react-router-dom";
import { addItem, removeItem } from "../../redux/action/cartActions";
import { useDispatch, useSelector } from "react-redux";
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
  const userData = localStorage.getItem("token") || "";
  const [totalPrices, setTotalPrices] = useState(0);
  const [total, setTotal] = useState(0);
  const [shipPrices, setShipPrices] = useState(30000);
  const [voucher, setVoucher] = useState();
  const [voucherPrices, setVoucherPrices] = useState(0);
  const [voucherTitle, setVoucherTitle] = useState("");

  const [userId, userPassword] = userData.split(":");
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  let cartData = JSON.parse(localStorage.getItem("cartItems")) || [];

  const totalPrice = (price, qty) => {
    const total = price * qty;
    const formattedTotal = total.toLocaleString({
      style: "currency",
      currency: "VND",
    });
    return formattedTotal;
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartData.forEach((item) => {
      totalPrice += item.price * item.qty;
    });

    return totalPrice;
  };

  const calculateTotal = () => {
    let total = 0;
    total = totalPrices + shipPrices - voucherPrices;

    return total;
  };
  useEffect(() => {
    const totalPrice = calculateTotalPrice();
    setTotalPrices(totalPrice);
    const total = calculateTotal();
    setTotal(total);
  }, [cartData]);

  const vouchers = [
    {
      ma: "123",
      dis: 10000,
    },
    {
      ma: "Ma1",
      dis: 15000,
    },
  ];

  const addVoucher = () => {
    const existingVoucher = vouchers.find(
      (vc) => vc.ma.toLowerCase() === voucher.toLowerCase()
    );

    if (existingVoucher) {
      setVoucherTitle(existingVoucher.ma);
      setVoucherPrices(existingVoucher.dis);
      toast("Voucher đã nhập thành công");
    } else {
      toast("Voucher không tồn tại");
    }
  };
  const handleRemoveFromCart = (id) => {
    dispatch(removeItem(id));
  };
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
                {cartData.map((item, index) => (
                  <tr>
                    <td className=" pb-4 md:table-cell ">
                      <a href="#">
                        <img
                          src={item.image}
                          className="w-20 h-20 rounded mx-auto rounded-lg shadow-lg"
                          alt="Thumbnail"
                        />
                      </a>
                    </td>
                    <td>
                      <p className="mb-2 md:text-center truncate max-w-[130px] mx-auto ">
                        {item.title}
                      </p>
                    </td>
                    <td className="justify-center md:justify-center md:flex mt-6">
                      <div className="w-20 h-10 ">
                        <div className="relative flex w-full h-8">
                          <input
                            type="text"
                            value={item.qty}
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black "
                            disabled
                          />
                        </div>
                      </div>
                    </td>
                    <td className="text-center md:table-cell">
                      <span className="text-gray-700">
                        {new Intl.NumberFormat({
                          style: "currency",
                          currency: "VND",
                        }).format(item.price)}{" "}
                        VNĐ
                      </span>
                    </td>
                    <td className="text-center md:table-cell">
                    <span className="text-sm lg:text-base font-medium text-red-500">
                          {totalPrice(item.price, item.qty)} VNĐ
                        </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
};
export default UserProfile;

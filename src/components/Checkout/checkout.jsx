import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { addItem, removeItem } from "../../redux/action/cartActions";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import emty from "../images/empty-cart.png";
import "./checkout.css";
const Checkout = () => {
  const userData = localStorage.getItem("token") || "";
  const [totalPrices, setTotalPrices] = useState(0);
  const [total, setTotal] = useState(0);
  const [shipPrices, setShipPrices] = useState(30000);
  const [voucher, setVoucher] = useState();
  const [voucherPrices, setVoucherPrices] = useState(0);
  const [voucherTitle, setVoucherTitle] = useState("");

  const [userId, userEmail, userPassword] = userData.split(":");
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

  return cartData.length != 0 ? (
    <div classNameName="maincontainer">
      <div className="container mx-auto sm:px-4">
        <div className="py-5 text-center font-bold text-[25px]">Checkout</div>
        <div className="flex flex-wrap ">
          <div className="md:w-1/3 pr-4 pl-4 md:order-2 mb-4">
            <h4 className="flex justify-between items-center mb-3">
              <span className="text-gray-700">Giỏ hàng của bạn</span>
            </h4>
            {cartData.map((item, index) => (
              <ul className="flex flex-col pl-0 border rounded border-gray-300 mb-3">
                <li className="relative  py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between lh-condensed">
                  <div>
                    <h6 className="text-gray-700">{item.title} <span className="text-blue-600 text-[15px]"> x {item.qty}</span></h6>
                  </div>
                  <span className="text-gray-700">
                    {new Intl.NumberFormat({
                      style: "currency",
                      currency: "VND",
                    }).format(item.price)}{" "}
                    VNĐ
                  </span>
                </li>
                {/* <li className="relative py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between bg-gray-100">
                  <div className="text-green-500">
                    <h6 className="my-0">Promo code</h6>
                    <small>EXAMPLE CODE</small>
                  </div>
                  <span className="text-green-500">  {new Intl.NumberFormat({
                          style: "currency",
                          currency: "VND",
                        }).format(voucherPrices)}{" "}
                        VNĐ</span>
                </li> */}
                {/* <li className="relative  py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li> */}
              </ul>
            ))}
            <div className="">
              <ul>
              <li className="relative  py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between">
                  <span>Vận chuyển (VND)</span>
                  <span className="text-green-300">
                        {new Intl.NumberFormat({
                          style: "currency",
                          currency: "VND",
                        }).format(shipPrices)}{" "}
                        VNĐ
                      </span>
                </li>
                <li className="relative  py-3 px-6 -mb-px border border-r-0 border-l-0 border-gray-300 no-underline flex justify-between">
                  <span>Tổng cộng (VND)</span>
                  <span className="text-red-500">
                        {new Intl.NumberFormat({
                          style: "currency",
                          currency: "VND",
                        }).format(total)}{" "}
                        VNĐ
                      </span>
                </li>
              </ul>
            </div>
            {/* <form className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 p-2">
              <div className="relative flex items-stretch w-full">
                <input
                  type="text"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  placeholder="Promo code"
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-gray-600 text-white hover:bg-gray-700"
                  >
                    Redeem
                  </button>
                </div>
              </div>
            </form> */}
          </div>
          <div className="md:w-2/3 pr-4 pl-4 md:order-1">
            <h4 className="mb-3">Billing address</h4>
            <form className="needs-validation" novalidate>
              <div className="flex flex-wrap ">
                <div className="md:w-1/2 pr-4 pl-4 mb-3">
                  <label for="firstName">Nhập họ</label>
                  <input
                    type="text"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    id="firstName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div className="hidden mt-1 text-sm text-red">
                    Valid first name is required.
                  </div>
                </div>
                <div className="md:w-1/2 pr-4 pl-4 mb-3">
                  <label for="lastName">Tên</label>
                  <input
                    type="text"
                    className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                    id="lastName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div className="hidden mt-1 text-sm text-red">
                    Valid last name is required.
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label for="email">
                  Email <span className="text-gray-700"></span>
                </label>
                <input
                  type="email"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  id="email"
                  placeholder="Nhập email"
                />
                <div className="hidden mt-1 text-sm text-red">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>
              <div className="mb-3">
                <label for="address">Địa chỉ</label>
                <input
                  type="text"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  id="address"
                  placeholder="Địa chỉ"
                  required
                />
                <div className="hidden mt-1 text-sm text-red">
                  Please enter your shipping address.
                </div>
              </div>
              <div className="mb-3">
                <label for="address2">
                  Số điện thoại <span className="text-gray-700"></span>
                </label>
                <input
                  type="number"
                  className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                  id="sdt"
                  placeholder=""
                />
              </div>
              <hr className="mb-4" />
              <div className="my-3 mb-10">
                <h4 className="mb-3 flex flex-row sm:flex-col items-center justify-center">
                  Payment
                </h4>
                <ul className="payment-methods flex flex-col sm:flex-row items-center justify-center">
                  <li className="payment-method paypal sm:w-full sm:mb-3 ml-[23px] mb-[10px]">
                    <input name="payment_methods" type="radio" id="paypal" />
                    <label htmlFor="paypal">PayPal</label>
                  </li>

                  <li className="payment-method pagseguro sm:w-full sm:mb-3  mb-[10px]">
                    <input name="payment_methods" type="radio" id="pagseguro" />
                    <label htmlFor="pagseguro">PagSeguro</label>
                  </li>

                  <li className="payment-method bankslip sm:w-full sm:mb-3  mb-[10px]">
                    <input name="payment_methods" type="radio" id="bankslip" />
                    <label htmlFor="bankslip">Boleto</label>
                  </li>
                </ul>
              </div>
              <hr className="mb-4" />
              <button
                className=" align-middle text-center select-none border font-normal whitespace-no-wrap rounded  no-underline bg-blue-600 text-white hover:bg-blue-600 py-3 px-4 leading-tight text-xl block w-full mb-8 mt-8"
                type="button"
              >
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center">
      Rong
    </div>
  );
};

export default Checkout;

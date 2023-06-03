import { useEffect, useState } from "react";
import axios from "axios";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./checkout.css";
import { toast } from "react-toastify";

const Checkout = () => {
  const [thanhtoan, setThanhToan] = useState(0);
  const [total, setTotal] = useState(0);
  const id = window.localStorage.getItem("user_infos");

  useEffect(() => {
    const cart = window.localStorage.getItem("cartItems");
    const cartItems = JSON.parse(cart); // Chuyển đổi chuỗi JSON thành đối tượng JavaScript

    if (cartItems && cartItems.length > 0) {
      const item = cartItems[0]; // Lấy phần tử đầu tiên từ mảng cartItems

      const price = item.price; // Lấy giá sản phẩm từ thuộc tính price
      const qty = item.qty; // Lấy số lượng sản phẩm từ thuộc tính qty

      setTotal(price * qty); // Tính
    }
  }, [total]);

  const payment = () => {
    const payPrice = total / 23000;
    setThanhToan(payPrice.toFixed(2));
    return payPrice.toFixed(2);
  };

  const handleOrder = async () => {
    const cart = window.localStorage.getItem("cartItems");
    axios
      .post(`${process.env.REACT_APP_API_URL}orders/createOrder`, {
        products: JSON.parse(cart),
        namePayment: "Paypal",
        statusPayment: "Đã thanh toán",
        orderby: JSON.parse(id)._id,
        totalprice: total,
      })
      .then(() => {
        toast.success("Đặt hàng thành công");
      });
  };

  return (
    <div className="maincontainer">
      <PayPalScriptProvider
        options={{
          components: "buttons",
          "client-id":
            "Ae_5iJYWFGJUR7mT3-KZaTj3U4O9uaxZE7Yy98NiKfXTCdkS7PrHW-NvljIMRfrWeXiSLFBwgcXEZrS7",
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: payment(),
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              console.log(details);
              if (details.status === "COMPLETED") {
                handleOrder();
              }
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Checkout;

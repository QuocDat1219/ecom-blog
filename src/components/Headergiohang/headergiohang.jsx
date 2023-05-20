import { RiShoppingCartFill } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userDialog } from "./userdialog";
import { logout } from "../../redux/login/login.actions";
import { useState } from "react";
const Headergiohang = () => {
  const { isauth } = useSelector((store) => store.login);
  const [opendialog, setOpenDiaLog] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logout());
  };
  return (
    <nav className="flex p-4  text-black">
      <div className="lg:ml-[93%] ml-[75%]">
        <Link to="/cart">
          <RiShoppingCartFill className="w-10 h-10 text-[#6698ff]" />
        </Link>
      </div>
      {isauth == true ? (
        <div className="lg:ml-auto ml-auto">
          {cartItems.length > 0 && (
            <span className="cart-basket">{cartItems.length}</span>
          )}
          <button onClick={() => setOpenDiaLog(true)}>
            <HiOutlineUserCircle className="w-10 h-10 text-[#6698ff]" />
          </button>
        </div>
      ) : (
        <div className="lg:ml-auto ml-auto">
          <Link to="/login">
            <sp className="text-xl">Đăng nhập / Đăng ký</sp>
          </Link>
        </div>
      )}
      {opendialog && <userDialog />}
    </nav>
  );
};

export default Headergiohang;

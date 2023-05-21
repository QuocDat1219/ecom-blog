import { RiShoppingCartFill, RiUserSharedFill } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/login/login.actions";
import { useState } from "react";
const Headergiohang = () => {
  const { isauth } = useSelector((store) => store.login);
  const [opendialog, setOpenDiaLog] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlelogout = () => {
    dispatch(logout(navigate));
    setOpenDiaLog(false);
  };

  

  return (
    <nav className="flex text-black">
      <div className="lg:ml-[93%] ml-[70%]">
        {cartItems.length > 0 && (
          <span className="cart-basket z-10 absolute ml-[34px] mt-[3px] bg-red-500 rounded-full flex items-center justify-center w-[24px] h-[24px] text-white">
            {cartItems.length}
          </span>
        )}
        <Link to="/cart">
          <RiShoppingCartFill
            onClick={() => setOpenDiaLog(false)}
            className="w-10 h-10 mt-[10px] text-[#6698ff]"
          />
        </Link>
      </div>
      {isauth == true ? (
        <div className="lg:ml-auto ml-auto">
          <button onClick={() => setOpenDiaLog(true)}>
            <HiOutlineUserCircle className="w-10 h-10 text-[#6698ff]" />
          </button>
        </div>
      ) : (
        <div className="lg:ml-auto ml-auto">
          <Link to="/login">
            <RiUserSharedFill className="w-10 h-10 mt-[10px] mr-[10px] mb-[10px] text-[#6698ff]" />
          </Link>
        </div>
      )}
      {opendialog == true ? (
        <div className="w-[100px] h-[100px] bg-gray-600 text-white">
          <Link to="/userinfo">
            <h3 className="font-bold">Trang cá nhân</h3>
          </Link>
          <button onClick={handlelogout}>Đăng xuất</button>
        </div>
      ) : null}
    </nav>
  );
};

export default Headergiohang;

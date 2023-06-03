import { RiShoppingCartFill, RiUserSharedFill } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { logout } from "../../redux/login/login.actions";
import { useState } from "react";
import {
  CAvatar,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
const Headergiohang = () => {
  const { isauth } = useSelector((store) => store.login);
  const [openDropdown, setOpenDropdown] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout(navigate));
    setOpenDropdown(false);
  };
  
  const toggleDropdown = () => {
    setOpenDropdown(!openDropdown);
  };
  
  return (
    <nav className="flex text-black">
      <div className="lg:ml-[93%] ml-[70%] pb-[10px]">
        {cartItems.length > 0 && (
          <span className="cart-basket z-10 absolute ml-[34px] mt-[3px] bg-red-500 rounded-full flex items-center justify-center w-[24px] h-[24px] text-white">
            {cartItems.length}
          </span>
        )}
        <Link to="/cart">
          <RiShoppingCartFill
            onClick={() => setOpenDropdown(false)}
            className="w-10 h-10 mt-[10px] text-[#6698ff]"
          />
        </Link>
      </div>
      {isauth === true ? (
        <div className="lg:ml-auto ml-auto">
          <CDropdown
            variant="nav-item"
            className="relative"
            style={{ listStyle: "none" }}
            onClick={toggleDropdown}
          >
            <ToastContainer />
            <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
              <HiOutlineUserCircle className="w-10 h-10 mt-[11px] text-[#6698ff]" />
            </CDropdownToggle>
            {openDropdown && (
              <CDropdownMenu className="pt-0 pb-2 px-0 mt-2 w-48 absolute z-50 bg-white rounded shadow-lg border border-gray-200">
              <CDropdownHeader className="bg-gray-200 text-black px-4 py-2 font-semibold">
                User
              </CDropdownHeader>
              <CDropdownItem className="px-4 py-2 hover:bg-gray-100">
                <Link to="/userinfo" className="flex items-center">
                  <AccountCircleIcon className="mr-2" /> Thông tin cá nhân
                </Link>
              </CDropdownItem>
              <CDropdownItem className="py-2 hover:bg-gray-100" >
                <Link onClick={handleLogout}>
                <LogoutIcon className="mr-2" /> Đăng xuất
                </Link>
              </CDropdownItem>
            </CDropdownMenu>
            )}
          </CDropdown>
        </div>
      ) : (
        <>
          <div className="lg:ml-auto ml-auto">
            <Link to="/login">
              <RiUserSharedFill className="w-10 h-10 mt-[10px] mr-[10px] mb-[10px] text-[#6698ff]" />
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Headergiohang;

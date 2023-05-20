import { Link } from "react-router-dom";
import { logout } from "../../redux/login/login.actions";
import { useDispatch } from "react-redux";
const userDialog = () => {
  const dispatch = useDispatch;
  const handlelogout = () => {
    dispatch(logout());
  };
  return (
    <div className="w-[100px] h-[100px] bg-gray-600 text-white">
      <Link to="/userinfo">
        <h3 className="font-bold">Trang cá nhân</h3>
      </Link>
      <button onClick={handlelogout}>Đăng xuất</button>
    </div>
  );
};

export default userDialog;

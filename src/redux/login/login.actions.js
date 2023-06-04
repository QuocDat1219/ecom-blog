import axios from "axios";
import { toast } from "react-toastify";
import {
  LOGIN_GET_LOADING,
  LOGIN_GET_SUCCESS,
  LOGIN_GET_ERROR,
  UPDATE_GET_SUCCESS,
  LOGOUT_GET,
} from "./login.types";
export const login = (creds) => async (dispatch) => {
  dispatch({ type: LOGIN_GET_LOADING });
  try {
    let res = await axios.post("http://localhost:5000/api/user/login", creds);
    let data = await res.data;
    // return console.log(res);
    return dispatch({ type: LOGIN_GET_SUCCESS, payload: data });
  } catch (e) {
    return dispatch({ type: LOGIN_GET_ERROR, payload: e.message });
  }
};

export const logout = (navigate) => async (dispatch) => {
  // to remove all userinfo at the time of user logout

  toast.success("Đăng xuất thành công");
  navigate("/");
  return dispatch({
    type: LOGOUT_GET,
  });
};
import ScrollToTop from "react-scroll-to-top";
import "./Itop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faComment } from "@fortawesome/free-solid-svg-icons";

const Itop = () => {
  return (
    <>
      {/* <div className="chat-buttons">
        <a href="https://zalo.me/0123456789">
          <button className="chat-button">
            <img
              src="https://everev.vn/wp-content/uploads/2023/03/icon-zalo-EverEV.png"
              alt="Zalo chat icon"
              className="iconZalo"
            />
          </button>
        </a>
        <a href="https://m.me/123456789">
          <button className="chat-button">
            <img
              src="https://image.flaticon.com/icons/png/512/2111/2111728.png"
              alt="Messenger chat icon"
            />
          </button>
        </a>
        <a href="tel:+123456789">
          <button className="chat-button">
            <img
              src="https://image.flaticon.com/icons/png/512/60/60544.png"
              alt="Phone icon"
            />
          </button>
        </a>
      </div> */}
      <div className="chat-buttons">
        <ul>
          <li>
            <a href="https://zalo.me/0123456789">
              <img
                src="https://everev.vn/wp-content/uploads/2023/03/icon-zalo-EverEV.png"
                alt="Zalo chat icon"
                className="iconZalo"
              />
            </a>
          </li>
          <li>
            <a href="tel:+123456789">
              <img
                src="https://everev.vn/wp-content/uploads/2023/03/icon-call-EverEV.png"
                alt="Phone icon"
                className="iconPhone"
              />
            </a>
          </li>
        </ul>
      </div>
      <ScrollToTop smooth />
    </>
  );
};

export default Itop;

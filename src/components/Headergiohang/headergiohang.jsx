import { RiShoppingCartFill } from "react-icons/ri";
import { HiOutlineUserCircle } from "react-icons/hi";
const Headergiohang = () => {
  return (
    <nav className="flex p-4  text-black">
      <div className="lg:ml-[93%] ml-[75%]" >
         <RiShoppingCartFill className="w-10 h-10 text-[#6698ff]"/>
      </div>
      <div className="lg:ml-auto ml-auto">
      <HiOutlineUserCircle className="w-10 h-10 text-[#6698ff]"/>
      </div>
    </nav>
  );
};

export default Headergiohang;

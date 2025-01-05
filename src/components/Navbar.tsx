import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { useShoppingCart } from "../context/ShoppingCartContext";
import PayingCart from "./PayingCart";
import imageLogo from "../assets/logoo.png";

export default function Navbar() {
  const { openCart, cartQuantity, isOpenPay } = useShoppingCart();

  return (
    <div className=" fixed z-20 bg-white shadow-sm mb-3 items-center w-full flex flex-grow ">
      <div className="flex items-center">
        <img src={imageLogo} className="md:size-20 size-10" alt="imag" />
        <h1 className="text-pink-500 text-xs md:text-base font-bold">Baby </h1>
        <h1 className="text-blue-600 text-xs md:text-base font-bold">Store</h1>
      </div>
      <div className="flex md:flex-grow flex-row  justify-end md:-mx-24 mx-16 gap-4 md:gap-8 items-center">
        <NavLink
          to="/"
          className="md:text-gray-500 md:font-bold text-xs md:text-base hover:text-gray-900 "
        >
          خانه
        </NavLink>
        <NavLink
          to="/Nini"
          className="text-gray-500 md:font-bold text-xs md:text-base hover:text-gray-900 "
        >
          نوزاد
        </NavLink>
        <NavLink
          to="/Girl"
          className="text-gray-500 md:font-bold text-xs md:text-base hover:text-gray-900"
        >
          دخترانه
        </NavLink>
        <NavLink
          to="/Boy"
          className="text-gray-500 md:font-bold text-xs md:text-base hover:text-gray-900"
        >
          پسرانه
        </NavLink>

        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            className=" md:w-10 rounded-full w-7 h-7 md:h-10	flex items-center justify-center mr-32 hover:bg-gray-200 hover:transition delay-200 duration-300 	"
          >
            <CgShoppingCart className="md:w-10 md:h-10 w-7 h-7 " />
            <div className="text-red-600  ">{cartQuantity}</div>
          </Button>
        )}
      </div>

      {isOpenPay && (
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
          <div className="w-full max-w-fit bg-white shadow-lg rounded-3xl p-6 relative">
            <PayingCart />
          </div>
        </div>
      )}
    </div>
  );
}

import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { useShoppingCart } from "../context/ShoppingCartContext";
import PayingCart from "./PayingCart";

export default function Navbar() {
  const { openCart, cartQuantity, isOpenPay } = useShoppingCart();
  return (
    <div className="bg-white shadow-sm mb-3 flex flex-grow ">
      <NavLink to="/" className="text-gray-600 hover:text-gray-900 mx-4">
        Home
      </NavLink>
      <NavLink to="/Store" className="text-gray-600 hover:text-gray-900 mx-2">
        Store
      </NavLink>
      <NavLink to="/About" className="text-gray-600 hover:text-gray-900 mx-4">
        About
      </NavLink>
      {cartQuantity > 0 && (
        <Button
          onClick={openCart}
          className="border w-10 rounded-full h-10	flex items-center justify-center ml-auto mx-6 bg-cyan-50 hover:bg-cyan-200 hover:transition delay-200 duration-300 	"
        >
          <CgShoppingCart className="w-10 h-10 " />
          <div className="text-red-600  ">{cartQuantity}</div>
        </Button>
      )}

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

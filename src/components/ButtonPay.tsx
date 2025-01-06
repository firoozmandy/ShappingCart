import { useShoppingCart } from "../context/ShoppingCartContext";

export default function ButtonPay() {
  const { closeCart, openPay } = useShoppingCart();
  return (
    <div>
      <div className="flex max-sm:flex-col gap-4 mt-6">
        <button
          type="button"
          className="text-sm px-5 py-2.5 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md tracking-wide"
          onClick={closeCart}
        >
          به خرید ادامه دهید
        </button>
        <button
          type="button"
          className="text-sm px-5 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md tracking-wide"
          onClick={openPay}
        >
          پرداخت
        </button>
      </div>
    
    </div>
  );
}

import { useShoppingCart } from "../context/ShoppingCartContext";
import FormatCurrency from "../ultilities/FormatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function StorItem({ id, name, price, image }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    <div className="h-80">
      <img src={image} alt="img" className="h-60" />
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">{name}</h2>
          <span className="ms-2"> {FormatCurrency(price)} </span>
        </div>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button
              onClick={() => increaseCartQuantity(id)}
              className="w-full bg-red-300"
            >
              {" "}
              +ADD
            </button>
          ) : (
            <div className="flex flex-col items-center gap-2 ">
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => decreaseCartQuantity(id)}
                  className="w-6 rounded-xl bg-teal-400"
                >
                  -
                </button>
                <div>
                  <span>{quantity}</span>
                </div>
                <button
                  onClick={() => increaseCartQuantity(id)}
                  className="w-6 rounded-xl bg-teal-400"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(id)}
                className="w-20 bg-red-400 rounded-xl"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

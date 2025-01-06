import { useShoppingCart } from "../context/ShoppingCartContext";

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
    <div className="h-80 ">
      <img src={image} alt="img" className="h-60" />
      <div className="flex flex-col">
        <div className="flex justify-between">
          <h2 className="text-xs font-bold text-gray-800 my-2">{name}</h2>
          <span className="ms-2 text-gray-500 my-2"> T {price} </span>
        </div>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button
              onClick={() => increaseCartQuantity(id)}
              className="w-full bg-gray-300 text-black"
            >
              {" "}
              افزودن
            </button>
          ) : (
            <div className="flex flex-col items-center gap-2 ">
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => decreaseCartQuantity(id)}
                  className="w-6 rounded-xl bg-gray-300 text-black"
                >
                  -
                </button>
                <div>
                  <span>{quantity}</span>
                </div>
                <button
                  onClick={() => increaseCartQuantity(id)}
                  className="w-6 rounded-xl  bg-gray-300 text-black"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(id)}
                className="w-20 bg-red-600 rounded-xl"
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

import { useShoppingCart } from "../context/ShoppingCartContext"
import storItems from "../data/items.json"
import FormatCurrency from "../ultilities/FormatCurrency"

type CartItemProps ={
    id: number,
    quantity:number,
}

export default function CartItem({id,quantity} :CartItemProps) {
  const {removeFromCart} = useShoppingCart()
  const item = storItems.find(i => i.id === id)
  if(item == null) return null
  
    return (
        <div className="space-y-4 mt-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center">
            <img
              src={item.image}
              className="w-16 h-16 p-2 shrink-0 bg-gray-200 rounded-md"
            />
            <div className="ml-4">
              <p className="text-sm text-gray-800">{item.name}</p>
              <p className="text-gray-500 text-xs mt-1">{quantity} Item</p>
              <p className="text-pink-300">{FormatCurrency(item.price)}</p>
            </div>
          </div>

          <div className="flex items-center">
            <span className="text-base font-bold text-gray-800 mr-4">
              {FormatCurrency(item.price * quantity)}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[18px] fill-red-500 inline cursor-pointer"
              viewBox="0 0 24 24"
            onClick={()=>removeFromCart(item.id)}
            
            >
              <path
                d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                data-original="#000000"
              ></path>
              <path
                d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                data-original="#000000"
              ></path>
            </svg>
          </div>
       
        </div>
      </div>
  )
}

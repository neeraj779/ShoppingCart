import React from "react";
import { FaTrash } from "react-icons/fa";
import { BiPlus, BiMinus } from "react-icons/bi";

const CartItem = ({
  product,
  addToCart,
  reduceItemQuantity,
  removeItemFromCart,
}) => {
  return (
    <tr className="transition duration-300 border-b border-gray-600 hover:bg-gray-700">
      <td className="flex items-center p-4 text-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-16 h-16 mr-4 rounded-md shadow"
        />
        <span className="truncate">{product.title}</span>
      </td>
      <td className="p-4 text-gray-100">${product.price.toFixed(2)}</td>
      <td className="p-4 text-gray-100">
        <div className="flex items-center space-x-2">
          <button
            onClick={() =>
              product.quantity > 1 && reduceItemQuantity(product.id)
            }
            className="p-2 text-white transition duration-300 bg-red-600 rounded-full hover:bg-red-500"
            aria-label="Decrease quantity"
          >
            <BiMinus />
          </button>
          <span className="text-lg font-semibold">{product.quantity}</span>
          <button
            onClick={() => addToCart(product)}
            className="p-2 text-white transition duration-300 bg-green-600 rounded-full hover:bg-green-500"
            aria-label="Increase quantity"
          >
            <BiPlus />
          </button>
        </div>
      </td>
      <td className="p-4 text-gray-100">
        ${(product.price * product.quantity).toFixed(2)}
      </td>
      <td className="p-4">
        <button
          onClick={() => removeItemFromCart(product.id)}
          className="flex items-center px-4 py-2 text-white transition duration-300 bg-red-600 rounded hover:bg-red-500"
          aria-label="Remove item"
        >
          <FaTrash className="mr-2" />
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;

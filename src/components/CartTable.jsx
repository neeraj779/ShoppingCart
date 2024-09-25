import PropTypes from "prop-types";
import CartItem from "./CartItem";

const CartTable = ({
  cart,
  addToCart,
  reduceItemQuantity,
  removeItemFromCart,
}) => {
  return (
    <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg">
      <table className="min-w-full">
        <thead className="bg-gray-700">
          <tr>
            <th className="p-4 text-left text-gray-200">Product</th>
            <th className="p-4 text-left text-gray-200">Price</th>
            <th className="p-4 text-left text-gray-200">Quantity</th>
            <th className="p-4 text-left text-gray-200">Total</th>
            <th className="p-4 text-left text-gray-200">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              addToCart={addToCart}
              reduceItemQuantity={reduceItemQuantity}
              removeItemFromCart={removeItemFromCart}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

CartTable.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
  reduceItemQuantity: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
};

export default CartTable;

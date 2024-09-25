import PropTypes from "prop-types";

const CartSummary = ({ totalAmount, handleCheckout }) => {
  return (
    <div className="p-6 mt-8 bg-gray-700 rounded-lg shadow-lg">
      <h2 className="text-lg font-bold text-gray-200">Total Amount</h2>
      <p className="text-3xl font-semibold text-yellow-300">
        ${totalAmount.toFixed(2)}
      </p>
      <button
        onClick={handleCheckout}
        className="w-full px-6 py-2 mt-4 text-lg font-semibold text-white transition duration-300 bg-green-600 rounded-lg hover:bg-green-500"
        aria-label="Checkout"
      >
        Checkout
      </button>
    </div>
  );
};

CartSummary.propTypes = {
  totalAmount: PropTypes.number.isRequired,
  handleCheckout: PropTypes.func.isRequired,
};

export default CartSummary;

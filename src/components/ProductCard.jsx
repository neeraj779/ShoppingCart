import PropTypes from "prop-types";

const ProductCard = ({ product, inCart, addToCart, reduceItemQuantity }) => {
  return (
    <div className="p-6 transition-shadow duration-300 transform bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2">
      <img
        src={product.image}
        alt={product.title}
        className="object-cover w-full h-64 mb-4 transition-transform duration-200 rounded-lg hover:scale-105"
      />
      <h2 className="mb-2 text-xl font-bold text-white truncate">
        {product.title}
      </h2>
      <p className="mb-4 text-sm text-gray-400 truncate">
        {product.description}
      </p>
      <p className="mb-4 text-xl font-semibold text-yellow-300">
        ${product.price.toFixed(2)}
      </p>

      {!inCart ? (
        <button
          onClick={() => addToCart(product)}
          className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Add to Cart
        </button>
      ) : (
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => reduceItemQuantity(product.id)}
            className="px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-red-600 rounded-lg shadow hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            -
          </button>
          <span className="text-lg font-semibold text-white">
            Quantity: {inCart.quantity}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-green-600 rounded-lg shadow hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  inCart: PropTypes.shape({
    quantity: PropTypes.number,
  }),
  addToCart: PropTypes.func.isRequired,
  reduceItemQuantity: PropTypes.func.isRequired,
};

export default ProductCard;

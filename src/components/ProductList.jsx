import useCart from "../hooks/useCart";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const ProductList = ({ products }) => {
  const { cart, addToCart, reduceItemQuantity } = useCart();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => {
        const inCart = cart.find((item) => item.id === product.id);
        return (
          <ProductCard
            key={product.id}
            product={product}
            inCart={inCart}
            addToCart={addToCart}
            reduceItemQuantity={reduceItemQuantity}
          />
        );
      })}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductList;

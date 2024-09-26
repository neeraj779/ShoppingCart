import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import { FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  const { cart } = useCart();
  console.log(cart);

  return (
    <nav className="p-4 bg-gray-800 shadow-lg">
      <div className="container flex items-center justify-between mx-auto">
        <div>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="text-lg font-semibold text-white transition duration-200 ease-in-out hover:text-gray-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-lg font-semibold text-white transition duration-200 ease-in-out hover:text-gray-300"
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to="/cart"
          className="relative flex items-center p-2 pt-3 text-white bg-gray-700 rounded-full"
        >
          <FaShoppingCart className="text-2xl" />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-green-500 rounded-full">
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

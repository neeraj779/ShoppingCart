import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="p-4 bg-gray-800 shadow-lg">
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
  </nav>
);

export default NavBar;

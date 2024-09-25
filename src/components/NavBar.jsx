import { Link } from "react-router-dom";

const NavBar = () => (
  <nav className="p-4 bg-gray-800">
    <ul className="flex space-x-4">
      <li>
        <Link to="/" className="text-white hover:underline">
          Home
        </Link>
      </li>
      <li>
        <Link to="/cart" className="text-white hover:underline">
          Cart
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;

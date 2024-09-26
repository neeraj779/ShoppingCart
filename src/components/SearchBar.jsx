import PropTypes from "prop-types";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="px-4 py-2 text-lg text-white bg-gray-700 border border-gray-600 rounded-lg w-[60vw] focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};

export default SearchBar;

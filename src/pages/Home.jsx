import { useQuery } from "@tanstack/react-query";
import apiClient from "../api/axios";
import ProductList from "../components/ProductList";
import LoadingSpinner from "../components/LoadingSpinner";
import noDataSvg from "../assets/no-data.svg";
import SearchBar from "../components/SearchBar";
import useSearch from "../hooks/useSearch";

const fetchProducts = async () => {
  const res = await apiClient().get("/products");
  return res.data;
};

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const {
    searchTerm,
    setSearchTerm,
    filteredData: filteredProducts,
  } = useSearch(data || [], "title");

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error loading products...</div>;
  }

  return (
    <div className="container px-10 py-10 mx-auto">
      <h1 className="mb-10 text-5xl font-extrabold text-center text-gray-200">
        Products
      </h1>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {filteredProducts.length === 0 ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <img src={noDataSvg} alt="No data" className="w-64 h-64" />
          <p className="text-lg font-semibold text-gray-200">
            No products found...
          </p>
        </div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
};

export default Home;

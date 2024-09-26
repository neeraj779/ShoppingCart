import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import apiClient from "../api/axios";
import ProductList from "../components/ProductList";
import LoadingSpinner from "../components/LoadingSpinner";
import noDataSvg from "../assets/no-data.svg";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
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

  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = useMemo(() => {
    if (!data) return [];
    const categorySet = new Set(data.map((product) => product.category));
    return Array.from(categorySet);
  }, [data]);

  const {
    searchTerm,
    setSearchTerm,
    filteredData: filteredProducts,
  } = useSearch(data || [], "title");

  const filteredByCategory = useMemo(() => {
    if (!selectedCategory) return filteredProducts;
    return filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }, [filteredProducts, selectedCategory]);

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

      <div className="flex flex-row items-center justify-between mb-4 space-x-4">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
        />
      </div>

      {filteredByCategory.length === 0 ? (
        <div className="flex flex-col items-center justify-center space-y-4">
          <img src={noDataSvg} alt="No data" className="w-64 h-64" />
          <p className="text-lg font-semibold text-gray-200">
            No products found...
          </p>
        </div>
      ) : (
        <ProductList products={filteredByCategory} />
      )}
    </div>
  );
};

export default Home;

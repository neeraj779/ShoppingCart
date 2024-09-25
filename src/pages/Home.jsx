import { useQuery } from "@tanstack/react-query";
import apiClient from "../api/axios";
import ProductList from "../components/ProductList";
import LoadingSpinner from "../components/LoadingSpinner";

const fetchProducts = async () => {
  const res = await apiClient().get("/products");
  return res.data;
};

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container px-10 py-10 mx-auto">
      <h1 className="mb-10 text-5xl font-extrabold text-center text-gray-200">
        Products
      </h1>
      <ProductList products={data} />
    </div>
  );
};

export default Home;

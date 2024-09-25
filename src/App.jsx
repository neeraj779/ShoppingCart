import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartProvider from "./contexts/CartContext";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
const queryClient = new QueryClient();

export default function App() {
  return (
    <div className="min-h-screen text-white bg-gray-900">
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Router>
            <NavBar />
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </ErrorBoundary>
          </Router>

          <Toaster
            toastOptions={{
              style: {
                background: "#5c5470",
                color: "#fff",
              },
            }}
          />
        </CartProvider>
      </QueryClientProvider>
    </div>
  );
}

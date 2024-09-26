import { useMemo, useCallback } from "react";
import useCart from "../hooks/useCart";
import { toast } from "react-hot-toast";
import CartTable from "../components/CartTable";
import CartSummary from "../components/CartSummary";

const Cart = () => {
  const { cart, removeItemFromCart, clearCart, addToCart, reduceItemQuantity } =
    useCart();

  const totalAmount = useMemo(() => {
    return cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  }, [cart]);

  const handleCheckout = useCallback(() => {
    toast.success(
      `Order placed successfully! Total: $${totalAmount.toFixed(2)} 🎉`,
      {
        duration: 8000,
      }
    );
    clearCart();
  }, [totalAmount, clearCart]);

  if (!cart.length) {
    return (
      <div className="mt-10 text-center text-gray-400">Your cart is empty</div>
    );
  }

  return (
    <div className="container max-w-6xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-6 text-4xl font-extrabold text-center text-gray-100">
        Your Cart
      </h1>
      <CartTable
        cart={cart}
        addToCart={addToCart}
        reduceItemQuantity={reduceItemQuantity}
        removeItemFromCart={removeItemFromCart}
      />
      <CartSummary totalAmount={totalAmount} handleCheckout={handleCheckout} />
    </div>
  );
};

export default Cart;

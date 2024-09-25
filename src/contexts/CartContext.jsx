import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
const REDUCE_ITEM_QUANTITY = "REDUCE_ITEM_QUANTITY";
const CLEAR_CART = "CLEAR_CART";

const initialState = [];

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case REMOVE_ITEM_FROM_CART: {
      return state.filter((item) => item.id !== action.payload);
    }
    case REDUCE_ITEM_QUANTITY: {
      const existingProduct = state.find((item) => item.id === action.payload);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          return state.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }
        return state.filter((item) => item.id !== action.payload);
      }
      return state;
    }
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
};

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const removeItemFromCart = (id) => {
    dispatch({ type: REMOVE_ITEM_FROM_CART, payload: id });
  };

  const reduceItemQuantity = (id) => {
    dispatch({ type: REDUCE_ITEM_QUANTITY, payload: id });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItemFromCart,
        reduceItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;

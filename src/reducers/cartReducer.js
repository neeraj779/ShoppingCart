const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
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
    case "REMOVE_ITEM_FROM_CART": {
      return state.filter((item) => item.id !== action.payload);
    }
    case "REDUCE_ITEM_QUANTITY": {
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
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export default cartReducer;

export const InitialState = {
  products: [],
  cart: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [
          {
            productId: action.productId,
            quantity: 1,
            price: action.price,
            productImg: action.productImg,
          },
          ...state.cart,
        ],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          ({ productId }, index, arr) => productId != action.productId
        ),
      };
    case "CHANGE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.productId === action.payload.id
            ? (c.quantity = action.payload.quantity)
            : c.quantity
        ),
      };

    default:
      return { ...state };
  }
};

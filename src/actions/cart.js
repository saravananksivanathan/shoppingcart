import actions from "../constants/actions";

const { ADD_TO_CART, REMOVE_FROM_CART } = actions;

export const addToCart = product => ({
  type: ADD_TO_CART,
  product
});

export const removeFromCart = product => ({
  type: REMOVE_FROM_CART,
  product
});

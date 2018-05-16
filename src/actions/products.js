import actions from "../constants/actions";

const { INCREASE_PRODUCT_COUNT, DECREASE_PRODUCT_COUNT } = actions;

export const increaseProductCount = product => ({
  type: INCREASE_PRODUCT_COUNT,
  product
});

export const decreaseProductCount = product => ({
  type: DECREASE_PRODUCT_COUNT,
  product
});

import actions from "../constants/actions";

const { ADD_TO_CART, REMOVE_FROM_CART } = actions;

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (action.product.quantity >= 1) {
        return state.map(product => {
          if (product.id === action.product.id) {
            return Object.assign({}, product, {
              quantity: action.product.quantity + 1
            });
          }
          return product;
        });
      } else if (action.product.quantity === 0) {
        return state.concat([
          Object.assign({}, action.product, {
            quantity: action.product.quantity + 1
          })
        ]);
      }
      return state;
    case REMOVE_FROM_CART:
      if (action.product.quantity > 1) {
        return state.map(product => {
          if (product.id === action.product.id) {
            return Object.assign({}, product, {
              quantity: action.product.quantity - 1
            });
          }
          return product;
        });
      } else if (action.product.quantity === 1) {
        return state.filter(product => product.id !== action.product.id);
      }
      return state;
    default:
      return state;
  }
};

export default reducer;

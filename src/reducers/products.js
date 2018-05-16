import actions from "../constants/actions";

const { INCREASE_PRODUCT_COUNT, DECREASE_PRODUCT_COUNT } = actions;

const initialState = [
  {
    id: 0,
    brand: "mtr",
    name: "Sambar Masala",
    weight: "50g",
    price: "100 Rs",
    quantity: 0
  },
  {
    id: 1,
    brand: "mtr",
    name: "Curry Masala",
    weight: "50g",
    price: "200 Rs",
    quantity: 0
  },
  {
    id: 2,
    brand: "mtr",
    name: "Lemon Rice Mix",
    weight: "50g",
    price: "75 Rs",
    quantity: 0
  },
  {
    id: 3,
    brand: "aachi",
    name: "Chicken Masala",
    weight: "100g",
    price: "95 Rs",
    quantity: 0
  },
  {
    id: 4,
    brand: "aachi",
    name: "Briyani Masala",
    weight: "50g",
    price: "80 Rs",
    quantity: 0
  },
  {
    id: 5,
    brand: "aachi",
    name: "Turmeric Powder",
    weight: "50g",
    price: "40 Rs",
    quantity: 0
  }
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_PRODUCT_COUNT:
      return state.map(product => {
        if (product.id === action.product.id) {
          return Object.assign({}, product, {
            quantity: action.product.quantity + 1
          });
        }
        return product;
      });
    case DECREASE_PRODUCT_COUNT:
      return state.map(product => {
        if (product.id === action.product.id) {
          return Object.assign({}, product, {
            quantity: action.product.quantity - 1
          });
        }
        return product;
      });
    default:
      return state;
  }
};

export default reducer;

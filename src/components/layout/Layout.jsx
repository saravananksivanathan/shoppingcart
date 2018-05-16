import React from "react";
import { connect } from "react-redux";
import { Header, Products, Cart } from "./..";
import * as productsActions from "../../actions/products";
import * as cartActions from "../../actions/cart";

const Layout = props => {
  const Component = (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header {...props} />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <Products {...props} />
        </div>
        <div className="col-4">
          <Cart {...props} />
        </div>
      </div>
    </div>
  );
  return Component;
};

const mapStateToProps = state => {
  const { cart, products } = state;
  return {
    data: {
      cart,
      products
    }
  };
};

const mapDispatchToProps = dispatch => ({
  increaseProductCount: product => {
    dispatch(productsActions.increaseProductCount(product));
    dispatch(cartActions.addToCart(product));
  },
  decreaseProductCount: product => {
    dispatch(productsActions.decreaseProductCount(product));
    dispatch(cartActions.removeFromCart(product));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);

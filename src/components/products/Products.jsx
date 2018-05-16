import React from "react";
import aachi from "../../images/aachi.png";
import mtr from "../../images/mtr.png";
import "./products.css";

const Products = props => {
  const { data, increaseProductCount, decreaseProductCount } = props;
  const { products } = data;
  const component = products.map((product, index) => {
    const isProductInCart = product.quantity;
    let logo;
    let button = (
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={() => increaseProductCount(product)}
      >
        Add to cart
      </button>
    );

    if (isProductInCart) {
      button = (
        <div>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => decreaseProductCount(product)}
          >
            -
          </button>
          <span> {product.quantity} in cart </span>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => increaseProductCount(product)}
          >
            +
          </button>
        </div>
      );
    }

    switch (product.brand) {
      case "aachi":
        logo = aachi;
        break;
      case "mtr":
        logo = mtr;
        break;
      default:
    }

    return (
      <div key={`${product.brand}-${index}`} className="col-4 my-3">
        <div className="card">
          <div className="logoContainer">
            <img className="card-img-top" src={logo} alt={product.brand} />
          </div>
          <div className="card-body">
            <small>{product.brand}</small>
            <h6 className="card-title">
              {`${product.name} (${product.weight})`}
            </h6>
            <p className="card-text">{product.price}</p>
            {button}
          </div>
        </div>
      </div>
    );
  });

  return <div className="row">{component}</div>;
};

export default Products;

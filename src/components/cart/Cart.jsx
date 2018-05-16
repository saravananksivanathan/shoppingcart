import React from "react";

const Cart = props => {
  const { data, decreaseProductCount } = props;
  const { cart } = data;
  const haveProductsInCart = cart && cart.length;
  let component = null;

  if (!haveProductsInCart) {
    component = (
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Your cart is empty.</li>
      </ul>
    );
  } else {
    const rows = cart.map((product, index) => {
      const totalPrice = product.quantity * parseInt(product.price, 10);
      return (
        <tr key={index}>
          <th scope="col">{product.name}</th>
          <td>{product.quantity}</td>
          <td>{totalPrice}</td>
          <td>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={() => {
                decreaseProductCount(
                  Object.assign({}, product, {
                    quantity: 1
                  })
                );
              }}
            >
              Remove
            </button>
          </td>
        </tr>
      );
    });
    component = (
      <table className="table">
        <thead>
          <th scope="row">Product</th>
          <td>Qty</td>
          <td>Price</td>
          <td />
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  return (
    <div className="row">
      <div className="col-12 my-3">
        <div className="card">
          <div className="card-header">You Cart Summary</div>
          {component}
        </div>
      </div>
    </div>
  );
};

export default Cart;

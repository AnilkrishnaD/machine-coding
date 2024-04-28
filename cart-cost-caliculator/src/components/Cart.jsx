import React, { useEffect, useState } from "react";
import { cartReducer } from "../reducers/CartReducer";
const Cart = ({ state, dispatch }) => {
  const [total, setTotal] = useState(0);

  const { cart, products } = state;

  // on change qty
  const changeQty = (id, quantity) =>
    dispatch({
      type: "CHANGE_CART_QUANTITY",
      payload: {
        id: id,
        quantity: quantity,
      },
    });

  useEffect(() => {
    let total = cart.reduce((acc, curr) => {
      return acc + Number(curr.price) * curr.quantity;
    }, 0);
    setTotal(total);
  }, [cart]);

  // return's jsx
  return (
    <div>
      <b>Cart</b>
      <b>Subtotal: ${total}</b>

      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {cart.length > 0 ? (
          cart.map((prod) => (
            <div
              key={prod.title}
              style={{
                display: "flex",
                padding: 10,
                border: "1px solid grey",
                margin: 5,
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: 10 }}>
                <img
                  src={prod.productImg}
                  alt={prod.title}
                  style={{ width: 70, objectFit: "cover" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <span>{prod.title}</span>
                  <b>$ {prod.price}</b>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <button
                  onClick={() => changeQty(prod.productId, prod.quantity - 1)}
                >
                  -
                </button>
                <span>{prod.quantity}</span>
                <button
                  onClick={() => changeQty(prod.productId, prod.quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <span style={{ padding: 20, alignSelf: "center" }}>
            Cart is empty
          </span>
        )}
      </div>
    </div>
  );
};

export default Cart;

import React from "react";

const Products = ({ state, dispatch }) => {
  console.log(state, "products");

  const { products, cart } = state;

  const cartItems = cart.map((p) => p.productId);
  // ad to cart
  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      quantity: 1,
      productId: product.id,
      productImg: product.thumbnail,
      price: product.price,
    });
  };

  // remove from cart
  const removeFromCart = (product) => {
    dispatch({
      productId: product.id,
      type: "REMOVE_FROM_CART",
    });
  };

  console.log(cart, "cart");

  // return jsx
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
      }}
    >
      Products
      {products.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: " 24px" }}>
          {products.map((item, index) => (
            <div key={item.id}>
              <img src={item.thumbnail} alt="image" />
              <p>{item.title}</p>
              <p>{item.price}</p>

              {!cartItems.includes(item.id) ? (
                <button
                  style={{
                    padding: "8px",
                    background: "green",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => addToCart(item)}
                >
                  Add to cart
                </button>
              ) : (
                <button
                  style={{
                    padding: "8px",
                    background: "red",
                    color: "white",
                    cursor: "pointer",
                  }}
                  onClick={() => removeFromCart(item)}
                >
                  Remove from cart
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

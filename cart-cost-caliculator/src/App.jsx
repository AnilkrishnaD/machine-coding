import { useState, useReducer } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { InitialState, cartReducer } from "./reducers/CartReducer";
import Products from "./components/Products";
import Cart from "./components/Cart";
function App() {
  const [state, dispatch] = useReducer(cartReducer, InitialState);

  // console.log(state);
  const fechProducts = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      // console.log(data);

      dispatch({ type: "ADD_PRODUCTS", payload: data.products });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fechProducts();
  }, []);

  // reyurn jsx
  return (
    <div style={{ display: "flex" }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;

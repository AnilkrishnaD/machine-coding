import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(products.length);
  // returns jsx
  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products
            .slice(activePage * 10 - 10, activePage * 10)
            .map((p, index) => (
              <p key={index}>{p.title}</p>
            ))}
        </div>
      )}
      {products.length > 0 && (
        <div className="pagination">
          <span>{"<"}</span>
          {[...Array(products.length / 10)].map((item, i) => (
            <button key={i}>{i + 1}</button>
          ))}
          <span>{">"}</span>
        </div>
      )}
    </div>
  );
};

export default Products;

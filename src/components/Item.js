import React, {useState} from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState("") 
  return (
    <li className={addToCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => setAddToCart("in-cart")}>{addToCart === "" ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;


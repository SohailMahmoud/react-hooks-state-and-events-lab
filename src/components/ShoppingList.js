import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => {
          return selectedCategory === "All" 
          ? <Item key={item.id} name={item.name} category={item.category} /> 
          : (selectedCategory === item.category && <Item key={item.id} name={item.name} category={item.category} />)
        }
          
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;

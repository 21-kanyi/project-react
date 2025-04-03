import { useState } from "react";
import "./App.css"; // Importing external CSS for styling

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <div className="container">
      <h2 className="title">Dynamic List Manager</h2>
      <div className="input-container">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter an item"
          className="input-field"
        />
        <button onClick={addItem} className="add-button">
          Add Item
        </button>
      </div>
      <ul className="list-container">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

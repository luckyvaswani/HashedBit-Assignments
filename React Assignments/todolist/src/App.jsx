// App.js
import React, { useState } from "react";
import TodoList from "./Components/ToDoList";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  /* Adds a new item to the list array*/
  function addItem() {
    // Check for empty item
    if (!newItem) {
      alert("Please enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    // Add new item to items array
    setItems((oldList) => [...oldList, item]);

    // Reset newItem back to original state
    setNewItem("");
  }

  return (
    <div className="app">
  
      <h1>My Todo List</h1>

   
      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

    
      <button onClick={addItem}>Add</button>

     
      <TodoList items={items} setItems={setItems} />
    </div>
  );
}

export default App;

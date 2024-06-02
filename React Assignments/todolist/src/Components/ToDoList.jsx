// TodoList.js
import React, { useState } from "react";

function TodoList({ items, setItems }) {
  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  /* Edit an item text after creating it. */
  function editItem(id, newText) {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, value: newText } : item
    );
    setItems(updatedItems);
    setShowEdit(-1);
    setUpdatedText("");
  }

  return (
    <ul>
      {items.map((item) => (
        <div key={item.id}>
          <li>
            {showEdit === item.id ? (
              <input
                type="text"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
              />
            ) : (
              <span onClick={() => setShowEdit(item.id)}>{item.value}</span>
            )}
            &nbsp; &nbsp;
            {showEdit === item.id ? (
              <button onClick={() => editItem(item.id, updatedText)}>Save</button>
            ) : (
              <button onClick={() => deleteItem(item.id)}>Delete</button>
            )}
          </li>
        </div>
      ))}
    </ul>
  );
}

export default TodoList;

import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  // State Hook - 'useState'
  const [newItem, setNewItem] = useState("");
  const [item, setItems] = useState([]);

  //helper functions 
  function addItem() {

    if (!newItem){
      alert("Enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random()*1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem(" ");
  }

  //delete item function
  function deleteItem(id){
    const newArray = item.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      {/* 1.Header */}
      <h1> To-Do List App</h1>

      {/* 2.Input */}
      <input
        type="text"
        placeholder='Add an item...'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />
      <button onClick={() => addItem()}> Add</button>

      {/* 3. List of Items */}

      <ul>
        {item.map(item => {
          return(
            <li key={item.id}>{item.value}
              <button className='delete-button' onClick={() => deleteItem(item.id)}>✅</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;

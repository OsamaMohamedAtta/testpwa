import React, { useState } from 'react';
import './App.css';

function App() {
  let [inTheStorage, setStorage] = useState('');
  const [localstorageValue, setLocalstorageValue] = useState('');

  const addedInLocalstorage = () => {
    localStorage.setItem("testPWL", inTheStorage);
  }

  const showLocalStorage = () => {
    setLocalstorageValue(localStorage.getItem("testPWL"))
  }

  return (
    <div>
      <h1>first test</h1>
      <input type="text" value={inTheStorage} onChange={(e) => setStorage(e.target.value)} /><br />
      <button onClick={addedInLocalstorage}>added to localstorage</button><br />
      <button onClick={showLocalStorage}>show what is in localstorage</button>
      <h2>{localstorageValue}</h2>
    </div>
  );
}

export default App;

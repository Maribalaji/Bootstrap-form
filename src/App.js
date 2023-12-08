import logo from './logo.svg';
import './App.css';
import Login from './Login';
import { context } from './Context';
import Product from './Product';
import { useState } from 'react';

function App() {
  const [name,setName]=useState("");
  const [price,setPrice]=useState("");
  const [quantity,setQuantity]=useState("");
  const [description,setDescription]=useState("");

const [showProfile,setShowProfile]=useState(false)
  
  return (
    <div className="App">
      <context.Provider value={{name,setName,price,setPrice,quantity,setQuantity,description,setDescription,setShowProfile}}>
        {showProfile ? <Product/> : <Login/>}
      </context.Provider>
      
      
    </div>
  );
}

export default App;

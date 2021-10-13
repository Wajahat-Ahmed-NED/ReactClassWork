import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inpValue,setInpVal]=useState('waji')
  let a="Almeer munna"
  let b=[1,2,3,5,4,6,7,8,0]
  const addItem=()=>{
    console.log("Add Item")
  }
  return (
    <div className="App">
     <h1>My name is {a}</h1>
     <h1>My name is {inpValue}</h1>
     <button onClick={()=>setInpVal("Gullo")}>Update Name</button>
     <p>{b}</p>
     <h3>{inpValue}</h3>
     <input onChange={(e)=>setInpVal(e.target.value)}placeholder="Enter some Value"/>
     <button onClick={addItem}>Add Item </button>
    <ul>{
      b.map((item,index)=>{
        return <li key={index}>{item} Index={index}</li>
      })
    }</ul>
    </div>
  );
}

export default App;

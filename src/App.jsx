import { useState } from 'react';
import './App.css'


function App() {

  let [conter, setCounter] = useState(0);

  const addValue = () =>{
    console.log(conter);
    setCounter(conter+1);
  }
  const removeValue=()=>{
    if(conter > 0){
      setCounter(conter-1);
    }
  }
    return (
    <>
      <div className='outer'>
        <h1>Counter</h1>
        <h2>Current: {conter} </h2>
        <button onClick={addValue}>+</button>
        <button onClick={removeValue}>-</button>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const checkNum20 = ()=>{
    if(count==20){
      setCount(count);
    }else{
      setCount(count+1)
    }
  }
  const checkNum0 = ()=>{
    if(count==0){
      setCount(count);
    }else{
      setCount(count-1)
    }
  }
  return (
    <>
      <h1>Number : {count}</h1>
      <button onClick={checkNum20}>+</button>
      <button onClick={checkNum0}>-</button>
    </>
  )
}

export default App

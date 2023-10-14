import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0);
  const data=[{"name":"aman","title":"5"},{"name":"Shivam" , "title":"7"}]
  const Profile=[{"no":"Profile 1"},{"no":"Profile 2"}]

  return (
    <>
       <h1 className="text-3xl font-bold underline mb-4">
      Hello AmanCode!
    </h1>
  <Cards title={data} Profile={Profile}/>

    </>
  )
}

export default App

import React, { useState,useContext } from 'react'
import userContext from '../Context/UserContext';


function Login() {
    const[username , setusername]=useState("");
    const [password, setpassword] = useState("");
    const {setUser} = useContext(userContext)
    const handleSubmit =(e)=>{
            e.preventDefault(
                setUser({username,password})
            )
    }
  return (
    <>
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='username' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
        <input type="text" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}

export default Login
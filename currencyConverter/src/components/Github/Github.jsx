import React ,{useEffect, useState}from 'react'

function Github() {
   const [data,setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/Aman-srivastav24')
     .then(response => response.json())
     .then(h =>{
        console.log(h)
        setData(h)
     })
    },[])
    
  return (<>
  <div className='flex flex-col  w-full items-center'>

    <div className='font-mono mt-4 mb-4 text-[25px]  text-blue-800'>Github Followers:{data.followers} </div>
    <img src={data.avatar_url} alt="" className='w-[200px] rounded-lg'/>
    </div>
    </>
    
  )
}

export default Github
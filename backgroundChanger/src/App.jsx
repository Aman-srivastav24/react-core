import {useState} from 'react';
function App() {
  const [color , setColor] = useState("black")
  const colors =  ["blue" ,"red" , "green" , "white" , "olive"]
  return (
   <div className="w-full h-screen flex justify-center" style={{backgroundColor:color}}>
    
 <div className='flex fixed flex-wrap bg-gray-500 items-center  bottom-10 rounded-lg   '>
{colors.map((item)=>(
 <button
 type="button"
 class="rounded-md  px-3 py-2 h-[40px] text-sm font-semibold text-black shadow-sm hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black mx-2 my-2"
 style={{backgroundColor: item}} onClick={()=>{setColor(item)}}
>
 Button text
</button>
))}

 </div>
 
   </div>
  )
}

export default App

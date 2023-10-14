import { useState,useCallback,useEffect ,useRef} from 'react'

function App() {
  const [Password, setPassword] = useState("")
  const [Length , setLength] = useState("8")
  const [CharacterAllow , setCharacterAllow] = useState(false);
  const PasswordRef = useRef(null)
  const [numberAllow , setNumberAllow] = useState(false)
  const copytoclip = useCallback(()=>{
    PasswordRef.current?.select();

    window.navigator.clipboard.writeText(Password);
  },[Password])
  const Generate = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow){
      str += "!@#$%^&*"
    }
    if(CharacterAllow){
      str += "1234567890"
    }

    for (let index = 0; index < Length; index++) {
     let char = Math.floor(Math.random()*str.length+1)
     pass += str.charAt(char);
      
    }
    setPassword(pass);

  },[Length,numberAllow,CharacterAllow,setPassword])

  useEffect(() => {
   Generate()
  }, [Length,numberAllow,CharacterAllow,setPassword])
  
  return (
    <>
    <div className='w-screen h-screen bg-gray-200 flex justify-center items-center'>
      <div className='w-[700px] h-[500px] bg-white rounded-lg items-center justify-center flex flex-col'>
      <h1 className='text-[20px] font-bold font-mono' >Password Generator</h1>
        <div >
    
      <input type="text" value={Password} placeholder='Password' readOnly className='bg-gray-300 rounded-lg m-4 w-[350px] h-[40px] outline-none' ref={PasswordRef}/>
      <button className='bg-blue-700 p-2 rounded-lg' onClick={copytoclip}>copy</button>
      </div>
     <div className='flex gap-4'>
     <label>Length : {Length}</label>
      <input type="range" min={6} max={20} value={Length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />

      <label>Character</label>
      <input type="checkbox" defaultChecked={CharacterAllow}  onChange={()=>{setCharacterAllow(true)}} />

      <label>Number</label>
      <input type="checkbox" defaultChecked={numberAllow}  onChange={()=>{setNumberAllow(true)}}/>
     </div>
      </div>
    </div>
    </>
  )
}

export default App

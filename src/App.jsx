import { useCallback, useEffect, useState } from 'react'


function App() {
  let [password,setPassword]=useState("")
  let [length,setLength]=useState(8)
  let [numbersAllowed,setNumbersAllowed]=useState(false)
  let [charAllowed,setCharAllowed]=useState(false)
  let passwordGenerator=useCallback(()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass=""
    if(numbersAllowed){
      str+="012345689"
    }
    if(charAllowed){
      str+="!@#$%^&*(){}|_+:<>?,./;]["
    }
    for(let i=0;i<length;i++){
      let ind=Math.floor(Math.random()*str.length)
      pass+=str[ind]
    }
    setPassword(pass)
  },[length,numbersAllowed,charAllowed])
  useEffect(()=>{
    passwordGenerator()
  },[length,charAllowed,numbersAllowed,passwordGenerator])
  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-gray-800 px-4'>
        <div className='bg-gray-700 rounded-2xl text-amber-500 p-4 sm:p-6 md:p-8 w-full max-w-2xl'>
          <div className='flex flex-col sm:flex-row sm:items-center gap-2 mb-4'>
            <input
              type="text"
              placeholder='Password'
              value={password}
              className='bg-white text-black p-2 rounded w-full sm:w-auto flex-1'
            />
            <button className='bg-blue-700 text-white px-4 py-2 rounded w-full sm:w-auto'>
              Copy
            </button>
          </div>
          <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
            <div className='flex items-center gap-2'>
              <input type="range" className='w-32' min={8} max={100} value={length} onChange={(e)=>setLength(e.target.value)} />
              <label>Length({length})</label>
            </div>
            <div className='flex items-center gap-2'>
              <input type="checkbox" checked={numbersAllowed} onChange={()=>{setNumbersAllowed(prev=>!prev)}}/>
              <label>Numbers</label>
            </div>
            <div className='flex items-center gap-2'>
              <input type="checkbox" checked={charAllowed} onChange={()=>{setCharAllowed(prev=>!prev)}}/>
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App

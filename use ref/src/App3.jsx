import {useRef,useState,useEffect} from 'react'
function App3(){
    const [input,setInput]=useState('')
    const prevsInput=useRef('')
    useEffect(()=>{
        //it stores previous value of input
        prevsInput.current=input
    },[input])
    return(
        <>
                <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <h2>Current Value: {input}</h2>
            <h2>Previous Value: {prevsInput.current}</h2>
        </>
    )
}
export default App3
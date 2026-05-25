import {useRef} from 'react'
import { createRoot } from 'react-dom/client';
function App1(){
    const inputElement=useRef()
    const focusInput=()=>{
        inputElement.current.focus()
    }
    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    )
}
export default App1
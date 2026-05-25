import { useState,useRef,useEffect } from 'react'
import { createRoot } from 'react-dom/client';
import App1 from './App1.jsx'
import App3 from './App3.jsx';

function App() {
  const [input, setInput] = useState('');
  const count=useRef(0)

  useEffect(() => {
    count.current+=1
  },[input])

  return (
    <>
      <h1>useRef</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <h2>Render Count: {count.current}</h2>

      <br/>
      <App1/>
      <br/>
      <App3/>
    </>
  )
}

export default App

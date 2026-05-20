import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {
  const [name,setName]=useState("")
  const [text,setText]=useState("")
  const [myCar,setMyCar]=useState("volvo")

  function handleChange(event) {
    setName(event.target.value)
  }
  function handleSubmit(event){
    event.preventDefault()
    alert("A name is submitted:"+name)
  }
  function handleText(event){
    setText(event.target.value)
  }
  function handleCar(event){
    setMyCar(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >Enter name:</label>
        <input type="text" value={name} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>  
      <p>current value:{name}</p>

      <form >
        <label >Write here</label>
        <textarea  value={text} onChange={handleText}></textarea>
      </form>
      <br />
      <br />
      <select value={myCar} onChange={handleCar}>
        <option value="ford">ford</option>
        <option value="volvo">volvo</option>
        <option value="fiat">fiat</option>
      </select>
    </>
  )
}

export default App

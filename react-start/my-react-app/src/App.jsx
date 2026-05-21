import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {
  const [name,setName]=useState("")
  const [text,setText]=useState("")
  const [myCar,setMyCar]=useState("volvo")

  const [inputs,setInputs]=useState({})
  const [inputs1,setInputs1]=useState({})
  const [selectedFruit,setSelectedFruit]=useState("banana")

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
  function handleInput(event){
    const name=event.target.name;
    const value=event.target.value;
    setInputs(values=>({...values,[name]:value}))
  }
  function handleInputs1(event){
    const value=event.target.type==='checkbox'?event.target.checked:event.target.value;
    const name=event.target.name;
    setInputs1(values=>({...values,[name]:value}))
  }
  function handleSubmit1(event){
     event.preventDefault()
    let fillings=""
    if(inputs1.tomato)fillings+="tomato "
    if(inputs1.onion)fillings+="onion "
    if (fillings == '') fillings = 'no fillings';
    alert(`${inputs1.yourname} orders a sandwich with ${fillings}`)
   
  }
  function handleSubmit2(event){
    event.preventDefault()
    alert(`You selected ${selectedFruit}`)
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

      <form>
        <input type="text" name="firstName" onChange={handleInput} placeholder="Enter your first name" value={inputs.firstname} />
        <input type="text" name="lastName" onChange={handleInput} placeholder="Enter your last name" value={inputs.lastname}/>
      </form>
      <label>First name:{inputs.firstName}</label>
      <br />
      <label>Last name:{inputs.lastName}</label>

      <br/><br/>
      <form onSubmit={handleSubmit1}>
        <label>Enter your name:</label>
        <input type="text" name="yourname" value={inputs1.yourname} onChange={handleInputs1} placehlder="Enter your name"/>
        <label>tomato</label>
        <input type="checkbox" name="tomato" checked={inputs1.tomato} onChange={handleInputs1}/>
        <label>onion</label>
        <input type="checkbox" name="onion" checked={inputs1.onion} onChange={handleInputs1}/>
        <button type="submit">Submit</button>
      </form>

      <form onSubmit={handleSubmit2}>
        <p>select a fruit</p>
        <label>apple</label>
        <input type="radio" name="fruit" value="apple" checked={selectedFruit==='apple'} onChange={(e)=>setSelectedFruit(e.target.value)}/>
        <label>banana</label>
        <input type="radio" name="fruit" value="banana" checked={selectedFruit==='banana'} onChange={(e)=>setSelectedFruit(e.target.value)}/>
        <label>orange</label>
        <input type="radio" name="fruit" value="orange" checked={selectedFruit==='orange'} onChange={(e)=>setSelectedFruit(e.target.value)}/>
        <p>Selected fruit:{selectedFruit}</p>
        <button type="submit">Submit</button>

      </form>
    </>
  )
}

export default App

import { useState } from 'react'
import {BrowserRouter,Routes,Route,Link,Outlet} from 'react-router-dom'
import App1 from './Navlinks'
import App2 from './Greeting'

function Home(){
  return <h1>Home page</h1>
}
function About(){
  return <h1> About Page </h1>
}
function Contact(){
  return <h1>Contact page</h1>
}
function Products(){
  return (
    <div>
      <h1>Products page</h1>
      <Link to="/products/cars">Cars</Link>
      <Link to="/products/bikes">Bikes</Link>
      <Outlet/>
    </div>
  )
}
function CarProducts() {
  return (
    <div>
      <h2>Cars</h2>
      <ul>
        <li>Audi</li>
        <li>BMW</li>
        <li>Volvo</li>
      </ul>
    </div>
  );
}

function BikeProducts() {
  return (
    <div>
      <h2>Bikes</h2>
      <ul>
        <li>Yamaha</li>
        <li>Suzuki</li>
        <li>Honda</li>
      </ul>
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> 
        <Link to="/products">Products</Link> 
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}>
          <Route path="cars" element={<CarProducts/>}/>
          <Route path="bikes" element={<BikeProducts/>}/>
        </Route>
      </Routes>
      <App1/>
      <App2/>
    </BrowserRouter>
  )
}

export default App

import { Link, Outlet } from "react-router-dom";

export function Home() {
  return <h1>Home Page</h1>;
}

export function About() {
  return <h1>About Page</h1>;
}

export function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <br />

        <Link to="/about">About</Link>
        <br />

        <Link to="/contact">Contact</Link>
      </nav>

      <Outlet />
    </>
  );
}

export default App;
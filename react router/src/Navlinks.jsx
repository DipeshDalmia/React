import { Routes, Route, NavLink } from 'react-router-dom';

// Style function for active links
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App1() {
  return (
    <>
      <nav style={{ marginBottom: '20px' }}>
        <NavLink to="/" style={navLinkStyles} end>
          Home
        </NavLink>{" | "}

        <NavLink to="/about" style={navLinkStyles}>
          About
        </NavLink>{" | "}

        <NavLink to="/contact" style={navLinkStyles}>
          Contact
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App1;
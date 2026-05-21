import { useState,Suspense } from 'react'
import {createPortal} from 'react-dom'
import MyFruits from "./fruits.jsx"
import styles from "./mtstyle.module.css"

function PortalButton({ onClick, children }) {
  return createPortal(
    <button 
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        padding: '10px',
        background: 'blue',
        color: 'white'
      }}>
      {children}
    </button>,
    document.body
  );
}
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px'
      }}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}

function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const [isOpen, setIsOpen] = useState(false)
  function handleClose(){
    setIsOpen(false)
  }

  return (
    <>
    <div
      style={{
        padding: '20px',
        border: '2px solid black',
        margin: '20px'
      }}
      onClick={() => {
        setCount1(c => c + 1);
      }}>
      <h2>Div Clicked: {count1}</h2>
      <h2>Button Clicked: {count2}</h2>      
      <p>The floating button is rendered outside this box using a portal,
          but its clicks still bubble up to this parent div!</p>
      <p>Try to click the div element as well, to see the count increase</p>
      
      <PortalButton
        onClick={(e) => {
          // This runs first
          setCount2(c => c + 1);
        }}>
        Floating Button
      </PortalButton>
    </div>

     <div>
      <h1>My app</h1>
      <button onClick={() => setIsOpen(true)} >Open modal</button>

      <Modal isOpen={isOpen} onClose={handleClose} >
        <h2>Modal contend</h2>
        <p>This content is rendered outside the app component</p>
        </Modal>
    </div>

    {/* { suspense } */}
    <div className={styles.bgcolor}>
      <Suspense fallback={<div>Loading...</div>}>
        <MyFruits />
      </Suspense>
    </div>
    </>
  );

  
  
}

export default App

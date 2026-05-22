import { useState } from 'react'
import styles from './Button.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button className={`${styles.mybutton} ${styles.primary}`}>
        My Primary Button
      </button>
      <button className={`${styles.mybutton} ${styles.secondary}`}>
        My Secondary Button
      </button>
    </div>
  )
}

export default App

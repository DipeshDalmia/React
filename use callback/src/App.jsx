import React, { useState, useCallback } from 'react';

const Button = React.memo(({ onClick, text }) => {
  alert(`${text} button rendered`);
  return <button onClick={onClick}>{text}</button>;
});

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = useCallback(() => {
    setCount1(prev => prev + 1);
  }, [count1]);

  const handleClick2 = useCallback(() => {
    setCount2(prev => prev + 1);
  }, [count2]);

  alert('App rendered');
  return (
    <div>
      <h2>With useCallback</h2>

      <p>Count 1: {count1}</p>
      <p>Count 2: {count2}</p>

      <Button onClick={handleClick1} text="Button 1" />
      <Button onClick={handleClick2} text="Button 2" />
    </div>
  );
}

export default App;
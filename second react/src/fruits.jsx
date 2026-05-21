import { useState, useEffect } from 'react';

function fetchFruitData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Apple', 'Banana', 'Cherry']);
    }, 2000);
  });
}

function MyFruits() {
  const [fruits, setFruits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFruitData().then((data) => {
      setFruits(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h2>Loading fruits...</h2>;
  }

  return (
    <>
      <h2>My Favorite Fruits</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </>
  );
}

export default MyFruits;
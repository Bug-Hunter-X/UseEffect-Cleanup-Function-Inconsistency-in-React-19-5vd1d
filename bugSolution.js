```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('initial');

  useEffect(() => {
    // This effect runs after every render
    console.log('Effect ran:', count, name);
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log('Cleanup function ran');
    };
  }, [count, name]); // Add count to the dependency array

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const changeName = () => {
    setName('changed');
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default MyComponent;
```
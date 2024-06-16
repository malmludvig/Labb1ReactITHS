import React, {useState, useEffect} from 'react';

//Räknare med useState, useEffect och localstorage
const Counter = () => {
  
    const getInitialCount = () => {

        const savedCount = localStorage.getItem('count');
        return savedCount !== null ? Number(savedCount) : 0;

    }

  const [count, setCount] = useState(getInitialCount);
  
  useEffect(() => {
    document.title = 'You clicked $(count) times';
    localStorage.setItem('count', count)
  }, [count]);
  
    return (
    <div>
        <p>You clicked the button {count} times.</p>
        <button onClick={() => setCount(count +1)}>
            +1
        </button>

        <button onClick={() => setCount(count -1)}>
            -1
        </button>
      
    </div>
  );
};

export default Counter;
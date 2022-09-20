import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  const decreaseCounter = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="App">
       <div className='header'>
        <h1>GİTWORK</h1>
      </div>

      <div className='counter'>
        <button onClick={increaseCounter}>+</button>
        <h1>{counter}</h1>
        <button onClick={decreaseCounter}>-</button>
      </div>

    </div>
  );
}

export default App;

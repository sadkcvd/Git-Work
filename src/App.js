import { useState } from 'react';
import './App.css';
import Counter from './components/Counter'
import ChangeColor from './components/ChangeColor'

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
      <Counter/>
      <ChangeColor/>
    </div>
  );
}

export default App;

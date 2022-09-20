import { useState } from 'react';
import './App.css';

function App() {

  const [isActive, setIsActive] = useState(false);

  const changeColor = () => {
    isActive === false ? setIsActive(true) : setIsActive(false)
  }
  return (
    <div className="App" style={{ backgroundColor: isActive ? "red" : "blue" }}>
     
     <div className='header'>
        <h1>GİTWORK</h1>
      </div>

      <div className='changeColor'>
        <button className='btn-changeColor' onClick={changeColor}>Change Color</button>
      </div>
      
    </div>
  );
}

export default App;

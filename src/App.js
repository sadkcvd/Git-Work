import './App.css';
import Counter from './components/Counter'
import ChangeColor from './components/ChangeColor'

function App() {
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

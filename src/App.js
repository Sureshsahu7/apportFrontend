import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(1);
  const handleChange = (e) => {
    if (e.target.value >= 1 && e.target.value <= 1000)
      setCount(e.target.value)
  }
  const handleIncrement = () => {
    if (parseInt(count) < 1000)
      setCount(parseInt(count) + 1);
  }
  const handleDecrement = () => {
    if (count >= 1)
      setCount(count - 1);
  }
  return (
    <div className="App">
      <h1>Apport Interview Purpose</h1>
      <button className="decButton" onClick={handleDecrement}>-</button>
      <input className='counter' type="number" value={count} onChange={handleChange} />
      <button className="incButton" onClick={handleIncrement}>+</button>
    </div>
  );
}

export default App;

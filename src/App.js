import './App.css';
import { useState } from 'react';
import Form from './Form'

function App() {
  const [number, setNumber] = useState(0);
  const increaseNum = () => {
    setNumber(prevNum => prevNum + 1)
  }
  return (
    <>
      <div className="App">
        <h1>Simple Counter</h1>
        <p>{number}</p>
        <button onClick={increaseNum}>Increase Counter</button>
      </div >
      <Form />
    </>
  );
}

export default App;

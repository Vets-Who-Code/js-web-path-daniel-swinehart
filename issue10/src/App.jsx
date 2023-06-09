import { useState } from 'react';

export function App() {
  const [countValue, setCountValue] = useState(0);

  function addOne() {
    setCountValue(countValue + 1);
  };

  function subtractOne() {
    setCountValue(countValue - 1);
  };

  function resetCounter() {
    setCountValue(countValue * 0);
  };

  return (
    <>
    <h1 className="count-display">Count= {countValue}</h1>
    <button type="button" className="test" onClick={addOne}>Increase Value</button>
    <button type="button" className="test" onClick={subtractOne}>Subtract Value</button>
    <button type="button" className="test" onClick={resetCounter}>Reset Value</button>
    </>
  );
}
import { useState } from 'react';

export function ChangeBg() {
  const [currentBg, setBg] = useState(0);

  function bgChange() {
    setBg(countValue + 1);
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
};
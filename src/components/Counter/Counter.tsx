import { useState } from "react";
import "./Counter.css";

export default function Counter(): JSX.Element {
  const [num, setNum] = useState(0);

  const decreaseNumber = () => setNum(prevNum => Math.max(0, prevNum - 1));
  const increaseNumber = () => setNum(prevNum => Math.min(100, prevNum + 1));
  const resetNumber = () => setNum(0);

  return (
    <div>
      <p className="counter">{num}</p>
      <div className="button-container">
        <button onClick={decreaseNumber}>-</button>
        <button onClick={resetNumber}>Reset</button>
        <button onClick={increaseNumber}>+</button>
      </div>
    </div>
  );
}

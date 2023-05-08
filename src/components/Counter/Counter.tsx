import { useState } from "react";
import "./Counter.css";

export default function Counter(): JSX.Element {
  const [num, setNum] = useState<number>(0);

  const decreaseNumber = (): void => {
    setNum((prevNum: number) => (prevNum > 0 ? prevNum - 1 : prevNum));
  };

  const increaseNumber = (): void => {
    setNum((prevNum: number) => (prevNum < 100 ? prevNum + 1 : prevNum));
  };

  const resetNumber = (): void => {
    setNum(0);
  };

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

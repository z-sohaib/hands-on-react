import { useState, useEffect } from "react";
import useWindowWidth from "../hooks/useWindowWidth";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const width = useWindowWidth();

  useEffect(() => {
    console.log("Count updated:", count);
    document.title = `Count: ${count}`;
  }, [count]);

  const handleIncrement = () => {
    console.log("Incrementing...");
    setCount(count + 1);
  };

  const handleDecrement = () => {
    console.log("Decrementing...");
    setCount(count - 1);
  };

  const handleReset = () => {
    console.log("Resetting...");
    setCount(0);
  };

  return (
    <div className="bg-amber-100 w-screen p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold">Counter width: {width}px</h1>
      <p className="text-4xl font-bold">{count}</p>
      <div className="flex gap-x-4 mt-8">
        <button
          className="bg-amber-500 text-white p-2 rounded w-20 cursor-pointer"
          onClick={handleDecrement}>
          -
        </button>
        <button
          className="bg-amber-500 text-white p-2 rounded w-20 cursor-pointer"
          onClick={handleReset}>
          reset
        </button>
        <button
          className="bg-amber-500 text-white p-2 rounded w-20 cursor-pointer"
          onClick={handleIncrement}>
          +
        </button>
      </div>
      <p className="text-4xl font-bold">{countTwo}</p>
      <div className="flex gap-x-4 mt-8">
        <button
          className="bg-green-500 text-white p-2 rounded w-20 cursor-pointer"
          onClick={() => setCountTwo(countTwo - 1)}>
          -
        </button>
        <button
          className="bg-green-500 text-white p-2 rounded w-20 cursor-pointer"
          onClick={() => setCountTwo(0)}>
          reset
        </button>
        <button
          className="bg-green-500 text-white p-2 rounded w-20 cursor-pointer"
          onClick={() => setCountTwo(countTwo + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;

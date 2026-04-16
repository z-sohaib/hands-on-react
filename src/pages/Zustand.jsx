import useCounter from "../hooks/useCounter";

function Zustand() {
  const counter = useCounter((state) => state.counter);
  const increment = useCounter((state) => state.increment);
  const decrement = useCounter((state) => state.decrement);
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">
        State Management with Zustand
      </h1>
      <div className="flex justify-center items-center gap-x-8 mt-8">
        <button
          aria-label="Decrement value"
          className="bg-red-500 p-3 text-white rounded-xl cursor-pointer"
          onClick={decrement}>
          Decrement
        </button>
        <span className="text-xl">{counter}</span>
        <button
          aria-label="Increment value"
          className="bg-green-500 p-3 text-white rounded-xl cursor-pointer"
          onClick={increment}>
          Increment
        </button>
      </div>
    </div>
  );
}

export default Zustand;

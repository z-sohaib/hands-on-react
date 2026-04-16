import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../slices/counterSlice";
import { Link } from "react-router-dom";

function Redux() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">
        State Management with Redux
      </h1>
      <div className="flex justify-center items-center gap-x-8 mt-8">
        <button
          aria-label="Decrement value"
          className="bg-red-500 p-3 text-white rounded-xl cursor-pointer"
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <span className="text-xl">{counter}</span>
        <button
          aria-label="Increment value"
          className="bg-green-500 p-3 text-white rounded-xl cursor-pointer"
          onClick={() => dispatch(increment())}>
          Increment
        </button>
      </div>
      <Link to="/redux-multiple">Go to Add By Amount Page</Link>
    </div>
  );
}

export default Redux;

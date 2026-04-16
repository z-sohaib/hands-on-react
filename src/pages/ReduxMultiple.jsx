import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "../slices/counterSlice";
import { Link } from "react-router-dom";

function ReduxMultiple() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">
        State Management with Redux
      </h1>
      <div className="flex justify-center items-center gap-x-8 mt-8">
        <span className="text-xl">{counter}</span>
        <button
          aria-label="Increment value"
          className="bg-green-500 p-3 text-white rounded-xl cursor-pointer"
          onClick={() => dispatch(incrementByAmount(2))}>
          Add By 2
        </button>
        <button
          aria-label="Increment value"
          className="bg-green-500 p-3 text-white rounded-xl cursor-pointer"
          onClick={() => dispatch(incrementByAmount(3))}>
          Add By 3
        </button>
        <button
          aria-label="Increment value"
          className="bg-green-500 p-3 text-white rounded-xl cursor-pointer"
          onClick={() => dispatch(incrementByAmount(4))}>
          Add by 4
        </button>
      </div>
      <Link to="/redux">Go to Redux Page</Link>
    </div>
  );
}

export default ReduxMultiple;

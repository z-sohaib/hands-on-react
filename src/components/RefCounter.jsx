import { useRef } from "react";

function RefCounter() {
  const ref = useRef(0);

  //   {
  //     current: 0
  //   }

  function handleClick() {
    ref.current = ref.current + 1;
    console.log("You clicked on the button ", ref.current, " times");
  }
  return (
    <button
      onClick={handleClick}
      className="mx-auto bg-green-500 text-white p-3 rounded-md">
      Click me
    </button>
  );
}

export default RefCounter;

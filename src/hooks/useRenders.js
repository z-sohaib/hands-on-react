import { useRef, useEffect } from "react";

function useRenders() {
  const renders = useRef(0);
  useEffect(() => {
    renders.current++;
    console.log("Renders:", renders.current);
  });
}

export default useRenders;

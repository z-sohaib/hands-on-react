import { useContext } from "react";
import { LevelContext } from "../context/LevelContext";

export default function Task({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 1:
      return <p className="text-green-500">{children}</p>;
    case 2:
      return <p className="text-blue-500">{children}</p>;
    case 3:
      return <p className="text-orange-500">{children}</p>;
    case 4:
      return <p className="text-yellow-500">{children}</p>;
    case 5:
      return <p className="text-purple-500">{children}</p>;
    case 6:
      return <p className="text-red-500"> {children}</p>;
    default:
      throw Error("Unknown level: " + level);
  }
}

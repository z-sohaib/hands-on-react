import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="p-4 w-screen flex justify-between items-center bg-green-500 text-white">
      <div className="flex gap-2">
        <h1>LOGO</h1>
      </div>
      <div className="flex gap-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "border-b border-b-white" : ""
          }>
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "border-b border-b-white" : ""
          }>
          About
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "border-b border-b-white" : ""
          }>
          Services
        </NavLink>
      </div>
      <div className="flex gap-2">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Navbar;

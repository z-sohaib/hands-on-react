import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="mt-8">
        <Outlet />{" "}
      </div>
    </>
  );
}

export default MainLayout;

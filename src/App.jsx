import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ServiceDetails from "./pages/ServiceDetails";
import Stopwatch from "./pages/Stopwatch";
import Context from "./pages/Context";
import Quote from "./pages/Quote";
import Form from "./pages/Form";
import Redux from "./pages/Redux";
import ReduxMultiple from "./pages/ReduxMultiple";
import Zustand from "./pages/Zustand";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/context" element={<Context />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/form" element={<Form />} />
        <Route path="/redux" element={<Redux />} />
        <Route path="/zustand" element={<Zustand />} />
        <Route path="/redux-multiple" element={<ReduxMultiple />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;

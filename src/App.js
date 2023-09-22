import React from "react";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; /*newly added*/
import Home from "./routes/Home";
import About from "./routes/About";
import Movies from "./routes/Movies";
import Booking from "./routes/Booking";
import SignupForm from "./routes/SignupForm";

export default function App() {
  return (
    <div className="App">
      <Navbar /> {/*new added*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Signup" element={<SignupForm />} />
      </Routes>
    </div>
  );
}

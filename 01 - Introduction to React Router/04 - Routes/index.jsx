import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Nav = () => {
  return (
    <section>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </section>
  );
};

const Home = () => {
  return <h1>Home</h1>;
};
const About = () => {
  return <h1>About</h1>;
};
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

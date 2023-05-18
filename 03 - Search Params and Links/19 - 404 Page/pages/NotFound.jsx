import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <h1>Sorry the page you are looking for dont exists..</h1>
      <Link to="/">Return to Home</Link>
    </section>
  );
};

export default NotFound;

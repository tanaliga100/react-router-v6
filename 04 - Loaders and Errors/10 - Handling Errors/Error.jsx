import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log("ERROR", error);

  return <h1>There has an error</h1>;
};

export default ErrorElement;

import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const { message, status, statusText } = useRouteError();
  return (
    <section className="error">
      <h1>{message}</h1>
      <pre>
        {status} - {statusText}
      </pre>
    </section>
  );
}

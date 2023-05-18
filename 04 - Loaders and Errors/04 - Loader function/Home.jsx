import React from "react";

export function loader() {
  return "The Data is here...";
}

export default function HomePage(props) {
  console.log({ props });
  return (
    <main>
      <h1>Home page</h1>
    </main>
  );
}

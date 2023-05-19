import React from "react";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log("TODOS,", data);
  return data;
}

export default function HomePage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <main>
      <h1>Home page</h1>
    </main>
  );
}

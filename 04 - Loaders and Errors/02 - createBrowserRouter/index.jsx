import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function HomePage() {
  return (
    <main>
      <h1>Home page</h1>
    </main>
  );
}
function AboutPage() {
  return (
    <main>
      <h1>About page</h1>
    </main>
  );
}
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage />} />,
    <Route path="/about" element={<AboutPage />} />
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

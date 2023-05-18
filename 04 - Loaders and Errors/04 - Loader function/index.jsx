import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import HomePage, { loader as homePageLoader } from "./Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomePage loader={homePageLoader} />} />
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

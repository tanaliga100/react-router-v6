import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import AuthRequired from "./AuthRequired";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<h1>Home page</h1>} />
      <Route path="login" element={<h1>Login Page</h1>} />
      <Route element={<AuthRequired />}>
        <Route path="protected" element={<h1>Super secret info here</h1>} />
      </Route>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

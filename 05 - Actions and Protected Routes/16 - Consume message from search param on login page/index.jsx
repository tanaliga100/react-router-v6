import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useLoaderData,
} from "react-router-dom";
import { requireAuth } from "./utils";

import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<h1>Home page</h1>} />
      <Route
        path="protected"
        element={<h1>Super secret info here</h1>}
        loader={async () => await requireAuth()}
      />
      <Route path="login" element={<Login />} loader={loginLoader} />
    </Route>
  )
);

function Login() {
  const msg = useLoaderData();
  if (msg) {
    return <h1>{msg}</h1>;
  }
  return (
    <>
      <h1>Login Content here</h1>
    </>
  );
}

function loginLoader({ request }) {
  const url = new URL(request.url);
  const msg = url.searchParams.get("message");
  return msg;
}

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

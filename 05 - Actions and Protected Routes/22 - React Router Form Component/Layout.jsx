import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>

        <Link to="protected">Protected</Link>
        <Link to="login">Login</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

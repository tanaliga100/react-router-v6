import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  /**
   * Challenge - part 2:
   * Make the host navbar indicate the currently-active route.
   *
   * Use the following CSS rules:
   *      font-weight: bold;
   *      text-decoration: underline;
   *      color: #161616;
   *
   * I'd recommend using an inline style this time.
   *
   * NOTE: There will be a small bug that we'll fix
   * after you do the challenge.
   *
   *
   */
  const activeStyle = {
    fontWeight: "bolder",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          end
          to="/host"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/reviews"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}

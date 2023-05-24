import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout() {
  return (
    <>
      <Header />
      {/* MAIN CONTENT */}
      <main style={{ padding: "2rem", textAlign: "center" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

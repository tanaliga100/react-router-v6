import React from "react";
import { Outlet } from "react-router-dom";
const SharedProduct = () => {
  return (
    <>
      <section className="section">
        <h2>Products</h2>
        <Outlet />
      </section>
    </>
  );
};

export default SharedProduct;

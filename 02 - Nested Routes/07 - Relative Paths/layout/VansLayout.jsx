import React from "react";
import { Outlet } from "react-router-dom";

const VansLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default VansLayout;

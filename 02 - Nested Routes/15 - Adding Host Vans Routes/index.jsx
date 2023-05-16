import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HostLayout from "./components/HostLayout";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import VanDetail from "./pages/Vans/VanDetail";
import Vans from "./pages/Vans/Vans";

import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVans from "./pages/Host/HostVans";
import "./server";

function App() {
  /**
   * Challenge: add the /host/vans and /host/vans/:id routes, as well
   * as the "Vans" link in the Host navbar.
   *
   * For now, just create the stubbed-out version of the pages (i.e.
   * components that just render an <h1>). Don't worry about adding
   * navigation from /host/vans to /host/vans/:id yet - the link to
   * /host/vans is enough for now.
   *
   * When deciding whether or not to use nested routes, keep in mind
   * what will/won't be shared between these two pages. See the Figma
   * design file (or the screenshots) to help guide your choice.
   */
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

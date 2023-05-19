import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Error from "./components/Error";
import HostLayout from "./components/HostLayout";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Dashboard from "./pages/Host/Dashboard";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVans from "./pages/Host/HostVans";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import VanDetail from "./pages/Vans/VanDetail";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";

import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route path="vans/:id" element={<VanDetail />} />

      <Route path="host" element={<HostLayout />}>
        {/**
         * Challenge: Add a loader to every host route. For now,
         * just have them `return null` (don't worry about checking
         * for authentication yet)
         */}

        <Route
          index
          element={<Dashboard />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="vans"
          element={<HostVans />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="vans/:id"
          element={
            <HostVanDetail
              loader={async () => {
                return null;
              }}
            />
          }
        >
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

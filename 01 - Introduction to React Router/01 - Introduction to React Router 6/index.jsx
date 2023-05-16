import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthRequired from "./components/AuthRequired";
import Error from "./components/Error";
import HostLayout from "./components/HostLayout";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Dashboard, { loader as dashboardLoader } from "./pages/Host/Dashboard";
import HostVanDetail, {
  loader as hostVansDetailLoader,
} from "./pages/Host/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import Login, { action as loginAction } from "./pages/Login";
import NotFound from "./pages/NotFound";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";

import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="login" element={<Login />} action={loginAction} />
      <Route
        path="vans"
        element={<Vans />}
        errorElement={<Error />}
        loader={vansLoader}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        errorElement={<Error />}
        loader={vanDetailLoader}
      />

      <Route element={<AuthRequired />}>
        <Route path="host" element={<HostLayout />}>
          <Route
            index
            element={<Dashboard />}
            errorElement={<Error />}
            loader={dashboardLoader}
          />
          <Route path="income" element={<Income />} />
          <Route path="reviews" element={<Reviews />} />
          <Route
            path="vans"
            element={<HostVans />}
            errorElement={<Error />}
            loader={hostVansLoader}
          />
          <Route
            path="vans/:id"
            element={<HostVanDetail />}
            errorElement={<Error />}
            loader={hostVansDetailLoader}
          >
            <Route index element={<HostVanInfo />} />
            <Route path="pricing" element={<HostVanPricing />} />
            <Route path="photos" element={<HostVanPhotos />} />
          </Route>
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

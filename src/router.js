import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import DefaultLayout from "./layouts/DefaultLayout";
import AircoverForHosts from "./components/body/AirCoverForHost/AircoverForHosts";
import BestHost from "./components/body/BestHost/BestHost";
import ProfileDetail from "./components/body/profile/ProfileDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aircover-for-hosts",
        element: <AircoverForHosts />,
      },
      {
        path: "/best-host",
        element: <BestHost />,
      },
      {
        path: "/profile",
        element: <ProfileDetail />,
      },
    ],
  },
]);

export default router;

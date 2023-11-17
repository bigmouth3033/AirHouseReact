import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const DefaultLayout = lazy(() => import("./layouts/DefaultLayout"));
const AircoverForHosts = lazy(() => import("./components/body/AirCoverForHost/AircoverForHosts"));
const BestHost = lazy(() => import("./components/body/BestHost/BestHost"));
const ProfileDetail = lazy(() => import("./components/body/profile/ProfileDetail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout/>,
    exact: true,
    children: [
      {
        path: "/",
        element: <Home/>,
        exact: true,
      },
      {
        path: "/aircover-for-hosts",
        element: <AircoverForHosts/>,
        exact: true,
      },
      {
        path: "/best-host",
        element: <BestHost/>,
        exact: true,
      },
      {
        path: "/profile",
        element: <ProfileDetail/>,
        exact: true,
      },
    ],
  },
]);

export default router;

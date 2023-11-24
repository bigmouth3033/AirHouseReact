import { createBrowserRouter } from "react-router-dom";
import Basic from "./components/Users/Host/Basic";
import BecomeHost from "./components/Users/BecomeHost/BecomeHost";
import Amenities from "./components/Users/Host/Amenities";
import Description from "./components/Users/Host/Description";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BecomeHost />,
  },
]);

export default router;

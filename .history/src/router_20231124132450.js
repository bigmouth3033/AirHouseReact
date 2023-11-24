import { createBrowserRouter } from "react-router-dom";
import Basic from "./components/Users/Host/Basic";
import BecomeHost from "./components/Users/Host/Basic";
import Amenities from "./components/Users/Host/Amenities";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BecomeHost />,
  },
]);

export default router;

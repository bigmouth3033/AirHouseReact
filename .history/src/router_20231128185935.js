import { createBrowserRouter } from "react-router-dom";
import Basic from "./components/Users/Host/Basic";
import Amenities from "./components/Users/Host/Amenities";
import Description from "./components/Users/Host/Description";
import BecomeHost from "./components/Users/Host/BecomeHost";
import Booking from "./components/Users/Host/Booking";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Booking />,
  },
]);

export default router;

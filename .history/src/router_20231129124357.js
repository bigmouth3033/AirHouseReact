import { createBrowserRouter } from "react-router-dom";
import Basic from "./components/Users/Host/Basic";
import Amenities from "./components/Users/Host/Amenities";
import Description from "./components/Users/Host/Description";
import BecomeHost from "./components/Users/Host/BecomeHost";
import Booking from "./components/Users/Host/Booking";
import ViewHost from "components/Users/Viewhost/ViewHost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ViewHost />,
  },
]);

export default router;

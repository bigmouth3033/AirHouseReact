import { createBrowserRouter } from "react-router-dom";
import Basic from "./components/Users/Host/Basic";
import BecomeHost from "./components/Users/Host/Basic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Basic />,
  },
]);

export default router;

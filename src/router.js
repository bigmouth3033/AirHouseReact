import { createBrowserRouter } from "react-router-dom";
import Pricing from "./components/Users/Host/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pricing />,
  },
]);

export default router;

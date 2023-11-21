import { createBrowserRouter } from "react-router-dom";

import BecomeHost from "./components/Users/Host/BecomeHost";
import SignupStep1 from "./components/Users/SignupStep1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignupStep1></SignupStep1>,
  },
]);

export default router;

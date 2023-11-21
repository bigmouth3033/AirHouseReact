import { createBrowserRouter } from "react-router-dom";

import BecomeHost from "./components/Users/Host/BecomeHost";
import SignupStep1 from "./components/Users/SignupStep1";
import SignupStep2 from "./components/Users/SignupStep2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignupStep2></SignupStep2>,
  },
]);

export default router;

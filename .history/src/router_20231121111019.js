import { createBrowserRouter } from "react-router-dom";

import BecomeHost from "./components/Users/Host/BecomeHost";
import SignupStep1 from "./components/Users/SignupStep1";
import SignupStep2 from "./components/Users/SignupStep2";
import Login from "./components/Users/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BecomeHost></BecomeHost>,
  },
]);

export default router;

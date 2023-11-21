import { createBrowserRouter } from "react-router-dom";
import SignupStep2 from "./components/Users/SignupStep2";
import SignupStep1 from "./components/Users/SignupStep1";
import Home from "./pages/Home";
import SignupDemo from "./components/Users/SignupDemo";
import PropertyType from "./components/Users/PropertyType";
import BecomeHost from "./components/Users/Host/BecomeHost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BecomeHost></BecomeHost>,
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import SignupStep2 from "./components/Users/SignupStep2";
import SignupStep1 from "./components/Users/SignupStep1";
import Home from "./pages/Home";
import SignupDemo from "./components/Users/SignupDemo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignupStep2></SignupStep2>,
  },
]);

export default router;

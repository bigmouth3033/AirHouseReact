import { createBrowserRouter } from "react-router-dom";
import SignupStep2 from "./components/Users/SignupStep2";
import SignupStep1 from "./components/Users/SignupStep1";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignupStep1></SignupStep1>,
    children: [
      {
        path: "/signup1",
        element: <SignupStep1></SignupStep1>,
      },
    ],
  },
]);

export default router;

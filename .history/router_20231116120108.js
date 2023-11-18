import { createBrowserRouter } from "react-router-dom";
import SignupStep2 from "./src/components/Users/SignupStep2";
import SignupStep1 from "./src/components/Users/SignupStep1";

const router = createBrowserRouter([
  {
    path: "/signup",
    element: <SignupStep1></SignupStep1>,
    children: [
      {
        path: "/",
        element: <SignupStep2></SignupStep2>,
      },
    ],
  },
]);

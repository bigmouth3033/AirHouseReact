import { createBrowserRouter } from "react-router-dom";

import BecomeHost from "./components/Users/Host/BecomeHost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BecomeHost></BecomeHost>,
  },
]);

export default router;

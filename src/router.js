import { createBrowserRouter } from "react-router-dom";
import ViewHost from "components/Users/Viewhost/ViewHost";
import Images from "components/Users/Viewhost/Images";

const router = createBrowserRouter([
  {
    path: `filterByIdProperty`,
    element: <ViewHost />,
  },
]);

export default router;

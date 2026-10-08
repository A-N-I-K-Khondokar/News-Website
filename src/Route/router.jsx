import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
  {
    path: "/auth",
    element: <h2>Authentication</h2>,
  },
  {
    path: "/*",
    element: <h2>Error 404!!</h2>,
  },
]);
export default router;

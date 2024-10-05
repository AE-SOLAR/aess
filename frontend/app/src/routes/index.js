import { createBrowserRouter } from "react-router-dom";
import fakeAuthProvider from "../tools/fakeAuthProvider";
import PageNotFound from "../pages/PageNotFound";
import Layout from "../pages/Layout";
import { Page } from "./pages";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Layout />,
    loader: () => ({
      user: fakeAuthProvider.user,
      isAuthenticated: fakeAuthProvider.isAuthenticated,
    }),
    children: Object.entries(Page).map(([key, value]) => ({
      id: key.toLowerCase(),
      path: value.path,
      element: value.element,
    })),
    errorElement: <PageNotFound />,
  },
]);

export default router;

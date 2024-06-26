import { Layout, HomePage, AboutPage, PageNotFound, AdminPage } from "../pages";
import { PrivateRoute } from "./PrivateRoute";
import fakeAuthProvider from "../tools/fakeAuthProvider";
import { LoginPage } from "../pages/LoginPage";

const RootRoutes = [
  {
    id: "root",
    path: "/",
    element: <Layout />,
    loader: () => ({
      user: fakeAuthProvider.user,
      isAuthenticated: fakeAuthProvider.isAuthenticated,
    }),
    children: [
      {
        id: "login",
        path: "login",
        element: <LoginPage />,
      },
      {
        id: "home",
        path: "",
        element: <HomePage />,
      },
      {
        id: "about",
        path: "about",
        element: <AboutPage />,
      },
      {
        id: "admin",
        path: "admin",
        element: (
          <PrivateRoute>
            <AdminPage />
          </PrivateRoute>
        ),
      },
    ],
    errorElement: <PageNotFound />,
  },
];

export default RootRoutes;
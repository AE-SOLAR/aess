import { Layout, HomePage, PageNotFound, AdminPage, Sale, SolarPanelsPage } from "../pages";
import { PrivateRoute } from "./PrivateRoute";
import fakeAuthProvider from "../tools/fakeAuthProvider";
import { LoginPage } from "../pages/LoginPage";
import Blog from "../pages/Blog/Blog";
import News from "../pages/News/News";
import Shipping from "../pages/Shipping/Shipping";
import Payments from "../pages/Payments/Payments";
import Help from "../pages/Help/Help";
import Favorites from "../pages/Favorites/Favorites";
import Invertors from "../pages/Invertors/Invertors";
import Accessories_electrical from "../pages/Accessories_electrical/Accessories_electrical";

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
        id: "blog",
        path: "blog",
        element: <Blog />,
      },
      {
        id: "news",
        path: "news",
        element: <News />,
      },
      {
        id: "shipping",
        path: "shipping",
        element: <Shipping />,
      },
      {
        id: "payments",
        path: "payments",
        element: <Payments />,
      },
      {
        id: "help",
        path: "help",
        element: <Help />,
      },
      {
        id: "favorites",
        path: "favorites",
        element: <Favorites />,
      },
      {
        id: "sale",
        path: "sale",
        element: <Sale />,
      },
      {
        id: "solar-panels",
        path: "solar-panels",
        element: <SolarPanelsPage />,
      },
      {
        id: "invertors",
        path: "invertors",
        element: <Invertors />,
      },
      {
        id: "accessories-electrical",
        path: "accessories-electrical",
        element: <Accessories_electrical />,
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

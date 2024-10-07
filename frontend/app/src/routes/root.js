import { Layout, HomePage, PageNotFound, AdminPage, Sale, SolarPanelsPage, ProductPage } from "../pages";
import { PrivateRoute } from "./PrivateRoute";
import fakeAuthProvider from "../tools/fakeAuthProvider";
import { LoginPage } from "../pages/LoginPage";
import Blog from "../pages/Blog/Blog";
import News from "../pages/News/News";
import Help from "../pages/Help/Help";
import Favorites from "../pages/Favorites/Favorites";
import Invertors from "../pages/Invertors/Invertors";
import AccessoriesElectrical from "../pages/AccessoriesElectrical";
import TermsAndConditions from '../pages/Terms&Conditions';
import ShippingPage from "../pages/ShipingPage";
import Payments from "../pages/Payments";

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
        id: "home",
        path: "",
        element: <HomePage />,
      },
      {
        id: "login",
        path: "login",
        element: <LoginPage />,
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
        id: "payments",
        path: "payments",
        element: <Payments/>,
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
        id: "product",
        path: "product/:uuid",
        element: <ProductPage />
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
        element: <AccessoriesElectrical />,
      },
      {
        id: "shiping",
        path: "shiping",
        element: <ShippingPage/>,
      },
      {
        id: "terms-and-onditions",
        path: "terms-and-onditions",
        element: <TermsAndConditions/>,
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
    // errorElement: <PageNotFound />,
  },
];

export default RootRoutes;

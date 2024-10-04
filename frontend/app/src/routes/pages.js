import AboutPage from "../pages//AboutPage";
import AdminPage from "../pages//AdminPage";
import HomePage from "../pages//HomePage";
import Sale from "../pages//Sale";
import SolarPanelsPage from "../pages//SolarPanelsPage";
import ProductPage from "../pages//ProductPage";
import { SignIn, SignUp } from "../pages//UserAuthPage";

const Page = {
  home: {
    title: "Home",
    path: "/",
    element: <HomePage />,
  },
  about: {
    title: "About",
    path: "/about",
    element: <AboutPage />,
  },
  admin: {
    title: "Admin",
    path: "/admin",
    element: <AdminPage />,
  },
  sale: {
    title: "Sale",
    path: "/sale",
    element: <Sale />,
  },
  solarPanels: {
    title: "Solar Panels",
    path: "/product/panels",
    element: <SolarPanelsPage />,
  },
  productPage: {
    title: "Product detailed info",
    path: "/product/:category/:uuid",
    element: <ProductPage />,
  },
  signIn: {
    title: "Sign In",
    path: "/signin",
    element: <SignIn />,
  },
  signOut: {
    title: "Sign Up",
    path: "/signup",
    element: <SignUp />,
  },
  blog: {
    title: "Blog",
    path: "/blog",
    element: <div>Blog</div>,
  },
  news: {
    title: "News",
    path: "/news",
    element: <div>News</div>,
  },
  shipping: {
    title: "Shipping",
    path: "/shipping",
    element: <div>Shipping</div>,
  },
  payments: {
    title: "Payments",
    path: "/payments",
    element: <div>Payments</div>,
  },
  help: {
    title: "Help",
    path: "/help",
    element: <div>Help</div>,
  },
};

export default Page;

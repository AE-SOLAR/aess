import AboutPage from "../pages/AboutPage";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import SalePage from "../pages/SalePage";
import SolarPanelsPage from "../pages/SolarPanelsPage";
import ProductPage from "../pages/ProductPage";
import BlogPage from "../pages/BlogPage";
import FavoritesPage from "../pages/FavoritesPage";
import HelpPage from "../pages/HelpPage";
import NewsPage from "../pages/NewsPage";
import ShippingPage from "../pages/ShippingPage";
import PaymentsPage from "../pages/PaymentsPage";
import { SignInPage, SignUpPage } from "../pages/UserAuthPage";

export const Page = {
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
    element: <SalePage />,
  },
  products: {
    title: "Products",
    path: "/product",
    element: <div>Products Page</div>,
  },
  solarpanels: {
    title: "Solar Panels",
    path: "/product/panels",
    element: <SolarPanelsPage />,
  },
  productpage: {
    title: "Product detailed info",
    path: "/product/:category/:uuid",
    element: <ProductPage />,
  },
  signin: {
    title: "Sign In",
    path: "/signin",
    element: <SignInPage />,
  },
  signup: {
    title: "Sign Up",
    path: "/signup",
    element: <SignUpPage />,
  },
  blog: {
    title: "Blog",
    path: "/blog",
    element: <BlogPage />,
  },
  news: {
    title: "News",
    path: "/news",
    element: <NewsPage />,
  },
  shipping: {
    title: "Shipping",
    path: "/shipping",
    element: <ShippingPage />,
  },
  payments: {
    title: "Payments",
    path: "/payments",
    element: <PaymentsPage />,
  },
  help: {
    title: "Help",
    path: "/help",
    element: <HelpPage />,
  },
  favorites: {
    title: "Favorites",
    path: "/favorites",
    element: <FavoritesPage />,
  },
};

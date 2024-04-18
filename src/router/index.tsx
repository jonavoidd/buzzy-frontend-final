import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import GuestLayout from "@/layouts/GuestLayout";
import AdminLayout from "@/layouts/AdminLayout";
import Home from "@/pages/users/Home";
import Menu from "@/pages/users/Menu";
import Faqs from "@/pages/users/Faqs";
import Promo from "@/pages/users/Promo";
import About from "@/pages/users/About";
import Developers from "@/pages/users/Developers";
import Location from "@/pages/users/Location";
import Contact from "@/pages/users/Contact";
import Login from "@/pages/admin/Login";
import Signup from "@/pages/admin/Signup";
import Dashboard from "@/pages/admin/Dashboard";
import AdminMenu from "@/pages/admin/Menu";
import AdminCategory from "@/pages/admin/Category";
import AdminCouponCount from "@/pages/admin/CouponCount";
import AdminCustomer from "@/pages/admin/Customers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "/promo-codes",
        element: <Promo />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/developers",
        element: <Developers />,
      },
      {
        path: "/location",
        element: <Location />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: "*",
        element: <>404 - Not Found!</>,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/admin-dashboard"} />,
      },
      {
        path: "/admin-dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin-menu",
        element: <AdminMenu />,
      },
      {
        path: "/admin-category",
        element: <AdminCategory />,
      },
      {
        path: "/admin-coupon",
        element: <AdminCouponCount />,
      },
      {
        path: "/admin-customers",
        element: <AdminCustomer />,
      },
    ],
  },
]);

export default router;

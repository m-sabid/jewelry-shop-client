import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Layout/Main";
import SignupPage from "../Pages/SignupPage";
import LoginPage from "../Pages/LoginPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../Pages/DashboardPages/AdminDashboard/AllUsers";
import AddProduct from "../Pages/DashboardPages/AdminDashboard/AddProduct";
import AdminHome from "../Pages/DashboardPages/AdminDashboard/AdminHome";
import Payment from "../Pages/DashboardPages/Users/Payment";
// import AddClasses from "../Pages/DashboardPages/InstructorDashboard/AddClasses";
import AdminRoute from "./AdminRoute";
// import AllClasses from "../Pages/DashboardPages/AdminDashboard/AllClasses";
// import AllClassesPage from "../Pages/AllClassesPage";
// import MyClassesCart from "../Pages/DashboardPages/MyClassesCart";
// import EnrolledClasses from "../Pages/DashboardPages/EnrolledClasses";
// import PaymentHistory from "../Pages/DashboardPages/PaymentHistory";
// import InstructorClasses from "../Pages/DashboardPages/InstructorDashboard/InstructorClasses";
// import InstructorFeedback from "../Pages/DashboardPages/InstructorDashboard/InstructorFeedback";
// import InstructorsPage from "../Pages/InstructorsPage";
import ErrorPage from "../Pages/ErrorPage";
import AllProductPage from "../Pages/DashboardPages/AdminDashboard/AllProductPage";
import AllProducts from "../Pages/AllProducts";
import Wishlist from "../Pages/DashboardPages/Users/Wishlist";
import PaymentHistory from "../Pages/DashboardPages/Users/PaymentHistory";
import BlogPage from "../Pages/BlogPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup-page",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "admin-home",
        element: <AdminHome />,
      },
      {
        path: "all-users",
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "all-product",
        element: (
          <PrivateRoute>
            <AllProductPage />
          </PrivateRoute>
        ),
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },
    ],
  },
]);

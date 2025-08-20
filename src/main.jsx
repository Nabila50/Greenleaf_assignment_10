import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./Components/Pages/Home.jsx";
import ExploreGardener from "./Components/Pages/ExploreGardener.jsx";
import BrowserTips from "./Components/Pages/BrowserTips.jsx";
import ShareTips from "./Components/Pages/ShareTips.jsx";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";
import MyTips from "./Components/Pages/MyTips.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import PrivateRoute from "./Provider/PrivateRoute.jsx";
import TipDetails from "./Components/Pages/TipDetails.jsx";
import UpdateTip from "./Components/UpdateTip.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "explore",
        loader: () => fetch(`http://localhost:3000/users`),
        Component: ExploreGardener,
      },
      {
        path: "browser",
        loader: () => fetch(`http://localhost:3000/gardens`),
        Component: BrowserTips,
      },
      {
        path: "share",
        element: (
          <PrivateRoute>
            <ShareTips></ShareTips>
          </PrivateRoute>
        ),
      },
      {
        path: "/users/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/users/${params._id}`),
        element: (
          <PrivateRoute>
            <MyTips></MyTips>
          </PrivateRoute>
        ),
      },

      {
        path: "tipDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/garden/${params.id}`),
        element: (
          <PrivateRoute>
            <TipDetails></TipDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "myTips/:email",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/gardens/${params.email}`),
        element: (
          <PrivateRoute>
            <MyTips></MyTips>
          </PrivateRoute>
        ),
      },
      {
        path: "UpdateTip/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/gardens/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateTip></UpdateTip>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/signup",
        Component: SignUp,
      },

      // {
      //   path: "myTips",
      //   element: (
      //     <PrivateRoute>
      //       <MyTips></MyTips>
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "./components/ui/provider";
import reportWebVitals from "./reportWebVitals";
import MainPage from "./pages/MainPage";
import "./styles/index.css";
import LoginLayout from "./components/templates/LoginLayout";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginLayout />,
  },
  {
    path: "/",
    element: (
      <MainPage>
        <Outlet />
      </MainPage>
    ),
    children: [
      {
        path: "/", // Redirect from the root path
        element: <Navigate to="/chat" replace />, // Redirect to /chat
      },
      {
        path: "chat",
        element: <p>Chat Layout</p>,
      },
      {
        path: "toko",
        element: <p>Toko Layout</p>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();

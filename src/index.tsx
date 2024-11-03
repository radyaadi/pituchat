import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "./components/ui/provider";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.css";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import ShopLayout from "./components/templates/ShopLayout";
import ChatLayout from "./components/templates/ChatLayout";
import { ChatProvider } from "./contexts/chat-context";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/login" replace />,
      },
      {
        path: "chat",
        element: <ChatLayout />,
      },
      {
        path: "toko",
        element: <ShopLayout />,
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
      <ChatProvider>
        <RouterProvider router={router} />
      </ChatProvider>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();

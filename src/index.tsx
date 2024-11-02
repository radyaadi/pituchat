import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "./components/ui/provider";
import App from "./App";
import "./styles/index.css";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <App />,
  },
  {
    path: "/",
    element: (
      <div>
        <p>Main Content Layout</p>
        <Outlet />
      </div>
    ),
    // children: [
    //   {
    //     path: "chat",
    //     element: <p>Chat Layout</p>,
    //   },
    //   {
    //     path: "toko",
    //     element: <p>Toko Layout</p>,
    //   },
    // ],
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

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "@/routes";
import App from "@/App";
import { Provider } from "react-redux";
import "@/global";
import { store } from "@/store";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, //layout
    children: routes,
    errorElement: <div>error</div>,
  },
]);

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<div>loading...</div>} />
    </Provider>
  </StrictMode>,
);

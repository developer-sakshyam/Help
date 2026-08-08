import { createRoot } from "react-dom/client";
import { Hydrate } from "@tanstack/react-start";
import { RouterProvider } from "@tanstack/react-router";

import { getRouter } from "./router";

const router = getRouter();

createRoot(document.getElementById("root")!).render(
  <Hydrate when="visible">
    <RouterProvider router={router} />
  </Hydrate>,
);

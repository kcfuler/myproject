import { createBrowserRouter } from "react-router-dom";

import { Root } from "./Root";
import { Error } from "@/pages/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Home from "../view/home";
import { lazy } from "react";
import lazyLoad from "./utils/LazyLoad";
import Index from "../view/home/component/Index.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home></Home>,
      errorElement: 1,
      children: [
        {
          path: "",
          index: true,
          element: <Index></Index>,
        },
        {
          path: "about",
          element: (
            <div>
              <h1>222</h1>
            </div>
          ),
        },
        {
          path: "profile",
          element: lazyLoad(lazy(() => import("../view/user"))),
        },
      ],
    },
  ],
  {
    basename: "",
    future: {
      v7_normalizeFormMethod: true,
    },
  },
);

export default router;

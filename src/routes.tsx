import Login from "./pages/Login";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Bar from "./common/components/Bar";
import Collections from "./pages/Collections";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/collections",
    element: <Collections />,
  },
]);

export default router;

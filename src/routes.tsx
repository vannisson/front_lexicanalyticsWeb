import Login from "./pages/Login";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

export default router;

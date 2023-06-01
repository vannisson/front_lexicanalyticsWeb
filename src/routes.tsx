import Login from "./pages/Login";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Collections from "./pages/Collections";
import { Box } from "@mantine/core";
import CustomHeader from "./common/components/CustomHeader";
import Production from "./pages/Production";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/collections",
    element: (
      <CustomHeader>
        <Collections />
      </CustomHeader>
    ),
  },
  {
    path: "/production",
    element: (
      <CustomHeader>
        <Production />
      </CustomHeader>
    ),
  },
]);

export default router;

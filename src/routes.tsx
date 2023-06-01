import Login from "./pages/Login";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Collections from "./pages/Collections";
import { Box } from "@mantine/core";
import CustomHeader from "./common/components/CustomHeader";

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
]);

export default router;

import Homepage from "./pages/Homepage";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Background from "./common/components/Background";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Background>
        <Homepage />
      </Background>
    ),
  },
]);

export default router;

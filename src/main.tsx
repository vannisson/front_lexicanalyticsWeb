import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        fontFamily: "Nunito",
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);

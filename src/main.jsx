import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./Providers/AuthProvider";
import "aos/dist/aos.css";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);

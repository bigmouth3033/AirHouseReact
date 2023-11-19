import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { ContextProvider } from "./contexts/ContextProvider";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Suspense } from "react";
import Loading from "./components/Loading";
import Admin from "./pages/Admin";
import { Provider } from "react-redux";
import store from "store";
import AdminLayout from "layouts/AdminLayout";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
  </ContextProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

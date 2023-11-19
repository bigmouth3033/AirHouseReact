import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "../scss/style.scss";
import { Provider } from "react-redux";
import store from "../store";
import { lazy } from "react";
import { Suspense } from "react";


// Containers
const AdminLayout = lazy(() => import("layouts/AdminLayout"));

// Pages
const Login = lazy(() => import("../views/pages/login/Login"));
const Register = lazy(() => import("../views/pages/register/Register"));
const Page404 = lazy(() => import("../views/pages/page404/Page404"));
const Page500 = lazy(() => import("../views/pages/page500/Page500"));

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

export default function Admin() {
  return (
    // <Provider store={store}>
    //   <HashRouter>
    //     <Suspense fallback={loading}>
    //       <Routes>
    //         <Route path="*" name="Home" element={<AdminLayout />} />
    //       </Routes>
    //     </Suspense>
    //   </HashRouter>
    // </Provider>

    <Provider store={store}>
        <AdminLayout/>
    </Provider>
  );
}

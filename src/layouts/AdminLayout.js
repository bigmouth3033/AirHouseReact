import React from "react";
import { AppSidebar, AppFooter, AppHeader } from "components/admin/index";
import { CContainer, CSpinner } from "@coreui/react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { Suspense } from "react";
import { Navigate } from "react-router-dom";
import Loading from "components/Loading";
import { UserQuery } from "api/userApi";
import "../scss/style.scss";

export default function AdminLayout() {
  const userQuery = UserQuery();

  if (userQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError) {
    return <Navigate to="/admin_login" />;
  }

  if (userQuery.isSuccess) {
    localStorage.setItem("ACCESS_TOKEN", userQuery.data.token);
    if (userQuery.data.user.user_type == 1) {
      localStorage.removeItem("ACCESS_TOKEN");
      return <Navigate to="/admin_login" />;
    }
  }

  return (
    <Provider store={store}>
      <Suspense>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <CContainer lg>
              <Suspense fallback={<CSpinner color="primary" />}>
                <Outlet />
              </Suspense>
            </CContainer>
          </div>
          <AppFooter />
        </div>
      </Suspense>
    </Provider>
  );
}

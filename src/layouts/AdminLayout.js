import React from "react";
import { AppSidebar, AppFooter, AppHeader } from "components/admin/index";
import { CContainer, CSpinner } from "@coreui/react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { Suspense } from "react";
import "../scss/style.scss";
import { Navigate } from "react-router-dom";
import { useStateContext } from "contexts/ContextProvider";
import { useEffect, useState } from "react";
import { getUser } from "api/userApi";
import { useNavigate } from "react-router-dom";
import Loading from "components/Loading";

import { useQuery } from "@tanstack/react-query";

export default function AdminLayout() {
  const { token, user, setUser, setToken, loading, setLoading } = useStateContext();

  const userQuery = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: 1
  });

  if (userQuery.isLoading) {
    return <Loading />;
  }

  if (userQuery.isError) {
    return <Navigate to="/admin_login" />;
  }

  if (userQuery.isSuccess) {
    if (userQuery.data.user_type == 1) {
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

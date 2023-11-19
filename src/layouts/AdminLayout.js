import React from "react";
import { AppContent, AppSidebar, AppFooter, AppHeader } from "components/admin/index";
import { CContainer, CSpinner } from "@coreui/react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import { Suspense } from "react";
import "../scss/style.scss";

export default function AdminLayout() {
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

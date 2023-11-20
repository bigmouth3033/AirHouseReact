import React from "react";
import { Link } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";

import { useRef } from "react";
import { onLogin } from "api/userApi";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useStateContext } from "contexts/ContextProvider";
import { Navigate } from "react-router-dom";

import "scss/style.scss";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setUser, setToken } = useStateContext();

  const adminQuery = useQuery({
    queryKey: ["admin"],
    queryFn: clickLogin,
    enabled: false,
    retry: 1,
  });

  if (adminQuery.isError) {
    console.log(adminQuery.error);
  }

  if (adminQuery.isSuccess) {
    setUser(adminQuery.data.user);
    setToken(adminQuery.data.token);
    return <Navigate to="/admin" />;
  }

  function clickLogin() {
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(payload);

    return onLogin(payload);
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={4}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput ref={emailRef} placeholder="Email" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={8}>
                        <CButton
                          disabled={adminQuery.isLoading}
                          onClick={() => adminQuery.refetch()}
                          color="primary"
                          className="px-4"
                        >
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;

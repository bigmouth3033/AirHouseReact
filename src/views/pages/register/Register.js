import React, { useRef } from "react";

import { CButton, CCard, CCardBody, CCol, CContainer, CForm, CFormInput, CInputGroup, CInputGroupText, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import { useQuery } from "@tanstack/react-query";
import { createAdmin } from "api/userApi";

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  return (
    <div className="bg-light  d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center mt-5">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput ref={emailRef} placeholder="Email" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput ref={passwordRef} type="password" placeholder="Password" autoComplete="new-password" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput ref={passwordConfirmRef} type="password" placeholder="Repeat password" autoComplete="new-password" />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success">Create Account</CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;

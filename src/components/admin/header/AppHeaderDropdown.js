import React from "react";
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilPeople,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import Avatar from "react-avatar";

import avatar8 from "assets/images/avatars/8.jpg";
import { useStateContext } from "contexts/ContextProvider";
import { memo } from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { onLogout } from "api/userApi";

import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import Loading from "components/Loading";

const StyledButton = styled.button`
  text-decoration: none;
  background-color: inherit;
  border: none;
  color: inherit;
`;



const AppHeaderDropdown = () => {
  const { user } = useStateContext();
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: onLogout,
    onSuccess: () => {
      queryClient.invalidateQueries(["admin"]);
    },
  });


  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilBell} className="me-2" />
          Updates
          <CBadge color="info" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Messages
          <CBadge color="success" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Tasks
          <CBadge color="danger" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCommentSquare} className="me-2" />
          Comments
          <CBadge color="warning" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>

        <CDropdownItem href="#">
          <CIcon icon={cilPeople} className="me-2" />
          <StyledButton onClick={() => navigate("/admin/register")}>Register</StyledButton>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilCreditCard} className="me-2" />
          Payments
          <CBadge color="secondary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilFile} className="me-2" />
          Projects
          <CBadge color="primary" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={() => mutation.mutate()} href="#">
          <CIcon icon={cilLockLocked} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default AppHeaderDropdown;

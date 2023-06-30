import React, { useState } from "react";
import { Box, IconButton, Theme, useTheme } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ConfirmationModal from "../modals/confirmationModal";
import AddUserModal from "../modals/AddUserModal";
import { ErrorToast, SuccessToast } from "../../utils/toasts";
import { put } from "@/src/config/axiosClient";

interface UserListActionProps {
  userData: any;
  showRole: boolean;
  fetchCallback?: any;
}

const UserListAction: React.FunctionComponent<UserListActionProps> = ({
  userData = {},
  // We pass show role so that for role specific user listing, we may only unmap them from their role and not block them.
  showRole,
  fetchCallback,
}) => {
  const theme = useTheme();
  const [editUserModal, setEditUserModal] = useState<boolean>(false);
  const [openBlockConfirmation, setOpenBlockConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState<string>("");

  const handleEditClick = () => {
    setEditUserModal(true);
  };

  const handleCloseModal = () => {
    setEditUserModal(false);
  };

  const handleOpenConfirmation = (confirmationMessage: string) => {
    setConfirmationMessage(confirmationMessage);
    setOpenBlockConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setOpenBlockConfirmation(false);
  };

  const handleConfirmBlock = async () => {
    await put(`users/${userData?.uuid}`, {
      status:
        confirmationMessage === "block"
          ? "inactive"
          : confirmationMessage === "unblock"
          ? "active"
          : "",
    })
      .then((res) => {
        SuccessToast(`User has been ${confirmationMessage}ed successfully`);
        fetchCallback();
        handleCloseConfirmation();
      })
      .catch((error) => {
        ErrorToast(error.response.data);
      });
  };

  const handleEditBtnCallback = (formData: any) => {
    let data = { ...formData };

    if (data.role_slug == "role-girl-icon") {
      delete data.role_slug;
    }

    put(`users/${userData?.uuid}`, data)
      .then((res) => {
        setEditUserModal(false);
        fetchCallback();
      })
      .catch((error) => {
        ErrorToast(error.response.data);
      });
  };

  return (
    <>
      <AddUserModal
        openModal={editUserModal}
        closeModal={handleCloseModal}
        userUUID={userData?.uuid}
        handleSubmitBtnClick={handleEditBtnCallback}
      />
      <ConfirmationModal
        openModal={openBlockConfirmation}
        closeModal={handleCloseConfirmation}
        buttonText={
          confirmationMessage?.charAt(0).toUpperCase() +
          confirmationMessage.slice(1)
        } // To capitalize first letter of the word
        title={`Are you sure you want to ${confirmationMessage} ${userData?.first_name} ${userData?.last_name}?`}
        handleOnClickConfirm={handleConfirmBlock}
      />

      <Box sx={{ display: "flex", gap: "8px" }}>
        <IconButton
          sx={{
            backgroundColor: `${theme.palette.secondary.light} !important`,
            borderRadius: "0 !important",
          }}
          onClick={handleEditClick}
        >
          <EditIcon
            sx={{
              fontSize: "16px !important",
              color: theme.palette.primary.main,
            }}
          />
        </IconButton>
        {userData?.status === "active" ? (
          <IconButton
            sx={{
              backgroundColor: `${theme.palette.secondary.light} !important`,
              borderRadius: "0 !important",
            }}
            onClick={() => handleOpenConfirmation("block")}
          >
            <DoNotDisturbIcon
              sx={{
                fontSize: "16px !important",
                color: theme.palette.primary.main,
              }}
            />
          </IconButton>
        ) : userData?.status === "inactive" ? (
          <IconButton
            sx={{
              backgroundColor: `${theme.palette.secondary.light} !important`,
              borderRadius: "0 !important",
            }}
            onClick={() => handleOpenConfirmation("unblock")}
          >
            <AddCircleOutlineIcon
              sx={{
                fontSize: "16px !important",
                color: theme.palette.primary.main,
              }}
            />
          </IconButton>
        ) : null}
      </Box>
    </>
  );
};

export default UserListAction;

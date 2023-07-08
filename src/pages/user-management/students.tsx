import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import { ManageUserRoleSpecific } from "@/utils/dataModifiers/ConditinalRenderingForRoles";
import PageTitle from "@/components/user_management/pageTitle";
import PrimaryButton from "@/components/ui-components/buttons/primaryButton";
import { Context } from "@/context/ContextProvider";
import { FetchUsersListPromise } from "@/utils/apis/common/userList";
import UsersList from "@/components/user_management/UsersList";
import AddUserToRole from "@/components/modals/AddUserToRole";
import AddUserModal from "@/components/modals/AddUserModal";
import BulkUploadUsers from "@/components/modals/BulkUploadUsers";
import { get, post } from "@/src/config/axiosClient";
import { ErrorToast, SuccessToast } from "@/utils/toasts";

const Trainers = () => {
  const context = useContext(Context);
  const UserContext = context?.User;
  const GlobalDetailsContext = context?.GlobalDetails;

  const { currentState, userProfile } = GlobalDetailsContext?.state;
  const [openAddUserModal, setOpenAddUserModal] = useState<boolean>(false);
  const [openBulkUploadModal, setOpenBulkUploadModal] =
    useState<boolean>(false);
  const [openAddFacilitatorModal, setOpenAddFacilitatorModal] =
    useState<boolean>(false);
  const [usersList, setUsersList] = useState<[] | any>([]);

  const handleAddFacilitatorClick = () => {
    setOpenAddFacilitatorModal(true);
  };

  const fetchUsers = () => {
    FetchUsersListPromise("role-student", "").then((response: any) => {
      setUsersList(response);
    });
  };

  const handleAddBtnClick = () => {
    setOpenAddUserModal(true);
  };

  const handleBulkUploadClick = () => {
    setOpenBulkUploadModal(true);
  };

  const handleCloseModal = () => {
    setOpenAddUserModal(false);
  };

  const handleCloseBulkUploadModal = () => {
    setOpenBulkUploadModal(false);
  };

  const handleCloseModalCallback = () => {
    fetchUsers();
    setOpenAddFacilitatorModal(false);
  };

  const handleAddUserClick = (newUserDetails: any) => {
    post("users", newUserDetails)
      .then((res) => {
        SuccessToast(res.data.message);
        UserContext.dispatch({
          type: "new-user-details",
          value: {},
        });
        setOpenAddUserModal(false);
        fetchUserList();
      })
      .catch((error) => {
        ErrorToast(error.response.data);
      });
  };

  const fetchUserList = async (status?: any) => {
    let params: any = {};
    status === "all" || !status ? null : (params.status = status);
    await get("users", params).then((res) => {
      setUsersList(res.data.body);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, [currentState]);

  return (
    <>
      <AddUserToRole
        openModal={openAddFacilitatorModal}
        closeModal={handleCloseModalCallback}
        roleToMap={"role-program-coordinator"}
        currentRole={"Facilitator"}
      />
      <AddUserModal
        openModal={openAddUserModal}
        closeModal={handleCloseModal}
        handleSubmitBtnClick={handleAddUserClick}
      />
      <BulkUploadUsers
        openModal={openBulkUploadModal}
        closeModal={handleCloseBulkUploadModal}
        callbackUsersAPI={fetchUserList}
      />
      <Box>
        <PageTitle
          route={"USER MANAGEMENT / STUDENTS"}
          title={"Students"}
          subTitle={"Showing various statistics from various states below"}
        >
          {/* {ManageUserRoleSpecific(
            ["role-admin", "role-state-admin", "role-program-manager"],
            userProfile?.roles[0]
          ) ? (
            <PrimaryButton
              label={"ADD A FACILITATOR"}
              sx={{ height: "32px !important", fontSize: "11px" }}
              onClick={handleAddFacilitatorClick}
            />
          ) : null} */}
          <Box display={"flex"} gap={2}>
            <PrimaryButton
              onClick={handleBulkUploadClick}
              sx={{
                height: "32px !important",
                fontSize: "11px",
              }}
              variant="outlined"
              label={"Bulk Upload"}
            />

            <PrimaryButton
              onClick={handleAddBtnClick}
              sx={{ height: "32px !important", fontSize: "11px" }}
              label={`Add a user`}
            />
          </Box>
        </PageTitle>
        <Box padding={"20px 30px"}>
          <UsersList userList={usersList} showReporter={true} />
        </Box>
      </Box>
    </>
  );
};

export default Trainers;

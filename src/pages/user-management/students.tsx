import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import { ManageUserRoleSpecific } from "@/utils/dataModifiers/ConditinalRenderingForRoles";
import PageTitle from "@/components/user_management/pageTitle";
import PrimaryButton from "@/components/ui-components/buttons/primaryButton";
import { Context } from "@/context/ContextProvider";
import { FetchUsersListPromise } from "@/utils/apis/common/userList";
import AddUserToRole from "@/components/modals/AddUserToRole";
import AddUserModal from "@/components/modals/AddUserModal";
import AddStudentModal from "@/components/modals/AddStudentModal";
import BulkUploadUsers from "@/components/modals/BulkUploadUsers";
import { get, post } from "@/src/config/axiosClient";
import { ErrorToast, SuccessToast } from "@/utils/toasts";
import StudentsList from "@/components/user_management/listingComponents/studentsListing";

const Students = () => {
  const context = useContext(Context);
  const UserContext = context?.User;
  const GlobalDetailsContext = context?.GlobalDetails;

  const { currentState, userProfile } = GlobalDetailsContext?.state;
  const [openAddUserModal, setOpenAddUserModal] = useState<boolean>(false);
  const [openAddStudentModal, setOpenAddStudentModal] =
    useState<boolean>(false);
  const [openBulkUploadModal, setOpenBulkUploadModal] =
    useState<boolean>(false);
  const [openAddFacilitatorModal, setOpenAddFacilitatorModal] =
    useState<boolean>(false);
  const [usersList, setUsersList] = useState<[] | any>([]);

  const handleAddFacilitatorClick = () => {
    setOpenAddFacilitatorModal(true);
  };

  const handleAddBtnClick = () => {
    setOpenAddStudentModal(true);
  };

  const handleBulkUploadClick = () => {
    setOpenBulkUploadModal(true);
  };

  const handleCloseModal = () => {
    setOpenAddStudentModal(false);
  };

  const handleCloseBulkUploadModal = () => {
    setOpenBulkUploadModal(false);
  };

  const handleCloseModalCallback = () => {
    fetchUsersList();
    setOpenAddFacilitatorModal(false);
  };

  const fetchUsersList = async (status?: any) => {
    let params: any = {};
    await get("students", params).then((res) => {
      setUsersList(res.data.body);
    });
  };

  useEffect(() => {
    fetchUsersList();
  }, [currentState]);

  return (
    <>
      <AddUserToRole
        openModal={openAddFacilitatorModal}
        closeModal={handleCloseModalCallback}
        roleToMap={"role-program-coordinator"}
        currentRole={"Facilitator"}
      />
      <AddStudentModal
        openModal={openAddStudentModal}
        closeModal={handleCloseModal}
        // handleSubmitBtnClick={handleAddUserClick}
      />
      <BulkUploadUsers
        openModal={openBulkUploadModal}
        closeModal={handleCloseBulkUploadModal}
        callbackUsersAPI={fetchUsersList}
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
              label={`Add a student`}
            />
          </Box>
        </PageTitle>
        <Box padding={"20px 30px"}>
          <StudentsList
            userList={usersList}
            showReporter={true}
            fetchUserCallback={fetchUsersList}
          />
        </Box>
      </Box>
    </>
  );
};

export default Students;

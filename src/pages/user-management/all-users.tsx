import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import { get, post } from "../../config/axiosClient";
import { Context } from "@/context/ContextProvider";
import PageTitle from "@/components/user_management/pageTitle";
import { ErrorToast, SuccessToast } from "@/utils/toasts";
import PrimaryButton from "@/components/ui-components/buttons/primaryButton";
import { GlobalAddUser } from "@/utils/dataModifiers/ConditinalRenderingForRoles";
import UsersList from "@/components/user_management/UsersList";
import StatusTabs from "@/components/ui-components/StatusTabs";
import AddUserModal from "@/components/modals/AddUserModal";
import BulkUploadUsers from "@/components/modals/BulkUploadUsers";

const AllUsers = () => {
  const context = useContext(Context);
  const UserContext = context?.User;
  const GlobalDetailsContext = context?.GlobalDetails;

  const { currentState, userProfile } = GlobalDetailsContext?.state;

  const [openAddUserModal, setOpenAddUserModal] = useState<boolean>(false);
  const [openBulkUploadModal, setOpenBulkUploadModal] =
    useState<boolean>(false);

  const [usersList, setUsersList] = useState<any>([]);
  const [currentStatus, setCurrentStatus] = useState<string | null>(null);
  const [showAddUserBtn, setShowAddUserBtn] = useState<boolean>(true);

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
    await get("users", params).then((res) => {
      setUsersList(res.data.body);
    });
  };

  const handleTabChange = (status: any) => {
    setCurrentStatus(status);
    fetchUserList(status);
  };

  useEffect(() => {
    fetchUserList(currentStatus);
  }, [currentState]);

  useEffect(() => {
    setShowAddUserBtn(
      GlobalAddUser(userProfile?.roles && userProfile?.roles[0])
    );
  }, [userProfile]);

  return (
    <>
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
          route={"USER MANAGEMENT / ALL USERS"}
          title={"All Users"}
          subTitle={"Showing various statistics "}
        >
          {showAddUserBtn ? (
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
          ) : null}
        </PageTitle>

        <Box padding={"20px 30px"}>
          <Box marginBottom={"20px"}>
            <StatusTabs onTabChange={handleTabChange} />
          </Box>
          <UsersList
            userList={usersList}
            showRole={true}
            fetchUserCallback={fetchUserList}
          />
        </Box>
      </Box>
    </>
  );
};

export default AllUsers;

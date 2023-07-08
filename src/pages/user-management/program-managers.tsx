import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import { Context } from "@/context/ContextProvider";
import { ManageUserRoleSpecific } from "@/utils/dataModifiers/ConditinalRenderingForRoles";
import { FetchUsersListPromise } from "@/utils/apis/common/userList";
import PrimaryButton from "@/components/ui-components/buttons/primaryButton";
import UsersList from "@/components/user_management/UsersList";
import AddUserToRole from "@/components/modals/AddUserToRole";
import PageTitle from "@/components/user_management/pageTitle";

const ProgramManagers = () => {
  const context = useContext(Context);

  const GlobalContextDetails = context?.GlobalDetails;
  console.log("first", GlobalContextDetails);
  const { userProfile } = GlobalContextDetails?.state;
  const [openAssignRoleModal, setOpenAssignRoleModal] =
    useState<boolean>(false);

  const [usersList, setUsersList] = useState<[] | any>([]);

  const handleAddManagerClick = () => {
    setOpenAssignRoleModal(true);
  };

  const handleCloseModalCallback = () => {
    fetchUsersList();
    setOpenAssignRoleModal(false);
  };

  const fetchUsersList = () => {
    FetchUsersListPromise("role-program-manager", "").then((response: any) => {
      setUsersList(response);
    });
  };

  useEffect(() => {
    fetchUsersList();
  }, []);

  return (
    <>
      <AddUserToRole
        openModal={openAssignRoleModal}
        closeModal={handleCloseModalCallback}
        roleToMap={"role-program-manager"}
        currentRole="Program Manager"
      />
      <Box>
        <PageTitle
          route={"USER MANAGEMENT / PROGRAM MANAGERS"}
          title={"Program Managers"}
          subTitle={"Showing various statistics from various states below"}
        >
          {/* {ManageUserRoleSpecific(
            ["role-admin", "role-state-admin"],
            userProfile?.roles?.[0]
          ) ? (
            <PrimaryButton
              label={"ADD A MANAGER"}
              sx={{ height: "32px !important", fontSize: "11px" }}
              onClick={handleAddManagerClick}
            />
          ) : null} */}
        </PageTitle>
        <Box sx={{ padding: "20px 30px" }}>
          <UsersList userList={usersList} />
        </Box>
      </Box>
    </>
  );
};

export default ProgramManagers;

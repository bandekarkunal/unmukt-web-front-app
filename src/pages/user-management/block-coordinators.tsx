import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import { Context } from "@/context/ContextProvider";
import PrimaryButton from "@/components/ui-components/buttons/primaryButton";
import UsersList from "@/components/user_management/UsersList";
import PageTitle from "@/components/user_management/pageTitle";
import AddUserToRole from "@/components/modals/AddUserToRole";
import { ManageUserRoleSpecific } from "@/utils/dataModifiers/ConditinalRenderingForRoles";
import { FetchUsersListPromise } from "@/utils/apis/common/userList";

const BlockCoordinators = () => {
  const context = useContext(Context);
  const GlobalDetailsContext = context?.GlobalDetails;

  const { currentState, userProfile } = GlobalDetailsContext?.state;

  const [openAddCoordinatorModal, setOpenAddCoordinatorModal] =
    useState<boolean>(false);
  const [usersList, setUsersList] = useState<[] | any>([]);

  const handleAddCoordinatorClick = () => {
    setOpenAddCoordinatorModal(true);
  };

  const fetchUsers = () => {
    FetchUsersListPromise("role-block-coordinator", "").then(
      (response: any) => {
        setUsersList(response);
      }
    );
  };

  const handleCloseModalCallback = () => {
    fetchUsers();
    setOpenAddCoordinatorModal(false);
  };

  useEffect(() => {
    fetchUsers();
  }, [currentState]);
  return (
    <>
      <AddUserToRole
        openModal={openAddCoordinatorModal}
        closeModal={handleCloseModalCallback}
        roleToMap={"role-program-coordinator"}
        currentRole={"Coordinator"}
      />
      <Box>
        <PageTitle
          route={"USER MANAGEMENT / BLOCK-COORDINATORS"}
          title={"Block-Coordinators"}
          subTitle={"Showing various statistics from various states below"}
        >
          {/* {ManageUserRoleSpecific(
            ["role-admin", "role-state-admin", "role-program-manager"],
            userProfile?.roles[0]
          ) ? (
            <PrimaryButton
              label={"ADD A COORDINATOR"}
              sx={{ height: "32px !important", fontSize: "11px" }}
              onClick={handleAddCoordinatorClick}
            />
          ) : null} */}
        </PageTitle>

        <Box padding={"20px 30px"}>
          <UsersList userList={usersList} showReporter={true} />
        </Box>
      </Box>
    </>
  );
};

export default BlockCoordinators;

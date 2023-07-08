import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import { ManageUserRoleSpecific } from "@/utils/dataModifiers/ConditinalRenderingForRoles";
import PageTitle from "@/components/user_management/pageTitle";
import PrimaryButton from "@/components/ui-components/buttons/primaryButton";
import { Context } from "@/context/ContextProvider";
import { FetchUsersListPromise } from "@/utils/apis/common/userList";
import UsersList from "@/components/user_management/UsersList";
import AddUserToRole from "@/components/modals/AddUserToRole";

const Trainers = () => {
  const context = useContext(Context);
  const GlobalDetailsContext = context?.GlobalDetails;

  const { currentState, userProfile } = GlobalDetailsContext?.state;

  const [openAddFacilitatorModal, setOpenAddFacilitatorModal] =
    useState<boolean>(false);
  const [usersList, setUsersList] = useState<[] | any>([]);

  const handleAddFacilitatorClick = () => {
    setOpenAddFacilitatorModal(true);
  };

  const fetchUsers = () => {
    FetchUsersListPromise("role-trainer", "").then((response: any) => {
      setUsersList(response);
    });
  };

  const handleCloseModalCallback = () => {
    fetchUsers();
    setOpenAddFacilitatorModal(false);
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
      <Box>
        <PageTitle
          route={"USER MANAGEMENT / TRAINERS"}
          title={"Trainers"}
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
        </PageTitle>

        <Box padding={"20px 30px"}>
          <UsersList userList={usersList} showReporter={true} />
        </Box>
      </Box>
    </>
  );
};

export default Trainers;

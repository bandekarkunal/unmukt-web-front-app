import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import { Context } from "@/context/ContextProvider";
import PrimaryButton from "@/components/ui-components/buttons/primaryButton";
import PageTitle from "@/components/user_management/pageTitle";
import AddUserToRole from "@/components/modals/AddUserToRole";
import { ManageUserRoleSpecific } from "@/utils/dataModifiers/ConditinalRenderingForRoles";
import { FetchUsersListPromise } from "@/utils/apis/common/userList";
import BlockCoordinatesList from "@/components/user_management/listingComponents/block-coordinatorsListing";
import { get } from "@/src/config/axiosClient";

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

  const fetchUsersList = async (status?: any) => {
    let params: any = {};
    await get("block-coordinators", params).then((res) => {
      setUsersList(res.data.body);
    });
  };

  const handleCloseModalCallback = () => {
    fetchUsersList();
    setOpenAddCoordinatorModal(false);
  };

  useEffect(() => {
    fetchUsersList();
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
          <BlockCoordinatesList
            userList={usersList}
            showReporter={true}
            fetchUserCallback={fetchUsersList}
          />
        </Box>
      </Box>
    </>
  );
};

export default BlockCoordinators;

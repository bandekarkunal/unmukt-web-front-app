import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import { ManageUserRoleSpecific } from "@/utils/dataModifiers/ConditinalRenderingForRoles";
import PageTitle from "@/components/user_management/pageTitle";
import PrimaryButton from "@/components/ui-components/buttons/primaryButton";
import { Context } from "@/context/ContextProvider";
import { FetchUsersListPromise } from "@/utils/apis/common/userList";
import UsersList from "@/components/user_management/UsersList";
import AddUserToRole from "@/components/modals/AddUserToRole";
import TrainersList from "@/components/user_management/listingComponents/trainersListing";
import { get } from "@/src/config/axiosClient";

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

  const fetchUsersList = async (status?: any) => {
    let params: any = {};
    await get("trainers", params).then((res) => {
      setUsersList(res.data.body);
    });
  };

  const handleCloseModalCallback = () => {
    fetchUsersList();
    setOpenAddFacilitatorModal(false);
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
          <TrainersList
            userList={usersList}
            showReporter={true}
            fetchUserCallback={fetchUsersList}
          />
        </Box>
      </Box>
    </>
  );
};

export default Trainers;

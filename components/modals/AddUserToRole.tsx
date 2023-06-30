import React, { useState, useContext, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Box,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Theme,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../ui-components/buttons/primaryButton";
import { Context } from "../../context/ContextProvider";
import { FetchUsersListPromise } from "../../utils/apis/common/userList";
import { SuccessToast, ErrorToast } from "../../utils/toasts";
import { post } from "@/src/config/axiosClient";
import ListOfProgramCoordinators from "../user_management/ListOfPorgramCoordinator";
import ListOfProgramManagers from "../user_management/ListOfProgramManagers";
import ListOfDistricts from "../user_management/ListOfDistricts";
import SelectState from "../user_management/SelectState";

interface props {
  openModal: boolean;
  closeModal: any;
  roleToMap?: string;
  currentRole: string;
  centralRole?: boolean;
}

// const useStyles = makeStyles((theme: Theme) => ({
//   paper: {
//     maxWidth: "432px",
//     width: "100%",
//     padding: "54px",
//     position: "relative",
//     borderRadius: "0 !important",
//   },
//   inputField: {
//     height: "48px",
//     minHeight: "auto",
//     width: "100%",
//     borderRadius: "0 !important",
//   },
//   outlinedInput: {
//     minHeight: "auto",
//     height: "48px",
//     fontSize: "15px !important",
//     color: "#495057",
//     borderRadius: "0 !important",
//   },
//   inputLabel: {
//     fontSize: "13px !important",
//     color: "#495057 !important",
//     fontWeight: `${500} !important`,
//     marginBottom: "8px",
//   },
// }));

const AddUserToRole: React.FunctionComponent<props> = ({
  openModal,
  closeModal,
  roleToMap,
  currentRole,
  centralRole,
}) => {
  const context = useContext(Context);
  const GlobalDetailsContext = context?.GlobalDetails;

  const { stateList, userProfile, currentState } = GlobalDetailsContext?.state;

  const [selectedUser, setSelectedUser] = useState<string>("default");
  const [selectedState, setSelectedState] = useState<string>("default");
  const [selectedDistricts, setSelectedDistricts] = useState<[] | any>([]);
  const [stateDependentUserList, setStateDependentUserList] = useState<
    any | []
  >([]);
  const [selectedProgramManager, setSelectedProgramManager] =
    useState<string>("default");
  const [selectedProgramCoordinator, setSelectedProgramCoordinator] =
    useState<string>("default");
  const handleUserChange = (event: any) => {
    setSelectedUser(event.target.value);
  };

  const handleStateChange = (response: string) => {
    setSelectedState(response);
    FetchUsersListPromise(response, "", roleToMap).then((response) => {
      setStateDependentUserList(response);
    });
  };

  const handleAssignRoleButtonPress = async () => {
    let formData: any = {};
    formData.state_id = selectedState;
    formData.user_uuid = selectedUser;
    formData.role_slug = roleToMap;
    if (roleToMap === "role-program-manager") {
      formData.districts = selectedDistricts;
    }
    if (
      roleToMap === "role-program-coordinator" ||
      roleToMap === "role-facilitator"
    ) {
      formData.program_manager_uuid = selectedProgramManager;
    }

    if (roleToMap === "role-sahyogi" || roleToMap === "role-volunteer") {
      formData.program_coordinator_uuid = selectedProgramCoordinator;
    }

    await post("users/state-member", formData).then(
      (res) => {
        SuccessToast("Role has been successfully assigned");
        handleCloseModal();
      },
      (err) => {
        ErrorToast(err.response.data);
      }
    );
  };

  const handleDistrictChangeCallback = (response: any) => {
    setSelectedDistricts(response);
  };

  const handleProgramManagerChange = (response: string) => {
    setSelectedProgramManager(response);
  };

  const handleFacilitatorChangeCallback = (response: string) => {
    setSelectedProgramCoordinator(response);
  };

  const handleCloseModal = () => {
    currentState?.id
      ? setSelectedState(currentState?.id)
      : setSelectedState("default");
    setSelectedUser("default");
    closeModal();
  };

  useEffect(() => {
    if (currentState?.id) {
      FetchUsersListPromise(currentState?.id, "", roleToMap).then(
        (response) => {
          setStateDependentUserList(response);
        }
      );
      setSelectedState(currentState?.id);
    }
  }, [currentState?.id]);

  useEffect(() => {
    if (centralRole && openModal) {
      FetchUsersListPromise("", "", roleToMap).then((response) => {
        setStateDependentUserList(response);
      });
    }
  }, [openModal]);

  return (
    <Dialog
      open={openModal}
      onClose={handleCloseModal}
      sx={{
        ".MuiDialog-paper": {
          maxWidth: "432px",
          width: "100%",
          padding: "54px",
          position: "relative",
          borderRadius: "0 !important",
        },
      }}
    >
      <DialogContent sx={{ padding: 0 }}>
        <IconButton
          sx={{ position: "absolute", top: "16px", right: "16px" }}
          onClick={handleCloseModal}
        >
          <CloseIcon sx={{ color: "#212121" }} />
        </IconButton>
        <Typography fontWeight={500} marginBottom={3}>
          Add a new {currentRole}
        </Typography>
        {centralRole ? null : (
          <Box marginBottom={3}>
            <SelectState
              handleChangeCallback={handleStateChange}
              state_id={selectedState}
            />
          </Box>
        )}

        <Box marginBottom={3}>
          <InputLabel
            sx={{
              "	.MuiInputLabel-root": {
                fontSize: "13px !important",
                color: "#495057 !important",
                fontWeight: `${500} !important`,
                marginBottom: "8px",
              },
            }}
          >
            User
          </InputLabel>
          <Select
            sx={{
              height: "48px",
              minHeight: "auto",
              width: "100%",
              borderRadius: "0 !important",
              "	.MuiSelect-outlined": {
                minHeight: "auto",
                height: "48px",
                fontSize: "15px !important",
                color: "#495057",
                borderRadius: "0 !important",
              },
            }}
            value={selectedUser}
            onChange={handleUserChange}
            disabled={!centralRole && selectedState === "default"}
          >
            <MenuItem selected value={"default"} disabled>
              Select User
            </MenuItem>
            {stateDependentUserList?.map((user: any, userIndex: number) => (
              <MenuItem value={user.uuid} key={userIndex}>
                {user.first_name} {user.last_name}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {roleToMap === "role-program-manager" ? (
          <ListOfDistricts
            state_id={selectedState}
            use_case={roleToMap}
            onDistrictChange={handleDistrictChangeCallback}
          />
        ) : null}

        {roleToMap === "role-program-coordinator" ||
        roleToMap === "role-facilitator" ? (
          <ListOfProgramManagers
            state_id={selectedState}
            onProgramManagerChange={handleProgramManagerChange}
          />
        ) : null}

        {roleToMap === "role-sahyogi" || roleToMap === "role-volunteer" ? (
          <ListOfProgramCoordinators
            state_id={selectedState}
            onProgramCoordinatorsChange={handleFacilitatorChangeCallback}
          />
        ) : null}

        <Box>
          <PrimaryButton
            sx={{
              borderRadius: "0",
              textTransform: "none",
              fontSize: "14px",
            }}
            label={"Assign role to user"}
            onClick={handleAssignRoleButtonPress}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserToRole;

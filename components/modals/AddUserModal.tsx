import React, { useEffect, useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Theme,
  IconButton,
  Grid,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../ui-components/buttons/primaryButton";
import CustomInputField from "../ui-components/customInputField";
import { Context } from "../../context/ContextProvider";
import ListOfDistricts from "../user_management/ListOfDistricts";
import { get } from "@/src/config/axiosClient";
import ListOfProgramManagers from "../user_management/ListOfProgramManagers";
import CustomSelectField from "../ui-components/customSelectField";
import { CheckForGlobalRole } from "@/utils/dataModifiers/checkForGlobalRole";
import { newUserForm } from "@/utils/static/newUserForm";
import ListOfProgramCoordinators from "../user_management/ListOfPorgramCoordinator";

interface props {
  openModal: boolean;
  closeModal: any;
  handleSubmitBtnClick?: any;
  userUUID?: string;
}

const AddUserModal: React.FunctionComponent<props> = ({
  openModal,
  closeModal,
  handleSubmitBtnClick,
  userUUID,
}) => {
  const context = useContext(Context);
  const GlobalDetailsContext = context?.GlobalDetails;

  const { stateList, rolesList, currentState } = GlobalDetailsContext?.state;
  const [userDetails, setUserDetails] = useState<any | {}>({});

  const [formData, setFormData] = useState<any>({});

  const [disableButton, setDisableButton] = useState(false);

  const [disableEdit, setDisableEdit] = useState<boolean>(false);

  const handleCloseModal = () => {
    currentState?.id
      ? setFormData({ ...formData, state_id: currentState?.id })
      : setFormData({});
    closeModal();
  };

  const handleDistrictsChange = async (values: any) => {
    setFormData({ ...formData, districts: values });
  };

  const handleProgramManagerChange = async (values: string) => {
    setFormData({ ...formData, program_manager_uuid: values });
  };

  const handleProgramCoordinatorChangeCallback = (value: string) => {
    setFormData({ ...formData, program_coordinator_uuid: value });
  };

  const handleBtnClick = async (event: any) => {
    event.preventDefault();
    handleSubmitBtnClick(formData);
  };

  const handleChangeCallback = (itemID: any, response: string) => {
    if (itemID === "role_slug") {
      delete formData.districts;
      delete formData.program_manager_uuid;
    }

    if (itemID === "role_slug") {
      if (CheckForGlobalRole(response)) {
        delete formData.state_id;
      }
    }
    if (itemID === "role_slug" && response === "role-program-manager") {
      formData.districts = null;
    }

    if (
      itemID === "role_slug" &&
      (response === "role-facilitator" ||
        response === "role-program-coordinator")
    ) {
      formData.program_manager_uuid = null;
    }
    setFormData({ ...formData, [itemID]: response });
  };

  const handleValidation = () => {
    let formDataObj: any = formData;
    let error: boolean = false;
    if (!formData.role_slug) {
      delete formDataObj.role_slug;
    }

    if (formData.role_slug === "role-girl-icon") {
      delete formDataObj.designation;
    }

    Object.values(formDataObj).forEach((element: any) => {
      if (element === null || element == "" || !element?.length) {
        error = true;
      }
    });
    setDisableButton(error);
  };

  useEffect(() => {
    handleValidation();
  }, [formData]);

  useEffect(() => {
    if (currentState?.id) {
      setFormData({ ...formData, state_id: currentState?.id });
    }
  }, [currentState?.id]);

  useEffect(() => {
    if (openModal) {
      if (userUUID) {
        fetchUserDetails();
      } else {
        setDefaultFormDataValues();
      }
    }
  }, [openModal]);

  const setDefaultFormDataValues = () => {
    formData.first_name = null;
    formData.last_name = null;
    formData.email = null;
    formData.phone = null;
    formData.designation = null;
    formData.role_slug = null;
    formData.state_id = currentState?.id ? currentState?.id : null;
    setFormData({ ...formData });
  };

  const fetchUserDetails = () => {
    get(`users/${userUUID}`).then((res: any) => {
      if (res.data.body.status !== "yet_to_join") setDisableEdit(true);
      prefillUserDetails(res.data.body);
      setUserDetails(res.data.body);
    });
  };

  const prefillUserDetails = (userData: any) => {
    formData.first_name = userData?.first_name;
    formData.last_name = userData?.last_name;
    formData.email = userData?.email;
    formData.phone = userData?.phone;
    formData.designation = userData?.designation;
    formData.role_slug = userData?.roles[0]?.slug;
    formData.state_id = userData?.state_member?.state_id;
    if (userData?.state_member?.manager?.uuid) {
      if (
        userData?.roles[0]?.slug === "role-program-coordinator" ||
        userData?.roles[0]?.slug === "role-facilitator"
      )
        formData.program_manager_uuid = userData.state_member.manager.uuid;
      else if (
        userData?.roles[0]?.slug === "role-sahyogi" ||
        userData?.roles[0]?.slug === "role-volunteer"
      ) {
        formData.program_coordinator_uuid = userData.state_member.manager.uuid;
      }
    }
    if (userData?.districts.length) {
      formData.districts = userData?.districts.map(
        (option: any) => option.district_id
      );
    }
    setFormData({ ...formData });
  };

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
      <DialogContent sx={{ padding: 0, overflowY: "unset !important" }}>
        <IconButton
          sx={{ position: "absolute", top: "16px", right: "16px" }}
          onClick={handleCloseModal}
        >
          <CloseIcon sx={{ color: "#212121" }} />
        </IconButton>
        <Typography fontWeight={500} marginBottom={3}>
          {userUUID ? "Edit user details" : "Add a new User"}
        </Typography>
        <form onSubmit={handleBtnClick}>
          <Grid container columnSpacing={2}>
            {newUserForm.map((item: any, index: number) =>
              item?.type === "menu" ? null : (
                <Grid item xs={item.colSize} key={index}>
                  {item?.label === "Designation" &&
                  formData?.role_slug === "role-girl-icon" ? null : (
                    <CustomInputField
                      label={item?.label}
                      fieldName={item?.name}
                      required={true}
                      onChange={(response: any) =>
                        handleChangeCallback(item?.id, response)
                      }
                      value={formData[item.name]}
                      type={item?.type}
                      disabled={
                        item?.can_be_disabled && disableEdit ? true : false
                      }
                    />
                  )}
                </Grid>
              )
            )}
          </Grid>

          <Box marginBottom={3}>
            <CustomSelectField
              label={"Role"}
              fieldName={"role_slug"}
              required={false}
              valueKey={"slug"}
              placeholder={"Select Role"}
              onChange={(response: any) =>
                handleChangeCallback("role_slug", response)
              }
              disabled={formData?.role_slug === "role-student"}
              data={rolesList}
              value={formData?.role_slug ? formData?.role_slug : "default"}
            />
          </Box>

          {formData?.role_slug === "role-program-manager" ? (
            <ListOfDistricts
              state_id={formData?.state_id}
              use_case={formData?.role_slug}
              onDistrictChange={handleDistrictsChange}
              district_array={userDetails?.districts}
              // disabled={userDetails?.districts?.length !== 0 ? true : false}
            />
          ) : null}
          {formData?.role_slug === "role-facilitator" ||
          formData?.role_slug === "role-program-coordinator" ? (
            <ListOfProgramManagers
              state_id={formData?.state_id}
              onProgramManagerChange={handleProgramManagerChange}
              program_manager_id={formData?.program_manager_uuid}
              // disabled={userDetails?.state_member?.manager?.uuid ? true : false}
            />
          ) : null}

          {formData?.role_slug === "role-sahyogi" ||
          formData?.role_slug === "role-volunteer" ? (
            <ListOfProgramCoordinators
              state_id={formData?.state_id}
              onProgramCoordinatorsChange={
                handleProgramCoordinatorChangeCallback
              }
              program_coordinator_uuid={formData?.program_coordinator_uuid}
              // disabled={userDetails?.state_member?.manager?.uuid ? true : false}
            />
          ) : null}
          <Box>
            <PrimaryButton
              sx={{
                borderRadius: "0",
                textTransform: "none",
                fontSize: "14px",
              }}
              label={(userUUID ? "Edit" : "Add") + " " + "user"}
              disabled={disableButton}
            />
          </Box>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserModal;

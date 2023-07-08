import { Box, Dialog, DialogContent, IconButton, Theme } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import CustomInputField from "../ui-components/customInputField";
import PrimaryButton from "../ui-components/buttons/primaryButton";
import CloseIcon from "@mui/icons-material/Close";
import { ErrorToast, SuccessToast } from "../../utils/toasts";
import { EditProfileValidation } from "../../utils/validations";
import { put } from "@/src/config/axiosClient";

interface EditUserProfileProps {
  openModal: boolean;
  handleCloseModal: any;
  userProfile: any;
}

const EditUserProfile: React.FunctionComponent<EditUserProfileProps> = ({
  openModal,
  handleCloseModal,
  userProfile,
}) => {
  const formik = useFormik({
    initialValues: {
      first_name: userProfile?.first_name,
      last_name: userProfile?.last_name,
      email: userProfile?.email,
      phone: userProfile?.phone,
    },
    validationSchema: EditProfileValidation,
    onSubmit: (values: any) => {
      handleSubmit(values);
    },
    enableReinitialize: true,
  });

  const handleSubmit = (values: any) => {
    put("auth/user/profile", values)
      .then((res) => {
        SuccessToast("Successfully updated profile details");
        handleCloseModal();
      })
      .catch((error) => {
        ErrorToast(error.response.data);
      });
  };

  return (
    <Dialog
      open={openModal}
      onClose={handleCloseModal}
      sx={{
        "	.MuiDialog-paper": {
          maxWidth: "432px",
          width: "100%",
          position: "relative",
          borderRadius: "0 !important",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <IconButton
          sx={{ position: "absolute", top: "5px", right: "5px" }}
          onClick={handleCloseModal}
        >
          <CloseIcon sx={{ color: "#212121" }} />
        </IconButton>
        <DialogContent>
          <form onSubmit={formik.handleSubmit}>
            <CustomInputField
              label={"First Name"}
              fieldName={"first_name"}
              required={true}
              type={"first_name"}
              formik={formik}
              value={formik.values.first_name}
              error={
                formik.touched.first_name && Boolean(formik.errors.first_name)
              }
              helperText={formik.touched.first_name && formik.errors.first_name}
            />
            <CustomInputField
              label={"Last Name"}
              fieldName={"last_name"}
              required={true}
              type={"last_name"}
              formik={formik}
              value={formik.values.last_name}
              error={
                formik.touched.last_name && Boolean(formik.errors.last_name)
              }
              helperText={formik.touched.last_name && formik.errors.last_name}
            />

            <CustomInputField
              label={"Email address"}
              fieldName={"email"}
              required={true}
              type={"email"}
              disabled
              formik={formik}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <CustomInputField
              label={"Phone number"}
              fieldName={"phone"}
              required={false}
              type={"phone"}
              formik={formik}
              value={formik.values.phone}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <PrimaryButton
              sx={{
                width: "100%",
              }}
              label={"Submit"}
            />
          </form>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default EditUserProfile;

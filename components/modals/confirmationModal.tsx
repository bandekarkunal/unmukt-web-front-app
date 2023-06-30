import React from "react";
import {
  Dialog,
  DialogContent,
  Theme,
  Button,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../ui-components/buttons/primaryButton";
import PrimaryLoadingButton from "../ui-components/buttons/PrimaryLoadingButton";
import CustomInputField from "../ui-components/customInputField";

interface props {
  openModal: boolean;
  closeModal: any;
  title: string;
  buttonText: string;
  handleOnClickConfirm: any;
  heading?: string;
  loading?: boolean;
  color?: string;
  reasonRequired?: boolean;
  handleReasonInputChange?: any;
}

const ConfirmationModal: React.FunctionComponent<props> = ({
  openModal,
  closeModal,
  title,
  buttonText,
  handleOnClickConfirm,
  heading,
  loading = false,
  color,
  reasonRequired,
  handleReasonInputChange,
}) => {
  return (
    <Dialog
      open={openModal}
      onClose={closeModal}
      sx={{
        maxWidth: "432px",
        width: "100%",
        position: "relative",
        borderRadius: "0 !important",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "19px 34px",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Typography variant={"h6"}>{heading}</Typography>
        <IconButton onClick={closeModal} sx={{ padding: "0" }}>
          <CloseIcon sx={{ color: "#212121" }} />
        </IconButton>
      </Box>
      <DialogContent sx={{ padding: "20px 34px" }}>
        <Typography variant="subtitle2" fontWeight={500} marginBottom={3}>
          {title}
        </Typography>
        {reasonRequired ? (
          <CustomInputField
            fieldName={"reason"}
            label={"Reason"}
            placeholder={"Reason for Rejection"}
            multiline={true}
            rows={4}
            onChange={handleReasonInputChange}
          />
        ) : null}
        <Box
          sx={{
            width: "100%",
            gap: "16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PrimaryLoadingButton
            label={"Cancel"}
            color={"secondary"}
            sx={{ height: "38px !important", width: "100%" }}
            onClick={closeModal}
            loading={loading}
          />
          <PrimaryLoadingButton
            label={buttonText}
            color={color ? color : "neutral"}
            sx={{ height: "38px !important", width: "100%" }}
            onClick={handleOnClickConfirm}
            loading={loading}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;

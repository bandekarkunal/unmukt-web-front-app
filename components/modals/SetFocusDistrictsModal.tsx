import React from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Box,
  Typography,
  Checkbox,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface props {
  openDialog: boolean;
  closeDialog: any;
}

const SetFocusDistrictsModal: React.FunctionComponent<props> = ({
  openDialog,
  closeDialog,
}) => {
  return (
    <Dialog
      open={openDialog}
      onClose={closeDialog}
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
        <Typography variant="h6">Set focus districts</Typography>
        <IconButton onClick={closeDialog} sx={{ padding: "0" }}>
          <CloseIcon sx={{ color: "#212121" }} />
        </IconButton>
      </Box>
      <DialogContent sx={{ padding: 0 }}>
        <Checkbox color={"secondary"} />
      </DialogContent>
    </Dialog>
  );
};

export default SetFocusDistrictsModal;

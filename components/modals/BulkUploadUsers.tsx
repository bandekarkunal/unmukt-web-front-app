import React, { useState, useContext, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  Theme,
  Button,
  Box,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { Context } from "../../context/ContextProvider";
import { SuccessToast, ErrorToast } from "../../utils/toasts";
import PrimaryButton from "../ui-components/buttons/primaryButton";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Link from "next/link";
import { useRouter } from "next/router";
import { postForm } from "@/src/config/axiosClient";
import SelectState from "../user_management/SelectState";

interface props {
  openModal: boolean;
  closeModal: any;
  callbackUsersAPI: any;
}

const Input = styled("input")({
  display: "none",
});

const BulkUploadUsers: React.FunctionComponent<props> = ({
  openModal,
  closeModal,
  callbackUsersAPI,
}) => {
  const context = useContext(Context);
  const GlobalDetailsContext = context?.GlobalDetails;

  const { stateList, rolesList, currentState } = GlobalDetailsContext?.state;

  const [selectedState, setSelectedState] = useState("default");

  const [selectedFile, setSelectedFile] = useState<any>(null);

  const handleStateChangeCallback = (response: any) => {
    setSelectedState(response);
  };

  const handleBulkUploadBtnClick = () => {
    let formData = new FormData();
    formData.set("file", selectedFile);
    formData.set("state_id", selectedState);

    postForm("users/upload", formData).then(
      (res) => {
        setSelectedFile(null);
        setSelectedState("default");
        closeModal();
        SuccessToast("Users have been added successfully");
        callbackUsersAPI();
      },
      (err) => {
        ErrorToast(err.response.data, true);
      }
    );
  };
  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCloseModal = () => {
    setSelectedFile(null);
    currentState?.id
      ? setSelectedState(currentState?.id)
      : setSelectedState("default");
    closeModal();
  };

  useEffect(() => {
    if (currentState?.id) {
      setSelectedState(currentState?.id);
    }
  }, [currentState?.id]);

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
          <CloseIcon sx={{ color: "#212121" }} fontSize={"small"} />
        </IconButton>
        <Typography fontWeight={500} marginBottom={3}>
          Bulk upload of user
        </Typography>
        <Box
          sx={{
            width: "100%",
            border: "1px solid #e0e0e0",
            padding: "7px",
            marginBottom: "8px",
            gap: "16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <label htmlFor="contained-button-file">
            <Input
              id="contained-button-file"
              type="file"
              onChange={handleFileChange}
            />
            <Button
              variant="contained"
              component="span"
              color="secondary"
              sx={{
                textTransform: "none",
                height: "32px !important",
                boxShadow: "none !important",
                borderRadius: "0 !important",
                fontSize: "12px !important",
              }}
            >
              Select File
            </Button>
          </label>
          <Typography sx={{ fontSize: "13px" }}>
            {selectedFile?.name
              ? selectedFile?.name
              : "Please select a .csv file to upload"}
          </Typography>
        </Box>

        <Box mb={2} display={"flex"}>
          <a
            href={`${process.env.NEXT_PUBLIC_API_URL}/samples/users-upload.csv`}
          >
            <Stack direction={"row"} alignItems={"flex-end"}>
              <FileDownloadIcon color={"secondary"} sx={{ fontSize: "18px" }} />
              <Typography
                color={"#212121"}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Download sample file
              </Typography>
            </Stack>
          </a>
        </Box>

        <Box marginBottom={3}>
          <SelectState
            handleChangeCallback={handleStateChangeCallback}
            state_id={selectedState}
          />
        </Box>

        <PrimaryButton
          label={"Upload"}
          sx={{ height: "32px !important", fontSize: "13px" }}
          onClick={handleBulkUploadBtnClick}
        />
      </DialogContent>
    </Dialog>
  );
};

export default BulkUploadUsers;

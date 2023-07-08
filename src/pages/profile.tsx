import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import Head from "next/head";
import React, { useContext, useEffect, useState } from "react";
import { get, postForm } from "../config/axiosClient";
import EditIcon from "@mui/icons-material/Edit";
import EditUserProfile from "@/components/modals/EditUserProfile";
import { Context } from "@/context/ContextProvider";
import { ErrorToast } from "@/utils/toasts";

const Profile = () => {
  const context = useContext(Context);
  const GlobalDetailsContext = context?.GlobalDetails;
  const { userProfile } = GlobalDetailsContext?.state;

  const [openEditModal, setOpenEditModal] = useState(false);

  const handleOpenEditProfile = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditProfile = () => {
    setOpenEditModal(false);
  };

  const getUserProfile = async () => {
    await get(`auth/user/profile`)
      .then((res: any) => {
        GlobalDetailsContext?.dispatch({
          type: "user-profile",
          value: res.data.body,
        });
      })
      .catch((error) => {
        ErrorToast(error.response.data);
      });
  };

  const handleEditProfileImageClick = () => {
    // document.getElementById("profileImage")?.click();
  };

  const onProfileImageInputChange = (event: any) => {
    // let formData = new FormData();
    // formData.set("file", event.target.files[0]);
    // formData.append("foldername", "test");
    // if (event.target.files[0]) {
    // 	postForm("operations/redlof/upload", formData).then((res) => {
    // 	});
    // }
  };

  useEffect(() => {
    getUserProfile();
  }, [openEditModal]);

  return (
    <Box>
      <Head>
        <title>Profile | Milaan</title>
      </Head>
      <Container maxWidth="sm">
        <Card
          sx={{
            textAlign: "center",
            padding: "30px",
            position: "relative",
            marginTop: "36px",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.12)",
          }}
        >
          <Button
            color="secondary"
            variant="outlined"
            startIcon={<EditIcon fontSize="small" />}
            sx={{ position: "absolute", top: "10px", right: "10px" }}
            onClick={handleOpenEditProfile}
          >
            Edit
          </Button>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "100px",
                  border: "2px solid #000",
                  display: "flex",
                  marginTop: "-20px",
                  cursor: "pointer",
                }}
              >
                <IconButton onClick={handleEditProfileImageClick}>
                  <EditIcon
                    sx={{
                      fontSize: "16px",
                    }}
                  />
                </IconButton>
                <input
                  type="file"
                  hidden
                  id={"profileImage"}
                  onChange={onProfileImageInputChange}
                />
              </Box>
            }
          >
            <Avatar
              alt={userProfile?.first_name}
              src={userProfile?.photo}
              sx={{ width: "100px", height: "100px", margin: "10px auto" }}
            />
          </Badge>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: "#000",
              fontWeight: 400,
            }}
          >
            {userProfile?.first_name} {userProfile?.last_name}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: "#000",
              fontWeight: 400,
            }}
          >
            {userProfile?.email}
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: "#000",
              fontWeight: 400,
            }}
          >
            {userProfile?.phone}
          </Typography>
        </Card>
      </Container>
      <EditUserProfile
        handleCloseModal={handleCloseEditProfile}
        openModal={openEditModal}
        userProfile={userProfile}
      />
    </Box>
  );
};

export default Profile;

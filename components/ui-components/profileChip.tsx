import React, { useContext, useState } from "react";
import { Box, Menu, MenuItem, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Context } from "../../context/ContextProvider";
import { useRouter } from "next/router";
import { SuccessToast } from "../../utils/toasts";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProfileChip = () => {
  const context = useContext(Context);
  const router = useRouter();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const GlobalDetailsContext = context?.GlobalDetails;

  const { userProfile } = GlobalDetailsContext?.state;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("redloftoken");
    localStorage.removeItem("currentState");
    SuccessToast("Logged out successfully");
    router.push("/");
  };

  return (
    <>
      <Box
        sx={{
          background: "#fff",
          boxShadow: "0px 4px 4px 0px #0000000A",
          display: "flex",
          borderRadius: "23px",
          padding: "5px",
          cursor: "pointer",
          alignItems: "center",
        }}
        onClick={handleClick}
      >
        {matches ? (
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 500,
              paddingX: "8px",
              color: "#313131",
            }}
          >
            Hi {userProfile?.first_name}
          </Typography>
        ) : null}

        <Box
          sx={{
            width: "26px",
            height: "26px",
            borderRadius: "50%",
            background: "#EAE3F1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/assets/personFemale.svg"
            width={16}
            height={16}
            alt="logo"
          />
        </Box>
      </Box>
      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        <Link href={"/profile"}>
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default ProfileChip;

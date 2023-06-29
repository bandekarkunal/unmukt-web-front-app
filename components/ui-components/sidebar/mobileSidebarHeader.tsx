import React, { useContext } from "react";
import { useTheme, Box, Typography } from "@mui/material";
import { Context } from "../../../context/ContextProvider";
import Image from "next/image";

const MobileSidebarHeader = () => {
  const theme = useTheme();
  const context = useContext(Context);
  const GlobalDetailsContext = context?.GlobalDetails;
  const { userProfile } = GlobalDetailsContext?.state;

  return (
    <Box sx={{ background: theme.palette.primary.main, padding: "16px" }}>
      <Box
        sx={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "#FFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        mb={2}
      >
        <Image
          src="/assets/personFemale.svg"
          width={16}
          height={16}
          alt="logo"
        />
      </Box>
      <Typography variant={"h6"} color={"#fff"}>
        {userProfile?.first_name} {userProfile?.last_name}
      </Typography>
      <Typography color={"#fff"}>{userProfile?.email}</Typography>
    </Box>
  );
};

export default MobileSidebarHeader;

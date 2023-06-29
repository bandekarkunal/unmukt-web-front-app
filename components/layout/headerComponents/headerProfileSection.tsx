import React from "react";
import ProfileChip from "../../ui-components/profileChip";
import { Typography, Box } from "@mui/material";

interface props {
  showHeaderComponents: boolean;
}

const HeaderProfileSection: React.FunctionComponent<props> = ({
  showHeaderComponents,
}) => {
  return (
    <>
      {showHeaderComponents ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <Box sx={{ paddingRight: "8px", display: "flex" }}>
              <NotificationsNoneIcon
                className={classes.notificationIcon}
                fontSize={"small"}
              />
            </Box> */}
          <ProfileChip />
        </Box>
      ) : (
        <Box
          fontSize={"14px"}
          fontWeight={500}
          color={"#313131"}
          display={"inline-block"}
        >
          For any queries contact us at{" "}
          <Typography
            fontSize={"14px"}
            fontWeight={500}
            color={"secondary"}
            display={"inline-block"}
          >
            admin@milaan.org
          </Typography>
        </Box>
      )}
    </>
  );
};

export default HeaderProfileSection;

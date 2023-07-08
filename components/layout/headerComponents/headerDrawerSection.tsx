import React, { useContext } from "react";
import Link from "next/link";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { Context } from "../../../context/ContextProvider";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

interface props {
  showHeaderComponents: boolean;
}

const HeaderDrawerSection: React.FunctionComponent<props> = ({
  showHeaderComponents,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const context = useContext(Context);
  const DrawerContext = context?.DrawerReducer;

  const { open } = DrawerContext?.state;

  const handleDrawerOpen = () => {
    DrawerContext?.dispatch({
      type: "open",
      value: !open,
    });
  };

  return (
    <Box sx={{ display: "flex", gap: "24px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "22px",
          maxWidth: "224px",
          width: "100%",
        }}
      >
        <Box sx={{ order: matches ? 0 : 1, display: "flex" }}>
          <Link href="/home" passHref>
            <Image
              src="/assets/milaanLogo.png"
              width={105}
              height={24}
              alt="logo"
            />
          </Link>
        </Box>
        <Box sx={{ order: matches ? 1 : 0 }}>
          {showHeaderComponents ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                padding: 0,
                paddingLeft: 1,
              }}
            >
              <MenuIcon color={"secondary"} />
            </IconButton>
          ) : null}
        </Box>{" "}
        {/* <Typography variant="h5" sx={{ color: "#7d287d", fontWeight: "700" }}>
          Unmukt
        </Typography> */}
      </Box>
    </Box>
  );
};

export default HeaderDrawerSection;

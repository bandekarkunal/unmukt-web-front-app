import { Box, useTheme } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/ContextProvider";
import StateMenu from "../ui-components/stateMenu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { useRouter } from "next/router";
import {
  fetchStateList,
  fetchUserProfile,
  fetchRolesList,
} from "../../utils/apis/global/globalAPICalls";
import HeaderDrawerSection from "./headerComponents/headerDrawerSection";
import HeaderProfileSection from "./headerComponents/headerProfileSection";
import { checkPathname } from "@/utils/dataModifiers/checkPathname";
const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header = () => {
  const theme = useTheme();
  const router = useRouter();
  const context = useContext(Context);
  const DrawerContext = context?.DrawerReducer;
  const GlobalDetailsContext = context?.GlobalDetails;

  const { open } = DrawerContext?.state;
  const { stateList, rolesList, userProfile, currentState } =
    GlobalDetailsContext?.state;

  const [showHeaderComponents, setShowHeaderComponents] =
    useState<boolean>(false);

  const fetchGlobalDetails = () => {
    if (!stateList.length)
      fetchStateList().then((stateList) => {
        GlobalDetailsContext?.dispatch({
          type: "state-list",
          value: stateList,
        });
      });
    if (!rolesList.length) {
      fetchRolesList().then((rolesList) => {
        GlobalDetailsContext?.dispatch({
          type: "roles-list",
          value: rolesList,
        });
      });
    }
    if (!Object.keys(userProfile).length) {
      fetchUserProfile().then((profileDetails) => {
        GlobalDetailsContext?.dispatch({
          type: "user-profile",
          value: profileDetails,
        });
      });
    }
  };

  useEffect(() => {
    if (showHeaderComponents) {
      fetchGlobalDetails();
    }
  }, [showHeaderComponents]);

  useEffect(() => {
    setShowHeaderComponents(checkPathname(router.pathname));
  }, [router.pathname]);

  return (
    <AppBar
      position={"fixed"}
      open={open}
      sx={{
        backgroundColor: theme.palette.secondary.light,
        padding: "0 16px",
        boxShadow: "rgb(0 0 0 / 3%) 0px 2px 4px 0px",
        borderColor: "rgb(140, 140, 140)",
        width: "100%",
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "56px",
        }}
      >
        <HeaderDrawerSection showHeaderComponents={showHeaderComponents} />

        <HeaderProfileSection showHeaderComponents={showHeaderComponents} />
      </Box>
    </AppBar>
  );
};

export default Header;

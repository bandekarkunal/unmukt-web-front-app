import {
  Theme,
  CSSObject,
  Box,
  Typography,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import DrawerItem from "./drawerItem";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface props {
  open: boolean;
  handleDrawerOpen: any;
  parentItem: any;
  drawerData: any;
  drawerOptionClick: any;
  resetDrawer: any;
}

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  minHeight: "56px !important",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DesktopSidebar: React.FunctionComponent<props> = ({
  open,
  handleDrawerOpen,
  parentItem,
  drawerData,
  drawerOptionClick,
  resetDrawer,
}) => {
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={open} sx={{ zIndex: 0 }}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerOpen}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <List>
        {parentItem?.label ? (
          <DrawerItem
            drawerItem={parentItem}
            drawerItemClick={resetDrawer}
            drawerOpen={open}
            drawerNested={true}
          />
        ) : null}
        {drawerData.map((option: any, index: number) =>
          option?.label ? (
            <DrawerItem
              key={index}
              drawerItem={option}
              drawerItemClick={drawerOptionClick}
              drawerOpen={open}
            />
          ) : option?.type === "separator" ? (
            <Box
              key={index}
              sx={{
                borderTop: "1px solid #e3e3e3",
                marginTop: "16px",
                paddingTop: "16px",
              }}
            ></Box>
          ) : option?.type === "heading" ? (
            <Box px={2.5} mb={1} sx={{ display: open ? "block" : "none" }}>
              <ListItemText
                primary={option?.title}
                sx={{
                  opacity: open ? 1 : 0,
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#616161",
                  textTransform: "uppercase",
                }}
                disableTypography={true}
              />
            </Box>
          ) : null
        )}
      </List>
    </Drawer>
  );
};

export default DesktopSidebar;

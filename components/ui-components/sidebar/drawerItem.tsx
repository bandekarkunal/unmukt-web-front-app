import React, { useEffect } from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

interface props {
  drawerItemClick: any;
  drawerItem: any;
  drawerOpen: boolean;
  drawerNested?: boolean;
}

const DrawerItem: React.FunctionComponent<props> = ({
  drawerItem,
  drawerItemClick,
  drawerOpen,
  drawerNested,
}) => {
  const router = useRouter();
  const theme = useTheme();
  useEffect(() => {}, []);
  return (
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: drawerOpen ? "initial" : "center",
        px: 2.5,
        backgroundColor:
          router.pathname === drawerItem?.link
            ? `${theme.palette.secondary.light} !important`
            : {},
      }}
      onClick={() => drawerItemClick(drawerItem)}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: drawerOpen ? 3 : "auto",
          justifyContent: "center",
        }}
      >
        {drawerNested ? (
          <ArrowBackIcon />
        ) : router?.pathname === drawerItem?.link ? (
          drawerItem?.activeIcon
        ) : (
          drawerItem?.icon
        )}
      </ListItemIcon>
      <ListItemText
        primary={drawerItem?.label}
        sx={{
          opacity: drawerOpen ? 1 : 0,
          fontSize: "13px",
          fontWeight: 560,
          color:
            router.pathname === drawerItem?.link
              ? `${theme.palette.secondary.main} !important`
              : "#616161",
        }}
        disableTypography={true}
      />
    </ListItemButton>
  );
};

export default DrawerItem;

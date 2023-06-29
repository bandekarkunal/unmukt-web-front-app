import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Theme,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Context } from "../../context/ContextProvider";
import { ManageUserRoleSpecific } from "@/utils/dataModifiers/ConditinalRenderingForRoles";

interface props {
  forceSelect?: boolean;
}

const StateMenu: React.FunctionComponent<props> = ({ forceSelect }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const context = useContext(Context);
  const GlobalDetailsContext = context?.GlobalDetails;

  const { stateList, currentState, userProfile } = GlobalDetailsContext?.state;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [disableStateChange, setDisableStateChange] = useState<boolean>(true);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disableStateChange) setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (
    singleState: React.MouseEvent<HTMLMenuElement>
  ) => {
    GlobalDetailsContext.dispatch({
      type: "current-state",
      value: singleState,
    });
    localStorage.setItem("currentState", JSON.stringify(singleState));
    handleMenuClose();
  };

  const selectAllStates = () => {
    GlobalDetailsContext.dispatch({
      type: "current-state",
      value: "All States",
    });
    localStorage.removeItem("currentState");
    handleMenuClose();
  };

  const assignDefaultCurrentState = () => {
    if (localStorage.getItem("currentState")) {
      GlobalDetailsContext?.dispatch({
        type: "current-state",
        value: JSON.parse(localStorage.getItem("currentState") || "{}"),
      });
    }
  };

  useEffect(() => {
    if (
      ManageUserRoleSpecific(
        ["role-admin", "role-program-head", "role-director", "role-tnd"],
        userProfile?.roles?.[0]
      )
    ) {
      setDisableStateChange(false);
    } else {
      setDisableStateChange(true);
    }
    assignDefaultCurrentState();
  }, [userProfile]);

  return (
    <Box sx={{ visibility: matches ? "visible" : "hidden" }}>
      <Button
        color={"inherit"}
        onClick={handleClick}
        sx={{
          textTransform: "none",
          width: matches ? "100%" : "10px !important",
          backgroundColor: `${theme.palette.secondary.main} !important`,
          height: "36px",
          borderRadius: "12px !important",
          display: "flex",
          alignItems: "center",
          color: "#fff !important",
          justifyContent: "space-between !important",
          padding: "0 8px",
          boxShadow: "0px 4px 4px 0px #00000014 !important",
          cursor: disableStateChange ? "unset" : "pointer",
        }}
        disableRipple={disableStateChange}
      >
        <Box sx={{ display: "flex", gap: "8px" }}>
          <img src={"/assets/vectors/state_vector.svg"} />
          <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
            {currentState?.name ? currentState?.name : "All States"}
          </Typography>
        </Box>
        {disableStateChange ? null : <ExpandMoreIcon fontSize={"small"} />}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
        {!forceSelect ? (
          <MenuItem onClick={selectAllStates}>All States</MenuItem>
        ) : null}
        {stateList.map((singleState: any, stateIndex: number) => (
          <MenuItem
            onClick={() => handleMenuItemClick(singleState)}
            key={stateIndex}
          >
            {singleState?.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default StateMenu;

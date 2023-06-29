import { Box, Drawer, List, ListItemText } from "@mui/material";

import React, { useContext } from "react";
import DrawerItem from "./drawerItem";
import MobileSidebarHeader from "./mobileSidebarHeader";

interface props {
  open: boolean;
  handleCloseDrawer: any;
  parentItem: any;
  resetDrawer: any;
  drawerData: any;
  drawerOptionClick: any;
}

const MobileSidebar: React.FunctionComponent<props> = ({
  open,
  handleCloseDrawer,
  parentItem,
  resetDrawer,
  drawerData,
  drawerOptionClick,
}) => {
  return (
    <Drawer open={open} onClose={handleCloseDrawer} sx={{ width: 290 }}>
      <MobileSidebarHeader />
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

export default MobileSidebar;

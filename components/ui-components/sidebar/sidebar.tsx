import { useMediaQuery } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@mui/material/styles";
import { Context } from "../../../context/ContextProvider";
import { sidebarData } from "../../../utils/static/drawerMenuItems";

import DesktopSidebar from "./desktopSidebar";
import MobileSidebar from "./mobileSidebar";

const Sidebar = () => {
  const router = useRouter();
  const context = useContext(Context);
  const DrawerContext = context?.DrawerReducer;
  const GlobalDetailsContext = context?.GlobalDetails;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const { open } = DrawerContext?.state;
  const { userProfile } = GlobalDetailsContext?.state;

  const [drawerData, setDrawerData] = useState<any>([]);

  const [secondaryDrawerData, setSecondaryDrawerData] = useState<any>([]);

  const [parentItem, setParentItem] = useState<any>({});

  // Parameter 'noRoute' is used so that router.push is not executed if page is rendered. Router.push() should only execute if drawer item is clicked.
  const drawerOptionClick = (option: any, noRoute?: boolean) => {
    // If drawer option has a sub menu, replace drawerData with sub menu and rerender drawer component. Also, route user to first link of said menu;
    if (option?.nestedItems?.length) {
      setParentItem(option);
      let tempArr: any = [];
      option?.nestedItems?.forEach((nestedOption: any) => {
        if (nestedOption?.roles?.length) {
          if (
            userProfile?.roles &&
            nestedOption?.roles?.indexOf(userProfile?.roles[0]) !== -1
          ) {
            tempArr.push(nestedOption);
          }
        } else if (nestedOption?.permissions) {
          // TestRun
          let permissionFlag = 0;
          nestedOption.permissions.forEach((permission: any) => {
            if (userProfile?.[permission] === true) {
              permissionFlag++;
            }
          });

          if (
            permissionFlag > 0 ||
            (userProfile?.roles &&
              nestedOption?.role_specific?.indexOf(userProfile?.roles[0]) !==
                -1)
          )
            tempArr.push(nestedOption);

          // if (
          //   (nestedOption?.permissions === "assessor" &&
          //     userProfile?.is_assessor === true) ||
          //   (userProfile?.roles &&
          //     nestedOption?.role_specific?.indexOf(userProfile?.roles[0]) !==
          //       -1)
          // )
          //   tempArr.push(nestedOption);
        } else {
          tempArr.push(nestedOption);
        }
      });
      setDrawerData(tempArr);

      // Should work only if drawer item is clicked and not to refresh.
      if (!noRoute) {
        for (let arrayIndex = 0; arrayIndex < tempArr.length; arrayIndex++) {
          if (tempArr[arrayIndex]?.type === "separator") {
            continue;
          } else {
            if (tempArr?.[arrayIndex]?.nestedItems?.length) {
              drawerOptionClick(tempArr?.[arrayIndex]);
            } else {
              router?.push(tempArr?.[arrayIndex]?.link);
            }
            break;
          }
        }
      }

      return;
    }
    router.push(option?.link);
    if (!matches) {
      handleCloseDrawer();
    }
  };

  const resetDrawer = () => {
    setParentItem({});
    setSecondaryDrawerData([]);
    // setDrawerData(sidebarData);
    router.push("/home");
    initialRenderOfDrawer();
  };

  const handleDrawerOpen = () => {
    DrawerContext?.dispatch({
      type: "open",
      value: !open,
    });
  };

  const highlightDrawerItem = (menuItems: any) => {
    /*
      1. Get current router path.
      2. Loop through sidebar and also nestedLoops.
      3. If link matches with router path, set it's parent as parent label.
      4. Set item as active item.
    */
    menuItems.forEach((drawerItem: any) => {
      if (drawerItem.nestedItems) {
        let pathFound: any = false;
        let nestedFound: any = -1;
        drawerItem.nestedItems.forEach((nestedItem: any) => {
          nestedFound++;
          if (nestedItem.link === router.pathname) {
            drawerOptionClick(drawerItem, true);
            pathFound = true;
          }
        });
        // if (nestedFound > -1 && !pathFound) {
        //   highlightDrawerItem(drawerItem);
        // }
      }
    });
  };

  const initialRenderOfDrawer = () => {
    let tempArr: any = [];
    sidebarData.forEach((option: any) => {
      if (
        userProfile?.roles &&
        option?.roles?.indexOf(userProfile?.roles[0]) !== -1
      ) {
        tempArr.push(option);
      } else if (!option?.roles) {
        tempArr.push(option);
      }
    });
    setDrawerData(tempArr);
  };

  const handleCloseDrawer = () => {
    DrawerContext.dispatch({
      type: "open",
      value: false,
    });
  };

  useEffect(() => {
    if (userProfile?.id) {
      initialRenderOfDrawer();
    }
  }, [userProfile]);

  useEffect(() => {
    highlightDrawerItem(sidebarData);
  }, [userProfile]);

  return matches ? (
    <DesktopSidebar
      open={open}
      handleDrawerOpen={handleDrawerOpen}
      parentItem={parentItem}
      drawerData={drawerData}
      drawerOptionClick={drawerOptionClick}
      resetDrawer={resetDrawer}
    />
  ) : (
    <MobileSidebar
      open={open}
      parentItem={parentItem}
      drawerData={drawerData}
      drawerOptionClick={drawerOptionClick}
      resetDrawer={resetDrawer}
      handleCloseDrawer={handleCloseDrawer}
    />
  );
};

export default Sidebar;

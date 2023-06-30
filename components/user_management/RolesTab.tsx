import React, { useEffect, useState } from "react";
import { Box, Tabs, Tab, Theme, useTheme } from "@mui/material";
import PrimaryButton from "../ui-components/buttons/primaryButton";
import { getRolesForTabs } from "../../utils/dataModifiers";
import { useRouter } from "next/router";
import { listOfRoles } from "@/utils/static/listOfRoles";

let userRole = "manager";

const RolesTab = () => {
  const router = useRouter();
  const theme = useTheme();

  const [tabOption, setTabOption] = React.useState<number | null>(0);
  const [rolesTab, setRolesTab] = React.useState<any>([]);
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleTabChange = (event: React.SyntheticEvent, option: number) => {
    setTabOption(option);
  };

  const manipulateRolesTab = () => {
    setRolesTab(getRolesForTabs(listOfRoles, userRole));
    setTabOption(Number(router.query.roleIndex));
  };

  useEffect(() => {
    setSelectedRole(rolesTab[Number(router.query.roleIndex)]?.label);
  }, [rolesTab]);

  useEffect(() => {
    manipulateRolesTab();
  }, []);

  const handleTabClick = (roleIndex: number, roleLabel: string) => {
    router.replace(
      `${window.location.pathname}?roleIndex=${roleIndex}`,
      undefined,
      {
        shallow: true,
      }
    );
    setSelectedRole(roleLabel);
  };

  return (
    <Box
      sx={{
        padding: "0 30px",
        borderBottom: "1px solid #e0e0e0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Tabs
        value={tabOption}
        onChange={handleTabChange}
        sx={{
          ".MuiTabs-indicator": {
            background: `${theme.palette.secondary.main} !important`,
          },
        }}
      >
        {rolesTab.map((role: any, index: number) => (
          <Tab
            key={role?.id}
            label={role?.label}
            sx={{
              zIndex: 1,
              color: "#616161",
              fontSize: "11px !important",
              fontWeight: `${600} !important`,
              padding: "0px !important",
              marginRight: "16px !important",
              "&	.Mui-selected": {
                color: `${theme.palette.secondary.main} !important`,
              },
            }}
            onClick={() => handleTabClick(index, role?.label)}
          />
        ))}
      </Tabs>

      <PrimaryButton
        onClick={() => {}}
        sx={{ height: "32px", maxWidth: "150px", fontSize: "11px" }}
        label={`Add a ${selectedRole}`}
      />
    </Box>
  );
};

export default RolesTab;

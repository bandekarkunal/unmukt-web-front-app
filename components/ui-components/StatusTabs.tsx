import React, { useEffect, useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Theme,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

interface props {
  tabOptions?: any;
  onTabChange?: any;
  disabled?: any;
  count?: any;
}

// const useStyles = makeStyles((theme: Theme) => ({
//   tabsRoot: {
//     minHeight: "auto !important",
//     height: "32px",
//   },
//   tabIndicator: {
//     height: "100% !important",
//     zIndex: 0,
//     background: `${theme.palette.secondary.main} !important`,
//   },
//   tabRoot: {
//     minHeight: "auto !important",
//     height: "32px",
//     zIndex: 1,
//     color: "#616161",
//     fontSize: "11px !important",
//     fontWeight: `${600} !important`,
//     padding: "0px 16px !important",
//     borderTop: "1px solid #e0e0e0",
//     borderBottom: "1px solid #e0e0e0",
//     borderLeft: "1px solid #e0e0e0",
//   },
//   lastTab: {
//     minHeight: "auto !important",
//     height: "32px",
//     zIndex: 1,
//     color: "#616161",
//     fontSize: "11px !important",
//     fontWeight: `${600} !important`,
//     padding: "0px 16px !important",
//     borderTop: "1px solid #e0e0e0",
//     borderBottom: "1px solid #e0e0e0",
//     borderLeft: "1px solid #e0e0e0",
//     borderRight: "1px solid #e0e0e0",
//   },
//   selected: {
//     color: "#fff !important",
//   },
// }));

const data = [
  {
    label: "ALL",
    value: "",
  },
  { label: "ACTIVE", value: "active" },
  { label: "INACTIVE", value: "inactive" },
];

const StatusTabs: React.FunctionComponent<props> = ({
  tabOptions = data,
  onTabChange,
  disabled,
  count,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();
  const [tabOption, setTabOption] = React.useState<number | null>(0);

  const handleTabChange = (event: React.SyntheticEvent, option: number) => {
    if (onTabChange) {
      onTabChange(tabOptions[option].value);
    }
    setTabOption(option);
  };

  useEffect(() => {
    if (router.query?.tab) {
      setTabOption(Number(router.query?.tab));
    }
  }, [router]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "32px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#F9F9F9",
          width: matches ? "auto" : "100%",
        }}
      >
        <Tabs
          value={tabOption}
          onChange={handleTabChange}
          sx={{
            minHeight: "auto !important",
            height: "32px",
            ".MuiTabs-indicator": {
              height: "100% !important",
              zIndex: 0,
              background: `${theme.palette.secondary.main} !important`,
            },
          }}
          variant={matches ? "scrollable" : "fullWidth"}
          scrollButtons="auto"
        >
          {tabOptions?.map((singleTab: any, index: number) => (
            <Tab
              disabled={disabled ? disabled : false}
              key={index}
              label={`${singleTab?.label} ${
                count && tabOption == index ? `(${count})` : ""
              }`}
              sx={{
                minHeight: "auto !important",
                height: "32px",
                zIndex: 1,
                color: "#616161",
                fontSize: "11px !important",
                fontWeight: `${600} !important`,
                padding: "0px 16px !important",
                borderTop: "1px solid #e0e0e0",
                borderBottom: "1px solid #e0e0e0",
                borderLeft: "1px solid #e0e0e0",
                borderRight:
                  index + 1 === tabOptions?.length ? "1px solid #e0e0e0" : {},
                "&	.Mui-selected": { color: "#ffffff" },
              }}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default StatusTabs;

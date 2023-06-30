import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import MonitoringStatistics from "./monitoringStatistics";
import MonitoringData from "./monitoringData";

interface props {
  colorStatistics?: any;
  assessmentStatistics?: any;
  is_assessor?: boolean;
}

const MneTable: React.FunctionComponent<props> = ({
  colorStatistics,
  assessmentStatistics,
  is_assessor,
}) => {
  return (
    <Box
      sx={{
        borderRadius: "4px",
        boxShadow: "0px 1px 4px -1px rgba(0, 0, 0, 0.46)",
      }}
    >
      <Grid container>
        <Grid item xs={12} lg={6} sx={{ borderRight: "1px solid #e0e0e0" }}>
          <Box
            sx={{
              borderBottom: "1px solid #e0e0e0",
              backgroundColor: "#fcfcfc",
              height: "54px",
              display: "flex",
              alignItems: "center",
              padding: "0 36px",
              justifyContent: "space-between",
              borderRadius: "4px 4px 0 0",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: "#7d398d",
                fontWeight: 700,
                lineHeight: 1.5,
              }}
            >
              ASSESSMENT OVERVIEW DETAILS
            </Typography>
          </Box>
          <MonitoringData
            assessmentStatistics={assessmentStatistics}
            is_assessor={is_assessor}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              borderBottom: "1px solid #e0e0e0",
              backgroundColor: "#fcfcfc",
              height: "54px",
              display: "flex",
              alignItems: "center",
              padding: "0 36px",
              justifyContent: "space-between",
              borderRadius: "4px 4px 0 0",
            }}
          >
            <Typography
              sx={{ fontSize: "12px", color: "#7d398d", fontWeight: 700 }}
            >
              APPLICATION MONITORING STATISTICS
            </Typography>
          </Box>
          <MonitoringStatistics colorStatistics={colorStatistics} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MneTable;

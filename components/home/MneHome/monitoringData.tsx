import React, { useEffect } from "react";
import { Box, Typography, Grid, useMediaQuery, useTheme } from "@mui/material";
import { CatchingPokemonSharp } from "@mui/icons-material";

interface props {
  assessmentStatistics: any;
  is_assessor?: boolean;
}

const MonitoringData: React.FunctionComponent<props> = ({
  assessmentStatistics = [],
  is_assessor,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid container sx={{ height: "calc(100% - 54px)" }}>
      {assessmentStatistics?.length &&
        assessmentStatistics?.map((option: any, index: number) => (
          <Grid
            xs={4}
            sx={{
              padding: "16px",
              borderBottom: "1px solid #f2f2f2",
              textAlign: `${matches ? "left" : "center"}`,
            }}
            key={index}
          >
            <Typography
              sx={{ fontSize: "12px", color: "#616161", fontWeight: 560 }}
            >
              {option?.key}
            </Typography>
            <Typography
              sx={{ fontSize: "24px", color: "#391439", fontWeight: 560 }}
            >
              {option?.value}
            </Typography>
          </Grid>
        ))}
    </Grid>
  );
};

export default MonitoringData;

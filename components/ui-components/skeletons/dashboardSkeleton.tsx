import React from "react";
import { Box, Grid, Skeleton } from "@mui/material";

const DashboardSkeleton = () => {
  return (
    <Box
      sx={{
        borderRadius: "4px",
        boxShadow: "0px 1px 4px -1px rgba(0, 0, 0, 0.46)",
      }}
    >
      <Grid container>
        <Grid item xs={6} sx={{ borderRight: "1px solid #e0e0e0" }}>
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
            <Skeleton width={200} height={36} variant="text" />
          </Box>
        </Grid>
        <Grid item xs={6}>
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
            <Skeleton width={200} height={36} variant="text" />
          </Box>
        </Grid>
        <Grid xs={6} sx={{ borderRight: "1px solid #e0e0e0" }}>
          <Box padding={"16px 36px"}>
            <Skeleton height={100} variant="rectangular" />
          </Box>
        </Grid>
        <Grid xs={6}>
          <Box padding={"16px 36px"}>
            <Skeleton height={100} variant="rectangular" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardSkeleton;

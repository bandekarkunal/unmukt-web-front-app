import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";

interface props {
  colorStatistics: any;
}
const globalColors = [
  {
    color: "#4caf50",
    status: "successful",
    target: 346,
  },
  {
    color: "#ef5350",
    status: "rejected",
    target: 6,
  },
  {
    color: "#ffc000",
    status: "corrected",
    target: 25,
  },
];

const MonitoringStatistics: React.FunctionComponent<props> = ({
  colorStatistics = [],
}) => {

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "16px",
          maxWidth: "75%",
          margin: "auto",
          height: "calc(100% - 54px)",
        }}
      >
        {colorStatistics.map((color: any, index: number) => (
          <Box sx={{ textAlign: "center", margin: "auto 0" }} key={index}>
            <Box
              key={index}
              sx={{
                width: "36px",
                height: "36px",
                borderRadius: "12px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.08)",
                background: color?.color,
                cursor: "pointer",
                border: color?.selected ? "1px solid black" : "none",
                margin: "0 auto 16px",
              }}
            ></Box>
            <Typography
              sx={{
                fontSize: "12px",
                color: "#616161",
                textTransform: "uppercase",
              }}
            >
              {color?.key}
            </Typography>
            <Typography sx={{ fontSize: "24px", color: `${color?.color}` }}>
              {color?.value}
            </Typography>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default MonitoringStatistics;

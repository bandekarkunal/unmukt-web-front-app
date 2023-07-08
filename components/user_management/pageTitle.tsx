import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

interface props {
  route: string;
  title: string;
  subTitle?: string;
  backgroundColor?: string;
  sx?: any;
  children?: React.ReactNode;
}

const PageTitle: React.FunctionComponent<props> = ({
  route,
  title,
  subTitle,
  backgroundColor,
  sx,
  ...props
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Box
        sx={{
          padding: `${matches ? "20px 30px" : "20px 16px"}`,
          borderBottom: "1px solid #e0e0e0",
          background: backgroundColor ? backgroundColor : "#fcfcfc",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: matches ? "row" : "column",
            justifyContent: "space-between",
            ...sx,
          }}
        >
          <Box>
            <Typography
              fontSize={"10px"}
              fontWeight={560}
              color={"#919191"}
              marginBottom={2}
            >
              {route}
            </Typography>

            <Typography
              color={"#391439"}
              fontSize={matches ? "31px" : "18px"}
              variant={"h1"}
              fontWeight={700}
              marginBottom={matches ? 1 : 0}
            >
              {title}
            </Typography>
            {matches ? (
              <Typography color={"#414141"} fontSize={"13px"} fontWeight={400}>
                {subTitle}
              </Typography>
            ) : null}
          </Box>
          {matches ? <Box>{props.children}</Box> : null}
        </Box>
      </Box>
      {matches ? null : props?.children ? (
        <Box p={"20px 16px"} borderBottom={"1px solid #e0e0e0"}>
          {props.children}
        </Box>
      ) : null}
    </>
  );
};

export default PageTitle;

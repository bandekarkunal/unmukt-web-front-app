import { Box, Card, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "./buttons/primaryButton";

interface props {
  title: string;
  subtitle: string;
  buttonLabel?: string;
  buttonClick?: any;
}

const EmptyState: React.FunctionComponent<props> = ({
  title,
  subtitle,
  buttonLabel,
  buttonClick,
}) => {
  return (
    <Card
      sx={{
        boxShadow: "none",
        border: "1px solid #EFEFEF",
        backgroundColor: "#FCFCFC",
        padding: "32px 12px",
        textAlign: "center",
      }}
    >
      <Typography
        component="h5"
        variant="body1"
        fontSize="1.125rem"
        color="#391439"
      >
        {title}
      </Typography>
      <Typography
        color="#414141"
        component="h5"
        variant="body1"
        fontSize="0.8125rem"
        mb={2}
        mt={0.5}
      >
        {subtitle}
      </Typography>
      {buttonLabel ? (
        <PrimaryButton
          label={buttonLabel}
          variant="contained"
          onClick={buttonClick}
          sx={{
            textTransform: "uppercase !important",
            height: "32px !important",
            fontSize: "0.6875rem !important",
          }}
        />
      ) : null}
    </Card>
  );
};

export default EmptyState;

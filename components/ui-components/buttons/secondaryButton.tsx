import React from "react";
import { Button, Theme, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

type VariantProps = "text" | "outlined" | "contained" | undefined;

interface SecondaryBtnProps {
  label: string;
  onClick?: any;
  sx?: any;
  icon?: boolean;
  disabled?: boolean;
  variant?: VariantProps;
  endIcon?: any;
  startIcon?: any;
}

const SecondaryButton: React.FunctionComponent<SecondaryBtnProps> = ({
  label,
  onClick,
  sx,
  icon,
  disabled,
  variant,
  startIcon,
  endIcon,
}) => {
  const theme = useTheme();
  return (
    <Button
      sx={{
        width: "100%",
        height: "48px",
        borderRadius: "0px",
        boxShadow: "none",
        textTransform: "none",
        fontWeight: 500,
        position: "relative",
        backgroundColor: theme.palette.secondary.light,
        color: theme.palette.secondary.main,
        "&:hover": {
          color: theme.palette.secondary.main,
          backgroundColor: theme.palette.secondary.light,
        },
        ...sx,
      }}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      endIcon={endIcon ? endIcon : null}
      startIcon={startIcon ? startIcon : null}
    >
      {label}
    </Button>
  );
};

export default SecondaryButton;

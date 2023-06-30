import { LoadingButton } from "@mui/lab";
import { Theme } from "@mui/material";
import React from "react";

type VariantProps = "text" | "outlined" | "contained" | undefined;

interface props {
  label: string;
  loading: boolean;
  onClick?: any;
  sx?: any;
  icon?: boolean;
  disabled?: boolean;
  variant?: VariantProps;
  color?: any;
}

const PrimaryLoadingButton: React.FunctionComponent<props> = ({
  label,
  loading,
  onClick,
  sx,
  icon,
  disabled,
  color,
  variant,
}) => {
  return (
    <LoadingButton
      variant={variant ? variant : "contained"}
      color={color ? color : "secondary"}
      onClick={onClick}
      type="submit"
      sx={{
        height: "48px",
        borderRadius: "0px",
        boxShadow: "none !important",
        textTransform: "none",
        fontWeight: 500,
        position: "relative",
        ...sx,
      }}
      disabled={disabled}
      loading={loading ? loading : false}
    >
      {label}
    </LoadingButton>
  );
};

export default PrimaryLoadingButton;

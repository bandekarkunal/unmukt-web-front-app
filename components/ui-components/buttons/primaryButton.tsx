import { Button, Theme, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";

type VariantProps = "text" | "outlined" | "contained" | undefined;

interface PrimaryButtonProps {
  label: string;
  onClick?: any;
  sx?: any;
  icon?: boolean;
  disabled?: boolean;
  variant?: VariantProps;
  color?: any;
  chevron?: boolean;
  editIocn?: boolean;
  component?: any;
  startIcon?: any;
  customIcon?: any;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onClick,
  sx,
  icon,
  disabled,
  variant,
  color,
  startIcon,
  chevron,
  editIocn,
  component,
  customIcon,
}) => {
  return (
    <Button
      startIcon={startIcon ? startIcon : null}
      variant={variant ? variant : "contained"}
      onClick={onClick ? onClick : null}
      color={color ? color : "secondary"}
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
      component={component ? component : null}
    >
      {editIocn && <EditIcon fontSize={"small"} sx={{ mr: 1 }} />}

      {variant === "text" ? (
        <Typography
          fontSize={"14px"}
          fontWeight={500}
          sx={{ textDecoration: "underline" }}
        >
          {label}
        </Typography>
      ) : (
        <>
          {customIcon} {label}
        </>
      )}
      {icon && (
        <ArrowForwardIcon
          sx={{
            fontSize: "20px",
            position: "absolute",
            right: "10px",
          }}
        />
      )}
      {chevron && <ExpandMoreIcon fontSize={"small"} />}
    </Button>
  );
};

export default PrimaryButton;

import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { InputLabel, Theme } from "@mui/material";

interface InputFieldProps {
  formik?: any;
  label?: any;
  fieldName: any;
  helperText?: any;
  error?: any;
  required?: boolean;
  value?: any;
  type?: string;
  multiline?: boolean;
  rows?: number;
  disabled?: boolean;
  onChange?: any;
  max?: any;
  placeholder?: string;
  endAdornment?: any;
  sx?: any;
  startAdornment?: any;
}

// const useStyles = makeStyles((theme: Theme) => ({
//   inputField: {
//     height: "48px",
//     minHeight: "auto",
//     width: "100%",
//     borderRadius: "0 !important",
//   },
//   inputLabel: {
//     fontSize: "13px !important",
//     color: "#495057 !important",
//     fontWeight: `${500} !important`,
//     marginBottom: "8px",
//   },
//   outlinedInput: {
//     minHeight: "auto",
//     height: "48px",
//     fontSize: "15px !important",
//     color: "#495057",
//     borderRadius: "0 !important",
//     paddingRight: "0 !important",
//   },
//   multilineOutline: {
//     padding: "8px",
//     fontSize: "15px !important",
//     borderRadius: "0 !important",
//   },
//   multilineInput: {},
// }));

const CustomInputField: React.FC<InputFieldProps> = ({
  formik,
  label,
  fieldName,
  error,
  helperText,
  required,
  value,
  type,
  multiline,
  rows,
  disabled,
  onChange,
  max,
  placeholder,
  endAdornment,
  sx,
  startAdornment,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Box
      sx={{
        margin: "0 0 16px",
        ...sx,
      }}
    >
      {label ? (
        <InputLabel
          htmlFor={fieldName}
          sx={{
            fontSize: "13px !important",
            color: "#495057 !important",
            fontWeight: `${500} !important`,
            marginBottom: "8px",
          }}
        >
          {label}{" "}
          {required && (
            <Typography component="span" color={"red"}>
              *
            </Typography>
          )}
        </InputLabel>
      ) : null}
      <TextField
        fullWidth
        variant="outlined"
        id={fieldName}
        name={fieldName}
        disabled={disabled}
        error={error}
        type={type}
        placeholder={placeholder}
        value={value}
        multiline={multiline ? multiline : false}
        helperText={helperText}
        rows={multiline ? rows : 1}
        onChange={formik ? formik.handleChange : handleInputChange}
        InputProps={{
          // classes: {
          //   root: multiline ? classes.multilineOutline : classes.outlinedInput,
          // }
          //   outlinedInput: {
          //     minHeight: "auto",
          //     height: "48px",
          //     fontSize: "15px !important",
          //     color: "#495057",
          //     borderRadius: "0 !important",
          //     paddingRight: "0 !important",
          //   },
          //   multilineOutline: {
          //     padding: "8px",
          //     fontSize: "15px !important",
          //     borderRadius: "0 !important",
          //   },

          inputProps: { max: max },
          endAdornment: endAdornment,
          startAdornment: startAdornment,
        }}
        sx={{
          height: multiline ? "" : "48px",
          minHeight: multiline ? "" : "auto",
          width: multiline ? "" : "100%",
          borderRadius: multiline ? "" : "0 !important",
          ...sx,
        }}
      />
    </Box>
  );
};

export default CustomInputField;

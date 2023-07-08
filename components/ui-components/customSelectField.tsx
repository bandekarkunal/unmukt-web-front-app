import { Box, SelectChangeEvent, Theme, Select } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

interface props {
  formik?: any;
  label?: any;
  fieldName: any;
  helperText?: any;
  error?: any;
  required: boolean;
  data?: any;
  value?: any;
  onClick?: any;
  placeholder?: string;
  defaultValue?: any;
  onChange?: any;
  valueKey: string;
  disabled?: boolean;
  showApplicationID?: boolean;
  displayValueKey?: any;
  multiple?: boolean;
}

const CustomSelectField: React.FC<props> = ({
  formik,
  label,
  fieldName,
  error,
  placeholder,
  helperText,
  required,
  data,
  onClick,
  value,
  onChange,
  valueKey,
  disabled,
  showApplicationID,
  displayValueKey,
  multiple,
}) => {
  const handleSelectChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };
  return (
    <Box
      sx={{
        margin: "0 0 16px",
      }}
    >
      {label ? (
        <InputLabel
          htmlFor={fieldName}
          sx={{
            ".MuiInputLabel-root	": {
              fontSize: "13px !important",
              color: "#495057 !important",
              fontWeight: `${500} !important`,
              marginBottom: "8px",
            },
          }}
        >
          <strong
            style={{
              fontWeight: 560,
            }}
          >
            {label}{" "}
          </strong>
          {required && (
            <span
              style={{
                color: "red",
              }}
            >
              {" "}
              *
            </span>
          )}
        </InputLabel>
      ) : null}
      <Select
        fullWidth
        sx={{
          "	.MuiSelect-outlined": {
            minHeight: "auto",
            height: "48px",
            fontSize: "15px !important",
            color: "#495057",
            borderRadius: "0 !important",
          },
          "	.MuiOutlinedInput-input": {
            height: "48px",
            minHeight: "auto",
            width: "100%",
            borderRadius: "0 !important",
          },
        }}
        multiple={multiple ? multiple : false}
        variant="outlined"
        id={fieldName}
        name={fieldName}
        onClick={onClick}
        value={value}
        onChange={formik ? formik.handleChange : handleSelectChange}
        error={error}
        disabled={disabled}
      >
        <MenuItem value={"default"} disabled>
          {placeholder}
        </MenuItem>
        {data?.map((item: any, index: number) => (
          <MenuItem value={item[valueKey]} key={index}>
            {displayValueKey?.length
              ? item[displayValueKey]
              : item?.name
              ? item?.name
              : item?.first_name + " " + item?.last_name}{" "}
            {showApplicationID ? `(${item?.application_id})` : null}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default CustomSelectField;

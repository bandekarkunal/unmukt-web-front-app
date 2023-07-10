import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { InputLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface props {
  label?: string;
  getDate?: any;
  defaultDate?: any;
  required?: boolean;
  maxDate?: any;
  minDate?: any;
}

const CustomDatePicker: React.FunctionComponent<props> = ({
  label,
  getDate,
  defaultDate,
  required,
  maxDate,
  minDate,
}) => {
  const [value, setValue] = useState<Date | null>(null);
  useEffect(() => {
    if (defaultDate) {
      setValue(defaultDate);
    }
  }, [defaultDate]);

  return (
    <Box sx={{ marginBottom: "16px" }}>
      {label ? (
        <InputLabel
          sx={{
            fontSize: "13px",
            color: "#495057",
            marginBottom: "8px",
            fontWeight: 500,
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
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            getDate(newValue);
          }}
          maxDate={maxDate}
          minDate={minDate}
          inputFormat={"DD/MM/yyyy"}
          renderInput={({ InputProps, inputProps, inputRef }) => (
            <TextField
              fullWidth
              ref={inputRef}
              inputProps={inputProps}
              InputProps={{
                ...InputProps,
                height: "48px",
                borderRadius: "0",
              }}
            />
          )}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default CustomDatePicker;

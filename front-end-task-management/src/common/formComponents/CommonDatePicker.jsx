import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// ------------------------------------------------------------------------------------------

const CommonDatePicker = ({
  label,
  name,
  required,
  id,
  margin,
  value,
  error,
  helperText,
  fullWidth,
  onChange,
  ...others
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label={label}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          slotProps={{
            textField: {
              fullWidth: fullWidth,
              margin: margin,
              required: required,
              error: error,
              helperText: helperText,
            },
          }}
          {...others}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default CommonDatePicker;

import { TextField } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

// ------------------------------------------------------------

const useStyles = makeStyles((theme) => ({
  root: {
    "& .css-1wc848c-MuiFormHelperText-root": {
      fontFamily: "Arial",
      fontSize: "0.8rem",
      fontWeight: 200,
      color: "red",
    },
  },
}));
// --------------------------------------------------------------------------------------
const CommonTextField = ({
  type,
  variant,
  margin,
  required,
  fullWidth,
  autoComplete,
  value,
  onChange,
  label,
  name,
  id,
  errors,
  onBlur,
  helperText,
  ...others
}) => {
  const classes = useStyles();
  return (
    <>
      <TextField
        type={type}
        variant={variant}
        margin={margin}
        required={required}
        fullWidth={fullWidth}
        label={label}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        errors={errors}
        helperText={helperText}
        className={classes.root}
        onBlur={onBlur}
        {...others}
      />
    </>
  );
};

export default CommonTextField;

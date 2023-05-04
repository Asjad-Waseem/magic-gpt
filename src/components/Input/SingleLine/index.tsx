import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { InputFieldProps } from "./types";

const InputField: React.FC<InputFieldProps> = ({
  fieldWidth,
  fieldType,
  fieldValue,
  fieldDefaultValue,
  fieldPlaceholder,
  fieldError,
  fieldLabel,
  fieldHelperText,
  onChange,
  inputFieldProps,
}) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          width: fieldWidth,
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        type={fieldType}
        error={fieldError}
        id={
          fieldType === "text"
            ? "standard-error-helper-text"
            : fieldType === "password"
            ? "standard-password-input"
            : ""
        }
        variant="standard"
        label={fieldLabel}
        value={fieldValue}
        defaultValue={fieldDefaultValue}
        placeholder={fieldPlaceholder}
        helperText={fieldHelperText}
        onChange={onChange}
        autoComplete={fieldType === "password" ? "current-password" : ""}
        InputProps={inputFieldProps}
      />
    </Box>
  );
};

export default InputField;

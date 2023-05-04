import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { MultilineTextFieldI } from "./types";

const MultilineTextField: React.FC<MultilineTextFieldI> = ({
  fieldWidth,
  fieldType,
  fieldValue,
  fieldPlaceholder,
  fieldError,
  fieldLabel,
  fieldHelperText,
  onChange,
  inputFieldProps,
  rows,
  defaultValue,
}) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: fieldWidth },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        type={fieldType}
        error={fieldError}
        id="outlined-multiline-static"
        label={fieldLabel}
        multiline
        rows={rows}
        defaultValue={defaultValue}
        onChange={onChange}
        helperText={fieldHelperText}
        value={fieldValue}
        InputProps={inputFieldProps}
        placeholder={fieldPlaceholder}
      />
    </Box>
  );
};
export default MultilineTextField;

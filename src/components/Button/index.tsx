import React from "react";

import { Button } from "@mui/material";
import { ButtonI } from "./types";

export const ButtonComponent: React.FC<ButtonI> = ({
  title,
  handleClick,
  buttonStyling,
  isButtonDisabled,
}) => {
  return (
    <Button
      onClick={handleClick}
      sx={buttonStyling}
      disabled={isButtonDisabled}
    >
      {title}
    </Button>
  );
};

export default ButtonComponent;

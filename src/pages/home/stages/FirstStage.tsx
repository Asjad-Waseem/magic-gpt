import { useState } from "react";

import Box from "@mui/material/Box";
import InputField from "components/Input/SingleLine";
import ButtonComponent from "components/Button";

import { useAppDispatch } from "redux/hooks";
import { updateAIName, updateStepNo } from "redux/slices/home";

const FirstStage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const [aIAgentsName, setAIAgentsName] = useState<string>("");

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
      }}
    >
      <h2>Step 1/4</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
          width: "60%",
        }}
      >
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>
          Enter the name of your AI and its role below
        </p>
        <InputField
          fieldWidth="100%"
          fieldType="text"
          fieldValue={aIAgentsName}
          fieldPlaceholder="AI Agent's Name"
          onChange={(e) => setAIAgentsName(e?.target?.value)}
        />
      </div>
      <ButtonComponent
        buttonStyling={{
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: "20px",
          color: "red",
        }}
        title="Cancel"
        handleClick={() => dispatch(updateStepNo(0))}
      />
      <ButtonComponent
        buttonStyling={{
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: "20px",
          color: "black",
        }}
        title="Previous"
        handleClick={() => dispatch(updateStepNo(0))}
      />
      <ButtonComponent
        buttonStyling={{
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
        title="Next"
        handleClick={() => {
          dispatch(updateStepNo(2));
          dispatch(updateAIName(aIAgentsName));
        }}
        isButtonDisabled={aIAgentsName?.length === 0}
      />
    </Box>
  );
};

export default FirstStage;

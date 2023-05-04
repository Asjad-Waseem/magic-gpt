import { useState } from "react";

import Box from "@mui/material/Box";
import MultilineTextField from "components/Input/MultiLine";
import ButtonComponent from "components/Button";

import { useAppDispatch, useAppSelector } from "redux/hooks";
import { updateAIRole, updateStepNo, aIName } from "redux/slices/home";

const SecondStage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const agentsName = useAppSelector(aIName);

  const [aIAgentsRole, setAIAgentsRole] = useState<string>("");

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
      }}
    >
      <h2>Step 2/4</h2>
      <h3 style={{ marginTop: "20px", textTransform: "uppercase" }}>
        {agentsName}
      </h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>
          Describe your AI's role
        </p>
        <MultilineTextField
          fieldWidth="100%"
          fieldType="text"
          fieldValue={aIAgentsRole}
          fieldPlaceholder="Mention your AI Assistant's role..."
          onChange={(e) => setAIAgentsRole(e?.target?.value)}
          rows={5}
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
        handleClick={() => dispatch(updateStepNo(1))}
      />
      <ButtonComponent
        buttonStyling={{
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
        title="Next"
        handleClick={() => {
          dispatch(updateStepNo(3));
          dispatch(updateAIRole(aIAgentsRole));
        }}
        isButtonDisabled={aIAgentsRole?.length === 0}
      />
    </Box>
  );
};

export default SecondStage;

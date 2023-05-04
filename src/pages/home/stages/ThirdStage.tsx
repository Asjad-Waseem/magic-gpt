import { useState } from "react";

import Box from "@mui/material/Box";
import MultilineTextField from "components/Input/MultiLine";
import ButtonComponent from "components/Button";

import { useAppDispatch, useAppSelector } from "redux/hooks";
import { updateAIGoals, updateStepNo, aIName } from "redux/slices/home";

const ThirdStage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const agentsName = useAppSelector(aIName);

  const [aIAgentsGoal1, setAIAgentsGoal1] = useState<string>("");
  const [aIAgentsGoal2, setAIAgentsGoal2] = useState<string>("");
  const [aIAgentsGoal3, setAIAgentsGoal3] = useState<string>("");
  const [aIAgentsGoal4, setAIAgentsGoal4] = useState<string>("");
  const [aIAgentsGoal5, setAIAgentsGoal5] = useState<string>("");

  const aIAgentsGoals = {
    aIAgentsGoal1,
    aIAgentsGoal2,
    aIAgentsGoal3,
    aIAgentsGoal4,
    aIAgentsGoal5,
  };

  const nonNullAIAgentsGoals = Object.fromEntries(
    Object.entries(aIAgentsGoals).filter(
      ([_, value]) => value !== null && value !== undefined && value !== ""
    )
  );

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
      }}
    >
      <h2>Step 3/4</h2>
      <h3 style={{ marginTop: "20px", textTransform: "uppercase" }}>
        {agentsName}
      </h3>
      <p
        style={{
          marginTop: "20px",
          marginBottom: "20px",
          fontSize: "18px",
          fontWeight: "700",
        }}
      >
        Enter up to 5 goals for your AI
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>Goal No. 1</p>
        <MultilineTextField
          fieldWidth="100%"
          fieldType="text"
          fieldValue={aIAgentsGoal1}
          fieldPlaceholder="Mention your AI Assistant's first goal..."
          onChange={(e) => setAIAgentsGoal1(e?.target?.value)}
          rows={5}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>Goal No. 2</p>
        <MultilineTextField
          fieldWidth="100%"
          fieldType="text"
          fieldValue={aIAgentsGoal2}
          fieldPlaceholder="Mention your AI Assistant's second goal..."
          onChange={(e) => setAIAgentsGoal2(e?.target?.value)}
          rows={5}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>Goal No. 3</p>
        <MultilineTextField
          fieldWidth="100%"
          fieldType="text"
          fieldValue={aIAgentsGoal3}
          fieldPlaceholder="Mention your AI Assistant's third goal..."
          onChange={(e) => setAIAgentsGoal3(e?.target?.value)}
          rows={5}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>Goal No. 4</p>
        <MultilineTextField
          fieldWidth="100%"
          fieldType="text"
          fieldValue={aIAgentsGoal4}
          fieldPlaceholder="Mention your AI Assistant's fourth goal ..."
          onChange={(e) => setAIAgentsGoal4(e?.target?.value)}
          rows={5}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>Goal No. 5</p>
        <MultilineTextField
          fieldWidth="100%"
          fieldType="text"
          fieldValue={aIAgentsGoal5}
          fieldPlaceholder="Mention your AI Assistant's fifth goal..."
          onChange={(e) => setAIAgentsGoal5(e?.target?.value)}
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
        handleClick={() => dispatch(updateStepNo(2))}
      />
      <ButtonComponent
        buttonStyling={{
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
        title="Next"
        handleClick={() => {
          dispatch(updateStepNo(4));
          // @ts-ignore
          dispatch(updateAIGoals(nonNullAIAgentsGoals));
        }}
        isButtonDisabled={
          aIAgentsGoal1?.length === 0 &&
          aIAgentsGoal2?.length === 0 &&
          aIAgentsGoal3?.length === 0 &&
          aIAgentsGoal4?.length === 0 &&
          aIAgentsGoal5?.length === 0
        }
      />
    </Box>
  );
};

export default ThirdStage;

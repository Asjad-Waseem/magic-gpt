import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import InputField from "components/Input/SingleLine";
import ButtonComponent from "components/Button";

import { useAppDispatch, useAppSelector } from "redux/hooks";
import { updateStepNo, aIName, aIGoals } from "redux/slices/home";

const FourthStage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const agentsName = useAppSelector(aIName);
  const agentGoals = useAppSelector(aIGoals);

  const agentGoalsArr = Object.entries(agentGoals);
  const agentsGoalsArrLength = agentGoalsArr?.length;

  const [agentGoalNo, setAgentGoalNo] = useState(0);
  const [input01, setInput01] = useState<string>("");
  const [input02, setInput02] = useState<string>("");
  const [input03, setInput03] = useState<string>("");
  const [input04, setInput04] = useState<string>("");
  const [input05, setInput05] = useState<string>("");
  const [err, setErr] = useState<string>("");

  const aIAgentsThoughts = `These are your ${agentsName} agent's thoughts...`;
  const reasoning = "This is the reasoning for the goal...";
  const plan = [
    "text 01 goes in here...",
    "text 02 goes in here...",
    "text 03 goes in here...",
    "text 04 goes in here...",
    "text 05 goes in here...",
  ];
  const criticism = "Criticism should be added here...";
  const nextAction = `COMMAND = do_nothing ARGUMENTS = {} Enter 'y' to authorize commmand, 'y -N' to run N continous commands, 'n' to exit program, or enter feedback for ${agentsName} AI Assistant...`;
  const isConfirmBtnDisbaled =
    (input01?.length === 0 &&
      input02?.length === 0 &&
      input03?.length === 0 &&
      input04?.length === 0 &&
      input05?.length === 0) ||
    (agentGoalNo === 0 && input01?.length === 0) ||
    (agentGoalNo === 1 && input02?.length === 0) ||
    (agentGoalNo === 2 && input03?.length === 0) ||
    (agentGoalNo === 3 && input04?.length === 0) ||
    (agentGoalNo === 4 && input05?.length === 0);
  err?.length > 0;

  useEffect(() => {
    if (agentGoalNo === agentsGoalsArrLength) {
      dispatch(updateStepNo(5));
    }
  }, [agentGoalNo]);

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
      }}
    >
      <h2>Step 4/4</h2>
      {agentGoalsArr?.map(
        // @ts-ignore
        (agentGoal, index) =>
          index === agentGoalNo && (
            <div key={index}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ marginTop: "20px", textTransform: "uppercase" }}>
                  Goal {index + 1}
                </h3>
                <h3
                  style={{
                    marginTop: "20px",
                    textTransform: "uppercase",
                  }}
                >
                  {agentsName} Thoughts
                </h3>
                <p style={{ marginTop: "5px" }}>{aIAgentsThoughts}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ marginTop: "20px", textTransform: "uppercase" }}>
                  REASONING
                </h3>
                <p>{reasoning}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ marginTop: "20px", textTransform: "uppercase" }}>
                  PLAN
                </h3>
                {plan?.map((planObj, index) => (
                  <p key={index} style={{ marginTop: "5px" }}>
                    {planObj}
                  </p>
                ))}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ marginTop: "20px", textTransform: "uppercase" }}>
                  CRITICISM
                </h3>
                <p style={{ marginTop: "5px" }}>{criticism}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3
                  style={{
                    marginTop: "20px",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                  }}
                >
                  NEXT ACTION
                </h3>
                <p style={{ marginBottom: "20px" }}>{nextAction}</p>
                <InputField
                  fieldWidth="100%"
                  fieldType="text"
                  fieldValue={
                    index === 0
                      ? input01
                      : index === 1
                      ? input02
                      : index === 2
                      ? input03
                      : index === 3
                      ? input04
                      : input05
                  }
                  fieldPlaceholder="Enter 'y' to authorize, 'y -N' to run N continous commands and 'n' to exit program"
                  fieldError={err?.length > 0}
                  onChange={(e) => {
                    index === 0
                      ? setInput01(e?.target?.value)
                      : index === 1
                      ? setInput02(e?.target?.value)
                      : index === 2
                      ? setInput03(e?.target?.value)
                      : index === 3
                      ? setInput04(e?.target?.value)
                      : index === 4 && setInput05(e?.target?.value);
                    e?.target?.value !== "y" &&
                    e?.target?.value !== "y -N" &&
                    e?.target?.value !== "n"
                      ? setErr(
                          "Invalid input, valid input values are only 'y', 'y -N', or 'N'"
                        )
                      : setErr("");
                  }}
                />
                <p style={{ color: "red" }}>{err}</p>
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
                handleClick={() => dispatch(updateStepNo(3))}
              />
              <ButtonComponent
                buttonStyling={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginTop: "20px",
                }}
                title="Confirm"
                handleClick={() => {
                  index === 0 && input01 === "y"
                    ? setAgentGoalNo(1)
                    : index === 0 && input01 === "y -N"
                    ? setAgentGoalNo(4)
                    : index === 0 && input01 === "n"
                    ? dispatch(updateStepNo(1))
                    : index === 1 && input02 === "y"
                    ? setAgentGoalNo(2)
                    : index === 1 && input02 === "y -N"
                    ? setAgentGoalNo(4)
                    : index === 1 && input02 === "n"
                    ? dispatch(updateStepNo(1))
                    : index === 2 && input03 === "y"
                    ? setAgentGoalNo(3)
                    : index === 2 && input03 === "y -N"
                    ? setAgentGoalNo(4)
                    : index === 2 && input03 === "n"
                    ? dispatch(updateStepNo(1))
                    : index === 3 && input04 === "y"
                    ? setAgentGoalNo(4)
                    : index === 3 && input04 === "y -N"
                    ? setAgentGoalNo(4)
                    : index === 3 && input01 === "n"
                    ? dispatch(updateStepNo(1))
                    : index === 4 && input05 === "y"
                    ? setAgentGoalNo(5)
                    : index === 4 && input05 === "y -N"
                    ? setAgentGoalNo(4)
                    : index === 4 &&
                      input05 === "n" &&
                      dispatch(updateStepNo(1));
                }}
                isButtonDisabled={isConfirmBtnDisbaled || err?.length > 0}
              />
            </div>
          )
      )}
    </Box>
  );
};

export default FourthStage;

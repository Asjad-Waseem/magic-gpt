import Box from "@mui/material/Box";
import ButtonComponent from "components/Button";

import { useAppDispatch } from "redux/hooks";
import { resetHomeState } from "redux/slices/home";

const FifthStage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1 },
      }}
    >
      <p>
        Completed all assigned tasks for today, if you want to keep using me,
        you can start the process again...
      </p>

      <ButtonComponent
        buttonStyling={{
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
        title="Start Again"
        handleClick={() => dispatch(resetHomeState())}
      />
    </Box>
  );
};

export default FifthStage;

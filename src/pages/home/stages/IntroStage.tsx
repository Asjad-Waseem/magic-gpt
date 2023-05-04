import { useAppDispatch } from "redux/hooks";
import { updateStepNo } from "redux/slices/home";

import ButtonComponent from "components/Button";

const IntroStage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Welcome to Magic-GPT</h2>
      <p style={{ fontSize: "16px" }}>
        Magic-GPT is your own personalized AI-powered AI Assistant that can help
        you get all your daily repetitive tasks done within no time.
      </p>
      <ButtonComponent
        buttonStyling={{
          fontSize: "16px",
          fontWeight: "bold",
          marginTop: "20px",
        }}
        title="Let's begin"
        handleClick={() => dispatch(updateStepNo(1))}
      />
    </div>
  );
};

export default IntroStage;

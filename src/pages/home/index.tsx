import "assets/scss/Home.scss";

import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";

import CardComponent from "components/Card";

import IntroStage from "./stages/IntroStage";
import FirstStage from "./stages/FirstStage";
import SecondStage from "./stages/SecondStage";
import ThirdStage from "./stages/ThirdStage";
import FourthStage from "./stages/FourthStage";
import FifthStage from "./stages/FifthStage";

import { useAppSelector } from "redux/hooks";
import { stepNo } from "redux/slices/home";

const Home = (): JSX.Element => {
  const stepNumber = useAppSelector(stepNo);

  return (
    <div className="home" style={stepNumber === 3 ? { height: "100%" } : {}}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: "50px",
        }}
      >
        <AutoFixHighIcon fontSize="large" color="primary" />
        <h1 className="home__heading">MagicGPT</h1>
      </div>
      <CardComponent
        optionalClassBox="home__steps-box"
        borderRadiusClass="home__steps-card-border"
        optionalClassCard="home__steps-card"
        card={
          stepNumber === 0 ? (
            <IntroStage />
          ) : stepNumber === 1 ? (
            <FirstStage />
          ) : stepNumber === 2 ? (
            <SecondStage />
          ) : stepNumber === 3 ? (
            <ThirdStage />
          ) : stepNumber === 4 ? (
            <FourthStage />
          ) : (
            <FifthStage />
          )
        }
      />
    </div>
  );
};

export default Home;

import "./App.css";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { multiStepContext } from "./StepContext";
import { useContext } from "react";

function App() {
  const { currentStep } = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
    }
  }
  return (
    <div className="APP">
      <header className="App-header">
        <div className="main">
          <Stepper
            className="stepper-width"
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step>
              <StepLabel>Your Profile</StepLabel>
            </Step>
            <Step>
              <StepLabel>Business Information</StepLabel>
            </Step>
          </Stepper>

          {showStep(currentStep)}
        </div>
      </header>
    </div>
  );
}

export default App;

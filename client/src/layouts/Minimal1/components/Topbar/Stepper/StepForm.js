import React, { useState, Fragment } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import {StepLabel,Grid} from "@material-ui/core";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import Confirm from "./Confirm";

const emailRegex = RegExp(/^[^@]+@[^@]+\.[^@]+$/);
const phoneRegex = RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/);
// Step titles
const labels = ["Account Info", "Verify Phone", "Upload ID"];

const StepForm = () => {
  const [steps, setSteps] = useState(0);
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    city: "",
  });
  // Copy fields as they all have the same name
  const [filedError, setFieldError] = useState({
    ...fields
  });

  const [isError, setIsError] = useState(false);

  const [codeRequest, setCodeRequest] = useState('')

  // Proceed to next step
  const handleNext = () => setSteps(steps + 1);
  // Go back to prev step
  const handleBack = () => setSteps(steps - 1);

  const codeReq = (codeRequest) => {
    setCodeRequest(codeRequest)
    console.log(codeRequest)
  }

  // Handle fields change
  const handleChange = input => ({ target: { value } }) => {
    // Set values to the fields
    setFields({
      ...fields,
      [input]: value
    });

    // Handle errors
    const formErrors = { ...filedError };
    const lengthValidate = value.length > 0 && value.length < 3;

    switch (input) {
      case "firstName":
        formErrors.firstName = lengthValidate
          ? "Minimum 3 characaters required"
          : "";
        break;
      case "lastName":
        formErrors.lastName = lengthValidate
          ? "Minimum 3 characaters required"
          : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "phone":
        formErrors.phone = phoneRegex.test(value)
          ? ""
          : "Please enter a valid phone number. i.e: xxx-xxx-xxxx";
        break;
      case "city":
        formErrors.city = lengthValidate
          ? "Minimum 3 characaters required"
          : "";
        break;
      default:
        break;
    }

    // set error hook
    Object.values(formErrors).forEach(error =>
      error.length > 0 ? setIsError(true) : setIsError(false)
    );
    // set errors hook
    setFieldError({
      ...formErrors
    });
  };

  const handleSteps = step => {
    switch (step) {
      case 0:
        return (
          <FirstStep
            handleNext={handleNext}
            codeReq ={codeReq}

            handleChange={handleChange}
            values={fields}
            isError={isError}
            filedError={filedError}
          />
        );
      case 1:
        return (
          <SecondStep
            handleNext={handleNext}
            handleBack={handleBack}
            codeReq={codeRequest}
            handleChange={handleChange}
            values={fields}
            isError={isError}
            filedError={filedError}
          />
        );
      case 2:
        return (
          <Confirm
            handleNext={handleNext}
            handleBack={handleBack}
            allValues={fields}
          />
        );
      default:
        break;
    }
  };

  // Handle components
  return (
    <Fragment>
        <Fragment>
          <Grid item xs={12} align="center">
          <span
         
            style={{
              fontWeight: "bold",
              color: "white",
              fontSize: "20px",
              fontFamily: "sans-serif",
           
            }}
          >
            Create an Account
          </span>
</Grid>
          <Stepper
            activeStep={steps}
            style={{
              paddingTop: 5,
              paddingBottom: 60,
              height: "2vh",
              marginTop: "2vh",
              marginLeft: "-3.8vh",
              marginRight: "-3.9vh"
            }}
            alternativeLabel
          >
            {labels.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {handleSteps(steps)}
        </Fragment>
      )}
    </Fragment>
  );
};

export default StepForm;
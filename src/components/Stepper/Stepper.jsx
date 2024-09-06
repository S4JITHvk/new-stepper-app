import React, { useState } from "react";
import "./stepper.css";
import { TiTick } from "react-icons/ti";
import PersonalDetailsForm from "../personal/Personaldetails";
import CompanyDetailsForm from "../Company/Companydetails";
import SummaryPage from "../Info/SummaryPage";

const Stepper = () => {
  const steps = ["Step 1", "Step 2", "Step 3"];
  const [activeStep, setActiveStep] = useState(0);
  const [personalDetails, setPersonalDetails] = useState({});
  const [companyDetails, setCompanyDetails] = useState({});

  const handleFormSubmit = (data) => {
    if (activeStep === 0) {
      setPersonalDetails(data);
    } else if (activeStep === 1) {
      setCompanyDetails(data);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalDetailsForm onSubmit={handleFormSubmit} />;
      case 1:
        return <CompanyDetailsForm onSubmit={handleFormSubmit} />;
      case 2:
        return (
          <SummaryPage
            personalDetails={personalDetails}
            companyDetails={companyDetails}
            onSubmit={handleFormSubmit}
          />
        );
      case 3:
        return (
          <SummaryPage
            personalDetails={personalDetails}
            companyDetails={companyDetails}
          />
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <>
  <div className="flex flex-col justify-center items-center bg-[#282D2D] min-h-screen ">
  {/* Stepper */}
  <div className="flex space-x-4 mt-6">
    {steps.map((step, i) => (
      <div
        key={i}
        className={`step-item ${activeStep === i ? "active" : ""} ${
          i < activeStep ? "complete" : ""
        }`}
      >
        <div className="step">
          {i < activeStep ? <TiTick size={24} /> : i + 1}
        </div>
        <p className="text-gray-100">{step}</p>
      </div>
    ))}
  </div>

  {/* Content */}
  <div className="w-full max-w-4xl flex-grow">
    {getStepContent(activeStep)}
  </div>
</div>

    </>
  );
};

export default Stepper;

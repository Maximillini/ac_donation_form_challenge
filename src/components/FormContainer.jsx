import React, { useState, useEffect } from "react";
import ProgressFlag from "./ProgressFlag.jsx";
import ProgressBar from "./ProgressBar.jsx";
import Form from "./Form.jsx";

const daysLeftToString = (daysLeft) => {
  // would handle this differently for bigger project
  const dictionary = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
  };

  return dictionary[daysLeft];
};

const FormContainer = () => {
  const [fundsRaised, setFundsRaised] = useState(0);
  const [numberOfDonors, setNumberOfDonors] = useState(0);
  const [daysLeft, setDaysLeft] = useState(10);

  useEffect(() => {
    console.log(`fundsRaised: ${fundsRaised}`);
  }, []);

  const pluralizeDonors = () =>
    numberOfDonors === 1 ? " donor who has" : " donors who have";

  const getDonorNumberText = () => {
    return numberOfDonors < 1 ? (
      <p>Be the first to donate to this project!</p>
    ) : (
      <p>
        Join the <span className="bold">{numberOfDonors}</span> other
        {pluralizeDonors()} already supported this project.
      </p>
    );
  };

  return (
    <>
      <ProgressFlag {...{ fundsRaised }} />
      <div className="form-container">
        <ProgressBar fundsRaised={fundsRaised} />
        <div className="text-container">
          <h2 className="days-left">
            Only {daysLeftToString(daysLeft)} days left to fund this project
          </h2>
          {getDonorNumberText()}
          <Form
            {...{
              fundsRaised,
              setFundsRaised,
              numberOfDonors,
              setNumberOfDonors,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default FormContainer;

import React from "react";

const ProgressFlag = ({ fundsRaised }) => {
  const fundingNeeded = 5000 - fundsRaised <= 0 ? 0 : 5000 - fundsRaised;

  return 5000 - fundsRaised <= 0 ? (
    <div className="progress-flag">
      <span className="bold">Success!</span> This project has been fully funded.
    </div>
  ) : (
    <div className="progress-flag">
      <sup>$</sup>
      <span className="bold">{fundingNeeded}</span> still needed to fund this
      project
    </div>
  );
};

export default ProgressFlag;

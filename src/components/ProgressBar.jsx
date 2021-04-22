import React, { useState, useEffect } from "react";

const ProgressBar = ({ fundsRaised }) => {
  const [progress, setProgress] = useState((fundsRaised / 5000) * 100);

  useEffect(() => {
    setProgress((fundsRaised / 5000) * 100);
  }, []);

  useEffect(() => {
    setProgress((fundsRaised / 5000) * 100);
  }, [fundsRaised]);

  const colors = {
    mint: "#19cca3",
    mint40: "#b5f2e4",
  };

  const barFillPercent = {
    background: `linear-gradient(75deg, ${colors.mint} ${progress}%, ${colors.mint40} 0%)`,
  };

  return <div className="progress-bar" style={barFillPercent}></div>;
};

export default ProgressBar;

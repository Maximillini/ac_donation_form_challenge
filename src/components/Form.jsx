import React, { useState, useEffect } from "react";

const Form = ({
  fundsRaised,
  setFundsRaised,
  numberOfDonors,
  setNumberOfDonors,
}) => {
  const [value, setValue] = useState('');
  const [errors, setErrors] = useState('');

  useEffect(() => {
    setErrors('');
    setTimeout(() => {
      if (value && value < 5) {
        setErrors('');
        return setErrors('Sorry, but we can\'t accept donations less than $5');
      }
    }, 3000)
  }, [value])

  const handleInputChange = (e) => setValue(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(parseFloat(value));

    if (!value || value < 5) return;

    const donation = parseFloat(value);

    setErrors();
    setFundsRaised(donation + fundsRaised);
    setNumberOfDonors(++numberOfDonors);
    return setValue("");
  };

  return (
    <form className="donation-form" onSubmit={handleOnSubmit}>
      <div className="input-container">
        <span className="dollar-sign inline-form">$</span>
        <input
          className="inline-form donation-input"
          name="donation-input"
          type="number"
          min="0"
          onChange={handleInputChange}
          placeholder="5"
          value={value}
          step=".01"
        />
        <input
          className="inline-form give-button"
          type="submit"
          value="Give Now"
          disabled={!value || value < 5}
          title="Please enter an amount greater than $5"
        />
      </div>
      <div className="error">{errors}</div>
    </form>
  );
};

export default Form;

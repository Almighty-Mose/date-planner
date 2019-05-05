/* eslint-disable react/prop-types */
import React from 'react';

const Select = props => {
  const { question, stateValue, handleChange } = props;
  return (
    <>
      <p>{question.ask}</p>
      <select name="stateValue" value={stateValue} onChange={handleChange}>
        <option value="" disabled>
          Select a cuisine, yo.
        </option>
        {question.answers.map(option => {
          return (
            <option key={option} value={option} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;

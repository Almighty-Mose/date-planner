/* eslint-disable react/prop-types */
import React from 'react';

const Select = props => {
  const { question, cuisines, stateValue, handleChange } = props;
  return (
    <>
      <p>{question.ask}</p>
      <select name="cuisine" value={stateValue} onChange={handleChange}>
        <option value="" disabled>
          Select a cuisine, yo.
        </option>
        {cuisines.map(option => {
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

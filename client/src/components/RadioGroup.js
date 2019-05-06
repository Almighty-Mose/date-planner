/* eslint-disable react/prop-types */
import React from 'react';

const RadioGroup = props => {
  const { handleChange, stateValue, question, name } = props;
  const radioButtons = question.answers.map((answer, index) => {
    const id = `${name}${index}`;
    return (
      <div key={id}>
        <label htmlFor={id}>
          <input
            type="radio"
            id={id}
            name={name}
            value={answer}
            checked={stateValue === answer}
            onChange={handleChange}
          />
          {answer}
        </label>
        <br />
      </div>
    );
  });
  return (
    <div>
      <p>{question.ask}</p>
      {radioButtons}
    </div>
  );
};

export default RadioGroup;

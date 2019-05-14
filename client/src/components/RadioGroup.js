/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Title = styled.legend`
  background: #ffffff;
  height: 20px;
  padding: 2px 5px 2px 5px;
  margin: 10px 0px;
  color: #b9b9b9;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
`;

const RadioGroup = props => {
  const { handleChange, stateValue, question, name } = props;
  const radioButtons = question.answers.map((answer, index) => {
    const id = `${name}${index}`;
    return (
      <>
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
      </>
    );
  });
  return (
    <fieldset style={{ border: 'none' }}>
      <Title>{question.ask}</Title>
      {radioButtons}
    </fieldset>
  );
};

export default RadioGroup;

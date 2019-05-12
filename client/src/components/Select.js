/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
  background: #ffffff;
  height: 20px;
  padding: 2px 5px 2px 5px;
  margin: 10px 0px;
  color: #b9b9b9;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
`;

const Select = props => {
  const { question, cuisines, stateValue, handleChange } = props;
  return (
    <>
      <Title>{question.ask}</Title>
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

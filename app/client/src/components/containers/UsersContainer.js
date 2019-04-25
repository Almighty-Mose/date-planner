/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 0.75em;
  margin: 0.25em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 10px;
  right: 0;
  background-color: green;
  color: white;
  &:hover {
    background-color: white;
    color: green;
  }
`;

const StyledContainer = styled.div`
  position: absolute;
  width: 25%;
  right: 0;
`;

class UsersContainer extends Component {
  // TODO: GET request to check for a logged in user after setting up Devise.
  render() {
    return (
      <StyledContainer>
        <StyledButton>Sign Up</StyledButton>
        <StyledButton>Login</StyledButton>
      </StyledContainer>
    );
  }
}

export default UsersContainer;

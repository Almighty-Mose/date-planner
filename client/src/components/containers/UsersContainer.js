/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  float: right;
  position: relative;
  top: 15px;
  right: 10px;
  font-size: 0.75em;
  margin: 0.25em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 10px;
  background-color: green;
  color: white;
  &:hover {
    animation-name: color;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }

  @keyframes color {
    100% {
      background-color: white;
      color: green;
    }
  }
`;

// const StyledButton = styled.button`
//   border: 2px solid #25bf88;
//   border-radius: 25px;
//   width: 100px;
//   padding: 20px 0px;
//   margin: 10px auto 10px auto;
//   -webkit-box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.4);
//   -moz-box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.4);
//   box-shadow: 0px 1px 6pxrgba 0, 0, 0, 0.4;
// `;

const StyledContainer = styled.div`
  
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

/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import UsersContainer from './components/containers/UsersContainer';
import QuizContainer from './components/containers/QuizContainer';

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledH2 = styled.h2`
  margin: auto 10px auto;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledHeader>
          <StyledH2>Date Planner</StyledH2>
          <UsersContainer />
        </StyledHeader>
        <QuizContainer />
      </div>
    );
  }
}

export default App;

/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import UsersContainer from './components/containers/UsersContainer';
import './App.css';

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledHeader>
          <UsersContainer />
        </StyledHeader>
      </div>
    );
  }
}

export default App;

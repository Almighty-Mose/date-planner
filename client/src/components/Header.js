import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 0 auto;
  background-color: #f0f3bd;
  min-height: 10vh;
  align-items: center;
  justify-content: flex-end;
  font-size: 25;
  color: #1bd67f;
`;

class Header extends Component {
  render() {
    return <Title>Date Planner</Title>;
  }
}

export default Header;

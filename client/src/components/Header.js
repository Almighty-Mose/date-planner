import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 0 auto;
  padding: 15px;
  background-color: #f0f3bd;
  font-size: 60px;
  color: #1bd67f;
`;

const Header = () => {
  return <Title>Date Planner</Title>;
};

export default Header;

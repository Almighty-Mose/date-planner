/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';

const SidebarStyle = styled.div`
  display: inline;
  border: 2px solid blue;
`;

class QuizSidebar extends Component {
  render() {
    return <SidebarStyle>QuizSidebar!</SidebarStyle>;
  }
}

export default QuizSidebar;

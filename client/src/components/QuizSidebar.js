/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';

const SidebarStyle = styled.div`
  border: 2px solid blue;
  margin: 20px 30px 20px 20px;
  padding: 20px 30px 20px 20px;
`;

class QuizSidebar extends Component {
  render() {
    const { questionNames } = this.props;
    return (
      <SidebarStyle>
        {questionNames.map(name => (
          <li>{name}</li>
        ))}
      </SidebarStyle>
    );
  }
}

export default QuizSidebar;

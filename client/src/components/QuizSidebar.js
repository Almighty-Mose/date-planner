/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';

const SidebarStyle = styled.div`
  position: relative;
  width: 150px;
  font-size: 1.5em;
  line-height: 1.75em;
  list-style: none;
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
          <li key={name}>{name}</li>
        ))}
      </SidebarStyle>
    );
  }
}

export default QuizSidebar;

/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';

const SidebarStyle = styled.div`
  border: 2px solid blue;
`;

class QuizSidebar extends Component {
  render() {
    const { questions } = this.props;
    return (
      <SidebarStyle>
        <p>{questions.price.ask}</p>
        <ul>
          {questions.price.answers.map(answer => (
            <li>{answer}</li>
          ))}
        </ul>
        <p>{questions.distance.ask}</p>
        <ul>
          {questions.distance.answers.map(answer => (
            <li>{answer}</li>
          ))}
        </ul>
      </SidebarStyle>
    );
  }
}

export default QuizSidebar;

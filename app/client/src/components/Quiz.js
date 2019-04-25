/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';

const QuizStyle = styled.div`
  border: 2px dotted black;
`;

class Quiz extends Component {
  render() {
    const { questions } = this.props;
    return (
      <QuizStyle>
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
      </QuizStyle>
    );
  }
}

export default Quiz;

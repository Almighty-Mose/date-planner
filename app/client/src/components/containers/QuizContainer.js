import React, { Component } from 'react';
import styled from 'styled-components';

const QuizStyle = styled.div`
  border: 2px solid red;
`;

class QuizContainer extends Component {
  render() {
    return <QuizStyle>This is your quiz Container!</QuizStyle>;
  }
}

export default QuizContainer;

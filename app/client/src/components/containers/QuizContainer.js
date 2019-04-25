import React, { Component } from 'react';
import styled from 'styled-components';
import QuizSidebar from '../QuizSidebar';

const QuizContainerStyle = styled.div`
  border: 2px solid red;
`;

// eslint-disable-next-line react/prefer-stateless-function
class QuizContainer extends Component {
  render() {
    return (
      <QuizContainerStyle>
        This is your quiz Container!
        <QuizSidebar />
      </QuizContainerStyle>
    );
  }
}

export default QuizContainer;

import React, { Component } from 'react';
import styled from 'styled-components';
import QuizSidebar from '../QuizSidebar';
import Quiz from '../Quiz';

const QuizContainerStyle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  border: 2px solid red;
`;

class QuizContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: {
        price: {
          ask: 'How much do you want to spend?',
          answers: ['$', '$$', '$$$', '$$$$'],
        },
        distance: {
          ask: 'How far you wanna go?',
          answers: ['<5', '5-10', '10-15', '>20'],
        },
        cuisine: {
          ask: 'Whatchu wanna eat?',
          answers: [
            'American',
            'Chinese',
            'Vietnamese',
            'Mexican',
            'Italian',
            'Burgers',
            'Pizza',
          ],
        },
      },
    };
  }

  render() {
    const { questions } = this.state;

    const questionNames = Object.keys(questions);
    return (
      <QuizContainerStyle>
        <QuizSidebar questionNames={questionNames} />
        <Quiz questions={questions} />
      </QuizContainerStyle>
    );
  }
}

export default QuizContainer;

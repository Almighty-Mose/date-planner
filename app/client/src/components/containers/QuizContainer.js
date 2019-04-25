import React, { Component } from 'react';
import styled from 'styled-components';
import QuizSidebar from '../QuizSidebar';

const QuizContainerStyle = styled.div`
  border: 2px solid red;
`;

/*  
QuizContainer will contain the state for all the
quiz information: Current Question, the answers
I need a questions object with a name, ask, and answers property.
 questions = {
  price: {
    ask: "How much do you want to spend?",
    answers: ["$", "$$", "$$$", "$$$$"]
  }
}
*/

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
          answers: ['5', '10', '15', '20'],
        },
      },
    };
  }

  render() {
    return (
      <QuizContainerStyle>
        <QuizSidebar questions={this.state.questions} />
      </QuizContainerStyle>
    );
  }
}

export default QuizContainer;

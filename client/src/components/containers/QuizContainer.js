/* eslint-disable class-methods-use-this */
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
        },
      },
      cuisineAnswers: [],
    };

    this.fetchCity = this.fetchCity.bind(this);
    this.fetchCuisines = this.fetchCuisines.bind(this);
  }

  fetchCity(location) {
    const url = `https://developers.zomato.com/api/v2.1/cities?q=${location}`;
    const apiKey = process.env.REACT_APP_USER_KEY;
    fetch(url, { headers: { 'user-key': apiKey } })
      .then(response => response.json())
      .then(data => {
        const cityId = data.location_suggestions[0].id;
        this.fetchCuisines(cityId);
      })
      .catch(error => console.log(error));
  }

  fetchCuisines(cityId) {
    const url = `https://developers.zomato.com/api/v2.1/cuisines?city_id=${cityId}`;
    const apiKey = process.env.REACT_APP_USER_KEY;
    fetch(url, { headers: { 'user-key': apiKey } })
      .then(response => response.json())
      .then(data => {
        const cuisineList = data.cuisines.map(c => c.cuisine.cuisine_name);
        this.setState({ cuisineAnswers: cuisineList });
        // Unstuck!!!! De-nested cuisineAnswers.
      })
      .catch(error => console.log(error));
  }

  render() {
    const { questions, cuisineAnswers } = this.state;

    const questionNames = Object.keys(questions);
    return (
      <QuizContainerStyle>
        <QuizSidebar questionNames={questionNames} />
        <Quiz
          cuisines={cuisineAnswers}
          questions={questions}
          fetchCity={this.fetchCity}
        />
      </QuizContainerStyle>
    );
  }
}

export default QuizContainer;

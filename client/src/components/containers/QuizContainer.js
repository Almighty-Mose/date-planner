/* eslint-disable react/prop-types */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Quiz from '../Quiz';

const QuizContainerStyle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
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
    const { dispatch } = this.props;
    const url = `https://developers.zomato.com/api/v2.1/cuisines?city_id=${cityId}`;
    const apiKey = process.env.REACT_APP_USER_KEY;
    fetch(url, { headers: { 'user-key': apiKey } })
      .then(response => response.json())
      .then(data => {
        const cuisineList = data.cuisines.map(c => c.cuisine.cuisine_name);
        dispatch({
          type: 'ADD_CUISINES',
          cuisineNames: cuisineList,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { questions } = this.state;
    const { cuisines } = this.props;

    return (
      <QuizContainerStyle>
        <Quiz
          cuisines={cuisines}
          questions={questions}
          fetchCity={this.fetchCity}
        />
      </QuizContainerStyle>
    );
  }
}

const mapStateToProps = state => {
  const { quiz } = state;
  return {
    cuisines: quiz.cuisineNames,
  };
};

export default connect(mapStateToProps)(QuizContainer);

/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import RadioGroup from './RadioGroup';

class Quiz extends Component {
  constructor() {
    super();

    this.state = {
      price: '',
      distance: '',
      cuisine: '',

      cuisineOptions: [
        'American',
        'Chinese',
        'Vietnamese',
        'Mexican',
        'Italian',
        'Burgers',
        'Pizza',
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { price, distance, cuisine } = this.state;
    alert(`You chose ${price}, ${distance} and ${cuisine}`);
  }

  render() {
    const { price, distance, cuisine, cuisineOptions } = this.state;
    const { questions } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <RadioGroup
            handleChange={this.handleChange}
            stateValue={price}
            question={questions.price}
            name={Object.keys(questions)[0]}
          />

          <br />

          <RadioGroup
            handleChange={this.handleChange}
            stateValue={distance}
            question={questions.distance}
            name={Object.keys(questions)[1]}
          />

          <br />

          <p>Whatchu wanna eat?</p>
          <select name="cuisine" value={cuisine} onChange={this.handleChange}>
            <option value="" disabled>
              Select a cuisine, yo.
            </option>
            {cuisineOptions.map(option => {
              return (
                <option key={option} value={option} label={option}>
                  {option}
                </option>
              );
            })}
          </select>

          <br />
          <button type="submit">CHOOOOOOOSE</button>
        </form>
      </div>
    );
  }
}

export default Quiz;

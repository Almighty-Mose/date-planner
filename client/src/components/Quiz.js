/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import RadioGroup from './RadioGroup';
import Select from './Select';

class Quiz extends Component {
  constructor() {
    super();

    this.state = {
      location: '',
      price: '',
      distance: '',
      cuisine: '',
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
    const { location, price, distance, cuisine } = this.state;
    alert(`You chose ${location}, ${price}, ${distance} and ${cuisine}`);
  }

  // TODO: We could probably abstract the RadioGroup again.
  render() {
    const { location, price, distance, cuisine } = this.state;
    const { questions } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>Where you at?</p>
          <label htmlFor="location">
            <input
              type="text"
              name="location"
              value={location}
              onChange={this.handleChange}
            />
          </label>

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

          <Select
            handleChange={this.handleChange}
            question={questions.cuisine}
            stateValue={cuisine}
          />

          <br />
          <button type="submit">CHOOOOOOOSE</button>
        </form>
      </div>
    );
  }
}

export default Quiz;

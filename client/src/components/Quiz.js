/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import RadioGroup from './RadioGroup';

class Quiz extends Component {
  constructor() {
    super();

    this.state = {
      price: '',
      distance: '',
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
    const { price, distance } = this.state;
    alert(`You chose ${price} and ${distance}`);
  }

  render() {
    const { price, distance } = this.state;
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
          <button type="submit">CHOOOOOOOSE</button>
        </form>
      </div>
    );
  }
}

export default Quiz;

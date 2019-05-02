/* eslint-disable react/prop-types */
import React, { Component } from 'react';

// Each Radio Group is responsible for one question (price, distance)
// It renders the actual ask and 4 Radio components, 1 for each answer
// It will take in a prop of one question object, passed to it by Quiz

const RadioGroup = props => {
  const { handleChange, stateValue, question, name } = props;
  const radioButtons = question.answers.map((answer, index) => {
    const id = `${name}${index}`;
    return (
      <>
        <label htmlFor={id}>
          <input
            type="radio"
            id={id}
            name={name}
            value={answer}
            checked={stateValue === answer}
            onChange={handleChange}
          />
          {answer}
        </label>
        <br />
      </>
    );
  });
  return (
    <div>
      <p>{question.ask}</p>
      {radioButtons}
    </div>
  );
};

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

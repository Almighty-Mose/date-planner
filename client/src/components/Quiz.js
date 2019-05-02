/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

// What should our data structure look like?

// What do you want to be able to do?

// We need a Radio Button component to generate
// Radio will need to take in some sort of props to dynamically
// render data attributes.
// this.state = {
//   questions: {
//     price: {
//       ask: 'How much do you want to spend?',
//       answers: ['$', '$$', '$$$', '$$$$'],
//     },
//     distance: {
//       ask: 'How far you wanna go?',
//       answers: ['5', '10', '15', '20'],
//     },
//   },
// };

// const Radio = props => {
//   const { qName } = props;
//   return (
//     <label htmlFor={`${qName}1`}>
//       <input type="radio" name={qName} id={`${qName}1`} value="$" />$
//     </label>
//   );
// };

// Each Radio Group is responsible for one question (price, distance)
// It renders the actual ask and 4 Radio components, 1 for each answer
// It will take in a prop of one question object, passed to it by Quiz

const RadioGroup = props => {
  const { handleChange, price } = props;
  return (
    <div>
      <p>How much you wanna spend?</p>
      <label htmlFor="price1">
        <input
          type="radio"
          id="price1"
          name="price"
          value="$"
          checked={price === '$'}
          onChange={handleChange}
        />
        $
      </label>
      <br />
      <label htmlFor="price2">
        <input
          type="radio"
          id="price2"
          name="price"
          value="$$"
          checked={price === '$$'}
          onChange={handleChange}
        />
        $$
      </label>
      <br />
      <label htmlFor="price3">
        <input
          type="radio"
          id="price3"
          name="price"
          value="$$$"
          checked={price === '$$$'}
          onChange={handleChange}
        />
        $$$
      </label>
      <br />
      <label htmlFor="price4">
        <input
          type="radio"
          id="price4"
          name="price"
          value="$$$$"
          checked={price === '$$$$'}
          onChange={handleChange}
        />
        $$$$
      </label>
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

  handleSubmit() {
    const { price, distance } = this.state;
    alert(`You chose ${price} and ${distance}`);
  }

  render() {
    const { price, distance } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <RadioGroup handleChange={this.handleChange} price={price} />

          <br />
          <p>How far you wanna go?</p>
          <label htmlFor="distance1">
            <input
              type="radio"
              name="distance"
              id="distance1"
              value="5"
              checked={distance === '5'}
              onChange={this.handleChange}
            />
            &lt;5
          </label>
          <br />
          <label htmlFor="distance2">
            <input
              type="radio"
              name="distance"
              id="distance1"
              value="5-10"
              checked={distance === '5-10'}
              onChange={this.handleChange}
            />
            5-10
          </label>
          <br />
          <label htmlFor="distance3">
            <input
              type="radio"
              name="distance"
              id="distance1"
              value="10-15"
              checked={distance === '10-15'}
              onChange={this.handleChange}
            />
            10-15
          </label>
          <br />
          <label htmlFor="distance4">
            <input
              type="radio"
              name="distance"
              id="distance1"
              value="15"
              checked={distance === '15'}
              onChange={this.handleChange}
            />
            &gt;15
          </label>
          <br />
          <button type="submit">CHOOOOOOOSE</button>
        </form>
      </div>
    );
  }
}

export default Quiz;

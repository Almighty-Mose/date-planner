/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Quiz extends Component {
  render() {
    return (
      <div>
        <form>
          <p>How much you wanna spend?</p>
          <label htmlFor="price1">
            <input type="radio" name="price" id="price1" value="$" />$
          </label>
          <br />
          <label htmlFor="price2">
            <input type="radio" name="price" id="price2" value="$" />
            $$
          </label>
          <br />
          <label htmlFor="price3">
            <input type="radio" name="price" id="price3" value="$" />
            $$$
          </label>
          <br />
          <label htmlFor="price4">
            <input type="radio" name="price" id="price4" value="$" />
            $$$$
          </label>
          <br />
          <p>How far you wanna go?</p>
          <label htmlFor="distance1">
            <input type="radio" name="distance" id="distance1" value="$" />
            &lt;5
          </label>
          <br />
          <label htmlFor="distance2">
            <input type="radio" name="distance" id="distance2" value="$" />
            5-10
          </label>
          <br />
          <label htmlFor="distance3">
            <input type="radio" name="distance" id="distance3" value="$" />
            10-15
          </label>
          <br />
          <label htmlFor="distance4">
            <input type="radio" name="distance" id="distance4" value="$" />
            &gt;15
          </label>
          <br />
        </form>
      </div>
    );
  }
}

export default Quiz;

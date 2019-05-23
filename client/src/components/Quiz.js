/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import styled from 'styled-components';
import RadioGroup from './RadioGroup';
import Select from './Select';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 20px auto;
  background: #fff;
  padding: 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
`;

const Form = styled.form`
  padding: 9px;
  border: 1px solid #dddddd;
  margin-bottom: 10px;
  border-radius: 3px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 95%;
  outline: none;
  border: none;
  border-bottom: 1px solid #dddddd;
  height: 32px;
  line-height: 25px;
  font-size: 30px;
  padding: 0px 0px 2px;
  margin: 0px 0px 5px;
  font-family: Georgia, 'Times New Roman', Times, serif;
`;

const Label = styled.label`
  position: relative;
  bottom: 20px;
  background: #ffffff;
  height: 24px;
  padding: 2px 5px 2px 5px;
  color: #b9b9b9;
  font-size: 20px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
`;

const Button = styled.button`
  background: #2471ff;
  padding: 10px 20px 10px 20px;
  border: 3px solid #5994ff;
  border-radius: 3px;
  color: #d2e2ff;
  transition: color 500ms, background-color 500ms;
  &:hover {
    background-color: white;
    color: green;
  }
`;

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      price: '',
      distance: '',
      cuisine: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCitySubmit = this.handleCitySubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleCitySubmit(event) {
    event.preventDefault();
    const { location } = this.state;
    const { fetchCity } = this.props;
    fetchCity(location);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { location, price, distance, cuisine } = this.state;
    alert(`You chose ${location}, ${price}, ${distance} and ${cuisine}`);
  }

  // TODO: We could probably abstract the RadioGroup again.
  render() {
    const { location, price, distance, cuisine } = this.state;
    const { questions, cuisines } = this.props;
    return (
      <FormWrapper>
        <Form onSubmit={this.handleCitySubmit}>
          <Label htmlFor="location">
            <span>Where you at?</span>
            <Input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={this.handleChange}
            />
          </Label>
          <Button type="submit">Upload Location to Hive</Button>
        </Form>

        <Form onSubmit={this.handleSubmit}>
          <RadioGroup
            handleChange={this.handleChange}
            stateValue={price}
            question={questions.price}
            name={Object.keys(questions)[0]}
          />

          <RadioGroup
            handleChange={this.handleChange}
            stateValue={distance}
            question={questions.distance}
            name={Object.keys(questions)[1]}
          />

          {/* <Select
            handleChange={this.handleChange}
            question={questions.cuisine}
            stateValue={cuisine}
            cuisines={cuisines}
          /> */}

          <Button type="submit">CHOOOOOOOSE</Button>
        </Form>
      </FormWrapper>
    );
  }
}

export default Quiz;

/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import QuizContainer from './components/containers/QuizContainer';
import configureStore from './store/configureStore';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <QuizContainer />
        </div>
      </Provider>
    );
  }
}

export default App;

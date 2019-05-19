import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import quizReducer from './reducers/quizReducer';

function configureStore(initialState) {
  const reducers = combineReducers({
    quiz: quizReducer,
  });

  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...[thunkMiddleware]))
  );
}

export default configureStore;

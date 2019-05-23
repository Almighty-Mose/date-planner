const initialState = {
  cuisineNames: [],
};

function quizReducer(state = initialState, action) {
  console.log('Quiz Reducer', action);
  switch (action.type) {
    case 'ADD_CUISINES':
      return state.cuisineNames.concat(action.cuisineNames);

    default:
      return state;
  }
}

export default quizReducer;

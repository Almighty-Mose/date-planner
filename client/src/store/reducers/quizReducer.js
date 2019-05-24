const initialState = {
  cuisineNames: [],
};

function quizReducer(state = initialState, action) {
  console.log('Quiz Reducer', action);
  switch (action.type) {
    case 'ADD_CUISINES':
      return { ...state, cuisineNames: action.cuisineNames };

    default:
      return state;
  }
}

export default quizReducer;

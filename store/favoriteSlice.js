export const favoriteSlice = recipe => dispatch => {
    dispatch({
      type: ADD_TO_FAVORITE,
      payload: recipe
    });
  };
  const initialState = {
    recipes: []
  };
  function recipesReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TO_BOOKMARK_LIST:
        return { ...state, recipes: [...state.recipes, action.payload] };
      default:
        return state;
    }
  }
  
  export default recipesReducer;
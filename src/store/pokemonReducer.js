const initialState = {};
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POKEMON_LIST":
      return action.payload;
    default:
      return state;
  }
};

export default pokemonReducer;

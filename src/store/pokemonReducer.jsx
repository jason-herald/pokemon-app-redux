const initialState = {};

// set to empty object
// {
// pokemon: pokemonList [];
// }
// fixes Selector unknown returned the root state when called.
const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POKEMON_LIST":
      return action.payload;
    default:
      return state;
  }
};

export default pokemonReducer;

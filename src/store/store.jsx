import { legacy_createStore } from "redux";
import pokemonReducer from "./pokemonReducer";

const store = legacy_createStore(pokemonReducer);

export default store;

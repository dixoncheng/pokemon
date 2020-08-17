import {
  FETCH_POKEMON_BEGIN,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE,
  FETCH_POKEMON_SUCCESS_SINGLE,
} from "../actions/pokemonActions";

const initialState = {
  items: [],
  loading: false,
  error: null,
  pokemon: {},
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.pokemon,
      };

    case FETCH_POKEMON_SUCCESS_SINGLE:
      return {
        ...state,
        loading: false,
        pokemon: action.payload.pokemon,
      };

    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };
    default:
      return state;
  }
};

export default pokemonReducer;

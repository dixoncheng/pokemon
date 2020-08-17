const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const FETCH_POKEMON_BEGIN = "FETCH_POKEMON_BEGIN";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_SUCCESS_SINGLE = "FETCH_POKEMON_SUCCESS_SINGLE";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";

export const fetchPokemonBegin = () => ({
  type: FETCH_POKEMON_BEGIN,
});

export const fetchPokemonSuccess = (pokemon) => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: { pokemon },
});

export const fetchPokemonSuccessSingle = (pokemon) => ({
  type: FETCH_POKEMON_SUCCESS_SINGLE,
  payload: { pokemon },
});

export const fetchPokemonFailure = (error) => ({
  type: FETCH_POKEMON_FAILURE,
  payload: { error },
});

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const fetchPokemonList = (limit = 150) => {
  return (dispatch) => {
    dispatch(fetchPokemonBegin());
    return fetch(`${API_URL}?limit=${limit}`)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchPokemonSuccess(json.results));
        return json;
      })
      .catch((error) => dispatch(fetchPokemonFailure(error)));
  };
};

export const fetchPokemon = (name) => {
  return (dispatch) => {
    dispatch(fetchPokemonBegin());
    return fetch(`${API_URL}/${name}`)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchPokemonSuccessSingle(json));
        return json;
      })
      .catch((error) => dispatch(fetchPokemonFailure(error)));
  };
};

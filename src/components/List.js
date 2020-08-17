import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemonList } from "../actions/pokemonActions";

const List = () => {
  const { items, loading, error } = useSelector(
    (state) => state.pokemonReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length < 1) {
      dispatch(fetchPokemonList());
    }
  }, [dispatch, items]);

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && !error && (
        <ul>
          {items.map(({ name, url }) => (
            <li key={name}>
              <Link to={`/details/${name}`}>{name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default List;

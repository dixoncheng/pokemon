import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon } from "../actions/pokemonActions";

const Details = () => {
  const { name } = useParams();

  const { pokemon, loading, error } = useSelector(
    (state) => state.pokemonReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemon(name));
  }, [dispatch, name]);

  const { sprites, types } = pokemon || {};

  return (
    <>
      <Link to="/">Back</Link>

      {error && <div>Error occured</div>}
      {loading && <div>Loading...</div>}

      {!loading && pokemon.id && (
        <div className="row">
          <div>
            <h2>{name}</h2>
            Type{types.length === 1 ? "" : "s"}:{" "}
            {types.map(({ type }) => type.name).join(", ")}
          </div>
          <img
            src={sprites.other["official-artwork"].front_default}
            alt={name}
          />
        </div>
      )}
    </>
  );
};

export default Details;

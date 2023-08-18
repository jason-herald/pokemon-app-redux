import React, { useState, useEffect, useContext } from "react";
import { fetchPokemonList, fetchPokemonDetails } from "../../api";
import "./ProductListingPage.css";
import PokemonCard from "../../components/PokemonCard";
import { useDispatch, useSelector } from "react-redux";
import { setPokemonList } from "../../pokemonActions";

function ProductListingPage() {
  const dispatch = useDispatch();
  const pokemonDetails = useSelector((state) => state.pokemon);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchPokemonList();
      const pokemonWithDetails = await Promise.all(
        data.map(async (pokemon) => {
          const details = await fetchPokemonDetails(pokemon.name);
          return { ...pokemon, details };
        })
      );

      dispatch(setPokemonList({ pokemon: pokemonWithDetails }));
    }
    fetchData();
  }, [dispatch]);
  return (
    <div className="pokemon-list-container">
      <h1>Pokémon List</h1>
      <div className="pokemon-card-grid">
        {pokemonDetails?.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;

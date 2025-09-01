import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  function handleNextPage() {
    setOffset(offset + 20);
  }

  function handlePreviousPage() {
    setOffset(offset > 0 ? offset - 20 : offset);
  }

  return (
    <main>
      {offset > 0 && (
        <button onClick={handlePreviousPage} type="button">
          Previous Page
        </button>
      )}
      <button onClick={handleNextPage} type="button">
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

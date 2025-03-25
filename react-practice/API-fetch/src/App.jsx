import { useState, useEffect } from "react";

const useImageURL = () => {
  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((response) => setImageURL(response[0].url))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { imageURL, error, loading };
};

export const Image = () => {
  const { imageURL, error, loading } = useImageURL();
  // console.log(imageURL);
  // console.log(error);
  // console.log(loading);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered</p>;

  return (
    <>
      <h1>An image</h1>
      <img src={imageURL} alt={"placeholder text"} />
    </>
  );
};

//OTRA FORMA DE USAR FETCH CON ASYNC

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loadingPokemon, setLoadingPokemon] = useState(true);

  useEffect(() => {
    (async function getPokemon() {
      try {
        const fetchPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/blastoise`, { mode: "cors" });
        console.log(fetchPokemon);
        if (!fetchPokemon.ok) {
          throw new Error(`HTTP error: Status ${fetchPokemon.status}`);
        }
        const pokemonData = await fetchPokemon.json();
        console.log(pokemonData);
        setPokemon(pokemonData);
      } catch (error) {
        // setPokemon(null);
        setErrorMessage(error);
      } finally {
        setLoadingPokemon(false);
      }
    })();
  }, []);
  if (loadingPokemon) return <p>Loading pokemon...</p>;
  if (errorMessage) return <p>An error happened. No pokemon visible</p>;

  return (
    <>
      <h1>My pokemon</h1>
      <img src={pokemon.sprites.front_default} alt={"placeholder text"} />
    </>
  );
};

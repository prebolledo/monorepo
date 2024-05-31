import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const pokemons = async (): Promise<any> => {

  const pokemons = axios.get('https://pokeapi.co/api/v2/pokemon');

  return pokemons;
};

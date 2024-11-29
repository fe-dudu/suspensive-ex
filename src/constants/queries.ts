import { queryOptions } from '@tanstack/react-query';
import { getPokemons } from 'apis/pokemon';

export const pokemonsQueryOptions = (key: number) =>
 queryOptions({
  queryKey: ['pokemons', key],
  queryFn: () => getPokemons(),
 });

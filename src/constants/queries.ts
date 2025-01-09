import { queryOptions } from '@tanstack/react-query';
import { getPokemons } from 'apis/pokemon';

export const pokemonsQueryOptions = () =>
  queryOptions({
    queryKey: ['pokemons'],
    queryFn: ({ signal }) => getPokemons(signal),
    retry: 0,
    throwOnError: true,
  });

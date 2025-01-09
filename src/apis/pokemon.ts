import { UnauthorizedError, ForbiddenError, NotFoundError, InternalServerError } from 'constants/error';

export interface Pokemon {
  id: number;
  pokemon: string;
  type: string;
  abilities: string[];
  hitpoints: number;
  evolutions: string[];
  location: string;
  image_url: string;
}

export const getPokemons = (signal?: AbortSignal): Promise<Pokemon[]> => {
  const randomNumber = Math.random();
  const shouldThrowError = randomNumber < 0.5;

  if (shouldThrowError) {
    if (randomNumber < 0.1) throw new UnauthorizedError('401');
    if (randomNumber < 0.2) throw new ForbiddenError('403');
    if (randomNumber < 0.3) throw new NotFoundError('404');
    if (randomNumber < 0.4) throw new InternalServerError('500');
    throw new Error('unknown');
  }

  return fetch('https://dummyapi.online/api/pokemon', { signal }).then(res => res.json());
};

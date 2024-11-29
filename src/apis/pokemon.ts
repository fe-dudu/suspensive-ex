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

export const getPokemons = (): Promise<Pokemon[]> => {
  return fetch('https://dummyapi.online/api/pokemon').then(res => res.json());
};

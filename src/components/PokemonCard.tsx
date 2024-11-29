import { Pokemon } from "apis/pokemon";

interface Props {
  pokemon: Pokemon;
  onClick: () => void;
}

export default function PokemonCard({ pokemon, onClick }: Props) {
 return (
  <div
   onClick={onClick}
   style={{
    width: 'calc(33.3% - 16px)',
    boxSizing: 'border-box',
   }}
  >
   <div
    style={{
     display: 'flex',
     flexDirection: 'column',
     border: '1px solid #eee',
     borderRadius: 4,
     padding: 16,
     alignItems: 'center',
    }}
   >
    <img src={pokemon.image_url} alt={pokemon.pokemon} style={{ width: '96px', height: '96px' }} />
    <span>{pokemon.pokemon}</span>
   </div>
  </div>
 );
}

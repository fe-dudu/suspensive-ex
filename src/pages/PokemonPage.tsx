import { SuspenseQuery, QueryClientConsumer } from '@suspensive/react-query';
import { Suspense, ErrorBoundary } from '@suspensive/react';
import { pokemonsQueryOptions } from 'constants/queries';
import PokemonCardSkeleton from 'components/PokemonCardSkeleton';
import PokemonCard from 'components/PokemonCard';
import PokemonCardWrapper from 'components/PokemonCardWrapper';
import { range } from 'es-toolkit';
import { useState } from 'react';

export default function PokemonPage() {
  const [forceUpdateKey, setForceUpdateKey] = useState<number>(0);
  return (
   <ErrorBoundary fallback={({ error }) => <>{error.message}</>}>
    <Suspense
     fallback={
      <PokemonCardWrapper>
       {range(0, 24).map(i => (
        <PokemonCardSkeleton key={i} />
       ))}
      </PokemonCardWrapper>
     }
    >
     <SuspenseQuery {...pokemonsQueryOptions(forceUpdateKey)}>
      {({ data: pokemons }) => (
       <QueryClientConsumer>
        {queryClient => (
         <PokemonCardWrapper>
          {pokemons.map(pokemon => (
           <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
              onClick={() => {
                setForceUpdateKey(prev => prev += 1);
                queryClient.invalidateQueries(pokemonsQueryOptions(forceUpdateKey + 1));
              }}
           />
          ))}
         </PokemonCardWrapper>
        )}
       </QueryClientConsumer>
      )}
     </SuspenseQuery>
    </Suspense>
   </ErrorBoundary>
  );
}

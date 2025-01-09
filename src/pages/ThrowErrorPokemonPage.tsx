import { ErrorBoundary, Suspense } from '@suspensive/react';
import { QueryClientConsumer, SuspenseQuery } from '@suspensive/react-query';
import ForbiddenErrorSection from 'components/ForbiddenErrorSection';
import InternalServerErrorSection from 'components/InternalServerErrorSection';
import NotFoundErrorSection from 'components/NotFoundErrorSection';
import PokemonCard from 'components/PokemonCard';
import PokemonCardsSectionSkeleton from 'components/PokemonCardsSectionSkeleton';
import PokemonCardWrapper from 'components/PokemonCardWrapper';
import ThrowError from 'components/ThrowError';
import UnauthorizedErrorSection from 'components/UnauthorizedErrorSection';
import UnknownErrorSection from 'components/UnknownErrorSection';
import { ForbiddenError, InternalServerError, NotFoundError, UnauthorizedError } from 'constants/error';
import { pokemonsQueryOptions } from 'constants/queries';

export default function ThrowErrorPokemonPage() {
  return (
    <ErrorBoundary fallback={<UnknownErrorSection />}>
      <ErrorBoundary shouldCatch={InternalServerError} fallback={<InternalServerErrorSection />}>
        <ErrorBoundary shouldCatch={NotFoundError} fallback={<NotFoundErrorSection />}>
          <ErrorBoundary shouldCatch={ForbiddenError} fallback={<ForbiddenErrorSection />}>
            <ErrorBoundary shouldCatch={UnauthorizedError} fallback={<UnauthorizedErrorSection />}>
              <Suspense fallback={<PokemonCardsSectionSkeleton />}>
                <SuspenseQuery {...pokemonsQueryOptions()}>
                  {({ data: pokemons, isFetching, error }) => (
                    <ThrowError isFetching={isFetching} error={error}>
                      <QueryClientConsumer>
                        {queryClient => (
                          <PokemonCardWrapper>
                            {pokemons.map(pokemon => (
                              <PokemonCard
                                key={pokemon.id}
                                pokemon={pokemon}
                                onClick={() => {
                                  queryClient.invalidateQueries(pokemonsQueryOptions());
                                }}
                              />
                            ))}
                          </PokemonCardWrapper>
                        )}
                      </QueryClientConsumer>
                    </ThrowError>
                  )}
                </SuspenseQuery>
              </Suspense>
            </ErrorBoundary>
          </ErrorBoundary>
        </ErrorBoundary>
      </ErrorBoundary>
    </ErrorBoundary>
  );
}

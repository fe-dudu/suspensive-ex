import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export function TanstackQueryProvider({ children }: {children: React.ReactNode}) {
  const queryClient = useState(() => new QueryClient({ defaultOptions: { queries: { staleTime: 5 * 1000 } } }))[0];

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

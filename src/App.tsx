import PokemonPage from 'pages/PokemonPage';
import { TanstackQueryProvider } from 'providers/TanstackQueryProvider';

function App() {
  return (
    <TanstackQueryProvider>
      <PokemonPage />
    </TanstackQueryProvider>
  );
}

export default App;

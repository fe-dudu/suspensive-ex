import Routes from 'pages/Route';
import { TanstackQueryProvider } from 'providers/TanstackQueryProvider';

function App() {
  return (
    <TanstackQueryProvider>
      <Routes />
    </TanstackQueryProvider>
  );
}

export default App;

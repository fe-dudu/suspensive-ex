import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import PokemonPage from './PokemonPage';
import ThrowErrorPokemonPage from './ThrowErrorPokemonPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PokemonPage />,
  },
  {
    path: '/throw-error',
    element: <ThrowErrorPokemonPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace={true} />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}

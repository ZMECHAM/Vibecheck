import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './index.css'

import App from './App';
// import ErrorPage from './pages/ErrorPage';
import Explore from './Pages/explore';
import Login from './Pages/login';
import LikedSongs from './Pages/liked-songs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />
      }, 
      {
        path: '/explore',
        element: <Explore />
      },
      {
        path: '/liked-songs',
        element: <LikedSongs />
      },
    ]
  }
]);

const rootElement = document.getElementById('root');
if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}

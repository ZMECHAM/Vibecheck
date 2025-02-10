import { Outlet } from 'react-router-dom';

import Navbar from './components/nav';

function App() {
  return (
    <div>
      <Navbar />
      <main className='app-container'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;

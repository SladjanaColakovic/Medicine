import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './nav/NavBar';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        
      </Route>
    </Routes>
  );
}

export default App;


function Layout() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

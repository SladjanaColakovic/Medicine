import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import NavBar from './nav/NavBar';
import Medicines from './medicines/Medicines';
import Supplements from './supplements/Supplements';
import Cosmetics from './cosmetics/Cosmetics'
import SanitaryMaterial from './sanitary-material/SanitaryMaterial'
import Aids from './aids/Aids'
import Devices from './devices/Devices'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Medicines />}></Route>
        <Route path='/supplements' element={<Supplements />}></Route>
        <Route path='cosmetics' element={<Cosmetics />}></Route>
        <Route path='/sanitaryMaterials' element={<SanitaryMaterial />}></Route>
        <Route path='/aids' element={<Aids />}></Route>
        <Route path='/devices' element={<Devices />}></Route>
      </Route>
    </Routes>
  );
}

export default App;


function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

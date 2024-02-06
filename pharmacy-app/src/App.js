import './App.css';
import { Routes, Route, Outlet } from 'react-router-dom';
import NavBar from './nav/NavBar';
import Medicines from './medicines/Medicines';
import Supplements from './supplements/Supplements';
import Cosmetics from './cosmetics/Cosmetics'
import SanitaryMaterial from './sanitary-material/SanitaryMaterial'
import Aids from './aids/Aids'
import Devices from './devices/Devices'
import MedicineDetails from './medicines/MedicineDetails';
import New from './new/New';
import DeviceDetails from './devices/DeviceDetails';
import CosmeticDetails from './cosmetics/CosmeticDetails';
import SupplementDetails from './supplements/SupplementDetails';
import AidDetails from './aids/AidDetails';
import SanitaryMaterialDetails from './sanitary-material/SanitaryMaterialDetails';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Medicines />}></Route>
        <Route path='/medicineDetails/:id' element={<MedicineDetails/>}></Route>
        <Route path='/supplements' element={<Supplements />}></Route>
        <Route path='/supplementDetails/:id' element={<SupplementDetails />}></Route>
        <Route path='/cosmetics' element={<Cosmetics />}></Route>
        <Route path='/cosmeticDetails/:id' element={<CosmeticDetails />}></Route>
        <Route path='/sanitaryMaterials' element={<SanitaryMaterial />}></Route>
        <Route path='/sanitaryMaterialDetails/:id' element={<SanitaryMaterialDetails />}></Route>
        <Route path='/aids' element={<Aids />}></Route>
        <Route path='/aidDetails/:id' element={<AidDetails />}></Route>
        <Route path='/devices' element={<Devices />}></Route>
        <Route path='/deviceDetails/:id' element={<DeviceDetails/>}></Route>
        <Route path='/add' element={<New />}></Route>
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

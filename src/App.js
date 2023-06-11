import { Menu } from './components';
import { Inicio, Contacto, Nosotros, Menues } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


 function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/menues' element={<Menues />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/nosotros' element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

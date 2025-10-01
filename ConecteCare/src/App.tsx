import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import FAQ from './pages/FAQ';
import Contato from './pages/Contato';
import Teleconsulta from './pages/Teleconsulta'; 
import MenuCuidador from './pages/MenuCuidador';
import CadastroCuidador from './pages/CadastroCuidador'; 
import GuiaUsuario from './pages/GuiaUsuario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guia-usuario" element={<GuiaUsuario/>} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro-cuidador" element={<CadastroCuidador />} />
        <Route path="/teleconsulta" element={<Teleconsulta />} /> 
        <Route path="/menu-cuidador" element={<MenuCuidador />} />
      </Routes>
    </Router>
  );
}

export default App;
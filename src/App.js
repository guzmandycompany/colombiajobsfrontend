import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Empresas from './components/Empresas';
import SalariosBuscados from './components/SalariosBuscados';
import Horarios from './components/Horarios';
import CategoriasdeEmpleo from './components/CategoriasEmpleo';
import Footers from './components/Footers';
import HomePage from './components/Homepage'; // Corregido: Mayúscula en HomePage
import Capacitacion from './components/Capacitaciones';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from "./components/routes/PrivateRoutes"; // Asegúrate que este componente esté bien implementado

const App = () => {
    return (
        <Router>
            <div>
                <Navbar /> {/* Navbar solo se renderiza una vez aquí */}
                <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* Rutas privadas */}
    <Route element={<PrivateRoute />}>
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/salarios-buscados" element={<SalariosBuscados />} />
        <Route path="/horarios-disponibles" element={<Horarios />} />
        <Route path="/categorias" element={<CategoriasdeEmpleo />} />
        <Route path="/capacitaciones" element={<Capacitacion />} />
    </Route>
</Routes>

                
                <Footers />
            </div>
        </Router>
    );
};

export default App;

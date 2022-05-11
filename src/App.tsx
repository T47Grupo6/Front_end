import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaCategoria from './components/categoria/listacategoria/ListaCategoria';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroCategoria from './components/categoria/cadastroCategoria/CadastroCategoria';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <Router>
      <Navbar />
        <div style={{ minHeight: '100vh' }}>
          <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/categoria" element={<ListaCategoria />} />
            <Route path="/posts" element={<ListaPostagem />} />
            <Route path="/formularioProduto" element={<CadastroPost />} />
            <Route path="/formularioProduto/:id" element={<CadastroPost />} />
            <Route path="/formularioCategoria" element={<CadastroCategoria />} />
            <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />
            <Route path="/deletarProduto/:id" element={<DeletarPostagem />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

          </Routes>
        </div>
        <Footer />  
    </Router > 
  );
}
 
export default App;
import React from "react";
import "./componentes/Home/styles.css";
import AppNavbar from "/src/componentes/AppNavbar";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <AppNavbar />
      {/* Outros componentes e rotas */}

      <ul class="Produtos">
        <Link to="/produtos/catalogo">Consulta catalogo de produtos</Link>
        <p></p>
        <Link to="/produtos/cadastrar">Cadastrar produto</Link>
        <p></p>
        <Link to="/produtos/upload">Upload</Link>
        <p></p>
      </ul>
      <ul class="Usuario">
        <Link to="/Cadastro">CadastrarUsuario</Link>
      </ul>
      <footer></footer>
    </div>
  );
};
export default Home;

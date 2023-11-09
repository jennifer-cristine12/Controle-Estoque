import Home from "./Home";
import "./styles.css";
import ConsultaCatalogo from "./Paginas/Produto/ConsultaCatalogo";
import CadastrarProduto from "./Paginas/Produto/CadastrarProduto/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UploadImagem from "/src/Paginas/Produto/UploadImagem";
import Login from "./componentes/LoginUsuario/Login";
import ExcluirProduto from "/src/Paginas/Produto/ExcluirProduto";
import CadastroUsuario from "./componentes/CadastroUsuario";
import HomeProdutos from "./Paginas/Produto/HomeProdutos/Index";
import HomeKits from "./Paginas/Kits/HomeKits";
import HomeFornecedores from "./Paginas/Fornecedores/HomeFornecedores";
import AtualizarProduto from "/src/Paginas/Produto/AtualizarProduto/index";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos/catalogo" element={<ConsultaCatalogo />} />
        <Route path="/produtos/cadastrar" element={<CadastrarProduto />} />
        <Route path="/produtos/upload" element={<UploadImagem />} />
        <Route path="/produtos/Alterar" element={<UploadImagem />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/produtos/Excluir" element={<ExcluirProduto />} />
        <Route path="/Cadastro" element={<CadastroUsuario />} />
        <Route path="/produtos" element={<HomeProdutos />} />
        <Route path="/Kits" element={<HomeKits />} />
        <Route path="/Fornecedores" element={<HomeFornecedores />} />
        <Route path="/produtos/Alterar" element={<AtualizarProduto />} />
      </Routes>
    </Router>
  );
};
export default App;

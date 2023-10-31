import Home from "./Home";
import "./styles.css";
import ConsultaCatalogo from "./componentes/ConsultaCatalogo";
import CadastrarProduto from "./componentes/CadastrarProduto/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UploadImagem from "./componentes/UploadImagem";
import Login from "./componentes/LoginUsuario/Login";
import ExcluirProduto from "./componentes/ExcluirProduto";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos/catalogo" element={<ConsultaCatalogo />} />
        <Route path="/produtos/cadastrar" element={<CadastrarProduto />} />
        <Route path="/produtos/upload" element={<UploadImagem />} />
        <Route path="/produtos/Alterar" element={<UploadImagem />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/produtos/Excluir" element={<ExcluirProduto />} />
      </Routes>
    </Router>
  );
};
export default App;

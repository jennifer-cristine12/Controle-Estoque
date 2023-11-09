import AppNavbar from "/src/componentes/AppNavbar";
import { Link } from "react-router-dom";
const HomeFornecedores = () => {
  return (
    <div>
      <AppNavbar />
      <Link to="/Forenecedores/cadastrar">Seja um fornecedor</Link>
      <p></p>
      <Link to="/Fornecedores/consultar">Consultar fornecedores</Link>
      <p></p>
    </div>
  );
};
export default HomeFornecedores;

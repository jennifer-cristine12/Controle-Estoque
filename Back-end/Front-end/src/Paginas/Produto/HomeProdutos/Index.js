import AppNavbar from "/src/componentes/AppNavbar";
import { Link } from "react-router-dom";
const HomeProdutos = () => {
  return (
    <div>
      <AppNavbar />
      <Link to="/produtos/cadastrar">Cadastrar produto</Link>
      <p></p>
      <Link to="/produtos/catalogo">Consultar produtos</Link>
      <p></p>

      <Link to="/produtos/upload">Upload</Link>
      <p></p>
    </div>
  );
};
export default HomeProdutos;

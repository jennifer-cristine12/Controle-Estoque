import AppNavbar from "/src/componentes/AppNavbar";
import { Link } from "react-router-dom";
const HomeKits = () => {
  return (
    <div>
      <AppNavbar />
      <Link to="/Kits/cadastrar">Cadastrar kits</Link>
      <p></p>
      <Link to="/Kits/consultar">Consultar kits</Link>
      <p></p>
    </div>
  );
};
export default HomeKits;

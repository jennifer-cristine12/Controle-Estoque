import { useNavigate } from "react-router-dom";
import AppNavbar from "/src/componentes/AppNavbar";
import Button from "react-bootstrap/Button";
import "./Styles.css";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
const ExcluirProduto = () => {
  const Cadastrar = () => {
    navigate("/Produtos/cadastrar");
  };
  const navigate = useNavigate();
  return (
    <div>
      <h3>Consultar Catalogo</h3>
      <AppNavbar />
      <Button
        onClick={Cadastrar}
        variant="primary"
        size="lg"
        className="novo"
        active
      >
        Novo produto
      </Button>{" "}
      <Button variant="secondary" size="lg" active></Button>
      <table id="produtos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Valor Total</th>
            <th>Imagem</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <Image src="holder.js/100px250" fluid />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/produtos/Alterar">Editar</Dropdown.Item>
                  <Dropdown.Item href="/produtos/excluir">
                    Excluir
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExcluirProduto;

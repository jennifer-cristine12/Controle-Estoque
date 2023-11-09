import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConverteBase64ToImage from "/src/componentes/imagem/ConverteBase64ToImage";
import "./styles.css";
import AppNavbar from "/src/componentes/AppNavbar";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
const ConsultaCatalogo = () => {
  const Cadastrar = () => {
    navigate("/Produtos/cadastrar");
  };
  const navigate = useNavigate();
  const ExcluirProduto1 = () => {
    alert("Deseja excluir o produto");
    navigate("/Produtos/Excluir");
  };
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState(null);
  useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/api/v1/produtos");
        if (!resposta.ok) {
          throw new Error();
        }
        const dados = await resposta.json(); //retorna um array de objetos json
        //apresenta os dados na console como um string json
        console.log(JSON.stringify(dados));
        //carrega os dados na variavel produto
        setProdutos(dados);
      } catch (error) {
        setErro(error.message);
      }
    };

    consulta();
  }, []);
  if (erro)
    return (
      <>
        <h3>Consulta Catalogo </h3>

        <p>Erro na consulta: {erro}</p>
      </>
    );
  return (
    <div>
      <h3>Consulta Catalogo</h3>
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
            <th>opções</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.descricao}</td>
              <td>{produto.categoria}</td>
              <td>{produto.quantidadeU}</td>
              <td>{produto.valUnitario}</td>
              <td>{produto.valTotal}</td>
              <td>
                <img src={ConverteBase64ToImage(produto.imagem)} alt="Imagem" />
              </td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <Image src="holder.js/100px250" fluid />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/produtos/Alterar">
                      Editar
                    </Dropdown.Item>
                    <Dropdown.Item onClick={ExcluirProduto1}>
                      Excluir
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ConsultaCatalogo;

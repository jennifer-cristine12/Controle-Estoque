import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import AppNavbar from "/src/componentes/AppNavbar";
import ConverteBase64ToImage from "/src/componentes/imagem/ConverteBase64ToImage";
const CadastrarProduto = () => {
  const [file, setFile] = useState(null);
  const [id, setId] = useState("");
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };
  const handleUpload = async () => {};

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const navigate = useNavigate(); //navegardor de rotas
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [quantidadeU, setQuantidadeU] = useState("");
  const [valUnitario, setValUnitario] = useState("");
  const [valTotal, setValTotal] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [produtos] = useState([]);

  const handleCadastrarProduto = async () => {
    if (!file) {
      alert("Selecione um arquivo antes de enviar.");
      return;
    }
    if (!id) {
      alert("Informe um ID antes de enviar.");
      return;
    }
    const formData = new FormData();
    formData.append("id", id);
    formData.append("file", file);
    try {
      const response = await fetch(
        "http://localhost:8080/api/v1/produtos/imadb",
        {
          method: "POST",
          body: formData
        }
      );
      if (response.ok) {
        alert("Upload do arquivo concluído com sucesso!");
      } else {
        alert("Ocorreu um erro ao enviar o arquivo.");
      }
    } catch (error) {
      alert("Ocorreu um erro ao enviar o arquivo.");
    }
    const produto = {
      descricao,
      categoria,
      quantidadeU: parseInt(quantidadeU, 0), // Converter quantidade para número inteiro
      valUnitario: parseFloat(valUnitario), // Converter Valor Unitario para número
      valTotal: parseFloat(valTotal) // Converter Valor Total para número, quantidade*valorU
    };
    try {
      const resposta = await fetch("http://localhost:8080/api/v1/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(produto)
      });
      if (!resposta.ok) {
        throw new Error("Erro ao cadastrar o produto.");
      }
      setMensagem("Produto cadastrado com sucesso!");
    } catch (error) {
      setMensagem(
        "Erro ao cadastrar o produto. Verifique os dados informados."
      );
    }
  };
  const handleCancelar = () => {
    // Navegar para a rota "/home"
    navigate("/home");
  };

  const title = <h2>{"Cadastrar Produto"}</h2>;
  return (
    <div>
      <AppNavbar />
      <Container>
        {title}
        <Form>
          <FormGroup>
            <Label for="descricao"> Descrição </Label>
            <Input
              id="descricao"
              type="text"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
            <br />
            <Label for="categoria">Categoria</Label>
            <Input
              id="categoria"
              type="text"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            />
            <br />
            <Label for="quantidade">Quantidade</Label>
            <Input
              id="quantidade"
              type="text"
              value={quantidadeU}
              onChange={(e) => setQuantidadeU(e.target.value)}
            />
            <br />
            <Label for="valUnitario">Valor Unitário</Label>
            <Input
              id="valUnitario"
              type="text"
              value={valUnitario}
              onChange={(e) => setValUnitario(e.target.value)}
            />
            <br />
            <Label for="valTotal">Valor Total</Label>
            <Input
              id="valTotal"
              type="text"
              value={valTotal}
              onChange={(e) => setValTotal(e.target.value)}
            />
            <br />
            <input type="file" accept=".jpg" onChange={handleFileChange} />
            {produtos.map((produto) => (
              <img src={ConverteBase64ToImage(produto.imagem)} alt="Imagem" />
            ))}
            ;
            <input
              type="text"
              value={id}
              onChange={handleIdChange}
              placeholder="Informe o ID"
            />
            <button onClick={handleUpload}>Enviar</button>
            <p></p>
            <Button color="primary" onClick={handleCadastrarProduto}>
              Cadastrar Produto
            </Button>{" "}
            <Button color="secondary" onClick={handleCancelar}>
              Voltar
            </Button>
            {mensagem && <div>{mensagem}</div>}
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};
export default CadastrarProduto;

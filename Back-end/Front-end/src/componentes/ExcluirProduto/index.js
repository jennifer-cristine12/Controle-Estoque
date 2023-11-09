import { useNavigate } from "react-router-dom";

const ExcluirProduto = () => {
  const navigate = useNavigate();
  const handleVoltar = () => {
    // Navegar para a rota "/home"
    navigate("/home");
  };
  return (
    <div>
      <button onClick={handleVoltar}>voltar</button>
      <h3>Consulta Catalogo</h3>

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
            <th>alterar/excluir</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ExcluirProduto;

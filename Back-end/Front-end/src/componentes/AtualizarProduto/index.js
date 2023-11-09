import React, { useState } from "react";
import axios from "axios";

const AtualizarProduto = () => {
  const [productId, setProductId] = useState("");
  const [updatedProduct, setUpdatedProduct] = useState({
    descricao: "",
    categoria: "",
    quantidadeU: 0,
    valUnitario: 0.0,
    valTotal: 0.0
  });

  const handleUpdate = () => {
    axios
      .put(`/api/products/${productId}`, updatedProduct)
      .then((response) => {
        // Handle the updated product response here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={updatedProduct.descricao}
        onChange={(e) =>
          setUpdatedProduct({ ...updatedProduct, descricao: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Categoria"
        value={updatedProduct.descricao}
        onChange={(e) =>
          setUpdatedProduct({ ...updatedProduct, descricao: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Quantidade"
        value={updatedProduct.descricao}
        onChange={(e) =>
          setUpdatedProduct({ ...updatedProduct, descricao: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Valor unitario"
        value={updatedProduct.descricao}
        onChange={(e) =>
          setUpdatedProduct({ ...updatedProduct, descricao: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Valor Total"
        value={updatedProduct.descricao}
        onChange={(e) =>
          setUpdatedProduct({ ...updatedProduct, descricao: e.target.value })
        }
      />

      <button onClick={handleUpdate}>Update Product</button>
    </div>
  );
};

export default AtualizarProduto;

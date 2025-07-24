import React, { useState } from "react";

export default function Administrador() {
  const [formData, setFormData] = useState({
    nome_do_produto: "",
    descricao: "",
    preco: "",
    estoque: "",
    categoria: "",
    imagem: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, imagem: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dados = new FormData();
    for (let chave in formData) {
      dados.append(chave, formData[chave]);
    }

    try {
      const resposta = await fetch(
        "http://localhost/aqua_api/cadastro_de_produto.php",
        {
          method: "POST",
          body: dados,
        }
      );

      const resultado = await resposta.json();
      alert(resultado.mensagem);
    } catch (erro) {
      alert("Erro ao cadastrar: " + erro.message);
    }
  };

  return (
    <div className="conteudo">
      <h2>Cadastrar Produto</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          name="nome_do_produto"
          placeholder="Nome do produto"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="descricao"
          placeholder="Descrição"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="estoque"
          placeholder="Estoque"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="categoria"
          placeholder="Categoria"
          onChange={handleChange}
          required
        />
        <input type="file" name="imagem" onChange={handleChange} required />
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
}

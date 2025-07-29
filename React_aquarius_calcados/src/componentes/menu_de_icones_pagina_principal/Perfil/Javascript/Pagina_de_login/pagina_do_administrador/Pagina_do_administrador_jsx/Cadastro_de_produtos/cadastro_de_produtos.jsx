// CadastrarProduto.jsx
import React, { useState } from 'react';

export default function CadastrarProduto() {
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(null);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');
  const [categoria, setCategoria] = useState([]);

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagem(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleCategoria = (e) => {
    const { value, checked } = e.target;
    setCategoria((prev) =>
      checked ? [...prev, value] : prev.filter((cat) => cat !== value)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dados = {
      nome,
      descricao,
      preco,
      estoque,
      categoria,
      imagem,
    };
    console.log('Produto criado:', dados);
    alert('Produto criado com sucesso!');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>cadastrar_produto</h2>

      <div style={styles.previewContainer}>
        {preview && <img src={preview} alt="preview" style={styles.preview} />}
        <input type="file" onChange={handleImagemChange} />
      </div>

      <label>nome do produto:</label>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} style={styles.input} />

      <label>descrição:</label>
      <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} style={styles.input} />

      <label>preço:</label>
      <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} style={styles.input} />

      <label>estoque:</label>
      <input type="number" value={estoque} onChange={(e) => setEstoque(e.target.value)} style={styles.input} />

      <label>categoria:</label>
      <div style={styles.checkboxGroup}>
        <label>
          <input type="checkbox" value="masculino" onChange={handleCategoria} /> masculino
        </label>
        <label>
          <input type="checkbox" value="feminino" onChange={handleCategoria} /> feminino
        </label>
      </div>

      <button type="submit" style={styles.botao}>criar produto</button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    margin: 'auto',
    padding: '2rem',
    border: '2px solid black',
    gap: '10px',
  },
  previewContainer: {
    border: '2px solid black',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  preview: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
  },
  input: {
    border: '2px solid black',
    padding: '6px',
    fontSize: '1rem',
  },
  checkboxGroup: {
    display: 'flex',
    gap: '2rem',
  },
  botao: {
    padding: '10px',
    border: '2px solid black',
    background: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

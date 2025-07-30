import React, { useState } from 'react';

export default function CadastrarProduto() {
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(null);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');
  const [categoria, setCategoria] = useState('');
  const [genero, setGenero] = useState('');
  const totalEstoque = (parseFloat(preco || 0) * parseInt(estoque || 0)).toFixed(2);

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagem(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dados = {
      nome,
      descricao,
      preco,
      estoque,
      categoria,
      genero,
      imagem,
      totalEstoque
    };
    console.log('Produto criado:', dados);
    alert('Produto criado com sucesso!');
  };

  return (
    <div style={styles.pageWrapper}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.titulo}>cadastrar_produto</h2>

        <div style={styles.previewContainer}>
          {preview ? (
            <img src={preview} alt="preview" style={styles.preview} />
          ) : (
            <p>mostrar preview da imagem escolhida</p>
          )}
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

        <label>valor total do estoque:</label>
        <div style={styles.destaque}>R$ {totalEstoque}</div>

        <label>categoria (ex: sandália, bota, tênis...):</label>
        <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} style={styles.input} />

        <label>gênero:</label>
        <div style={styles.radioGroup}>
          <label>
            <input type="radio" name="genero" value="masculino" checked={genero === "masculino"} onChange={(e) => setGenero(e.target.value)} />
            masculino
          </label>
          <label>
            <input type="radio" name="genero" value="feminino" checked={genero === "feminino"} onChange={(e) => setGenero(e.target.value)} />
            feminino
          </label>
        </div>

        <button type="submit" style={styles.botao}>criar produto</button>
      </form>
    </div>
  );
}

const styles = {
  pageWrapper: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#faf8e3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontFamily: '"Georgia", serif',
    padding: '2rem',
    boxSizing: 'border-box',
    overflowY: 'auto', // ✅ habilita scroll vertical
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '700px',
    padding: '2rem',
    border: '2px solid #42210B',
    gap: '15px',
    backgroundColor: '#fffef7',
    borderRadius: '10px',
    boxShadow: '0 0 12px rgba(0,0,0,0.1)',
  },
  titulo: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '1.5rem',
    color: '#42210B',
    marginBottom: '1rem',
  },
  previewContainer: {
    border: '2px solid black',
    height: '300px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#f8f8f8',
  },
  preview: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
  },
  input: {
    border: '2px solid black',
    padding: '10px',
    fontSize: '1rem',
    width: '100%',
    boxSizing: 'border-box',
  },
  radioGroup: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
  },
  botao: {
    padding: '12px',
    border: '2px solid black',
    background: '#42210B',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.2s',
  },
  destaque: {
    fontWeight: 'bold',
    backgroundColor: '#e0ffe0',
    padding: '10px',
    border: '1px solid green',
    textAlign: 'center',
  },
};

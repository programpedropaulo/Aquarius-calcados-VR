import { useState } from "react";

export default function PainelAdmin() {
  const [paginaAtiva, setPaginaAtiva] = useState("inicio");

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    viewBtn: {
      padding: "8px 12px",
      backgroundColor: "#eee",
      border: "1px solid #ccc",
      borderRadius: "4px",
      cursor: "pointer",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "15px",
    },
    btn: {
      padding: "12px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  function CadastrarProduto() {
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

    const stylesForm = {
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

    return (
      <form onSubmit={handleSubmit} style={stylesForm.form}>
        <h2>cadastrar_produto</h2>

        <div style={stylesForm.previewContainer}>
          {preview && <img src={preview} alt="preview" style={stylesForm.preview} />}
          <input type="file" onChange={handleImagemChange} />
        </div>

        <label>nome do produto:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} style={stylesForm.input} />

        <label>descrição:</label>
        <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} style={stylesForm.input} />

        <label>preço:</label>
        <input type="number" value={preco} onChange={(e) => setPreco(e.target.value)} style={stylesForm.input} />

        <label>estoque:</label>
        <input type="number" value={estoque} onChange={(e) => setEstoque(e.target.value)} style={stylesForm.input} />

        <label>categoria:</label>
        <div style={stylesForm.checkboxGroup}>
          <label>
            <input type="checkbox" value="masculino" onChange={handleCategoria} /> masculino
          </label>
          <label>
            <input type="checkbox" value="feminino" onChange={handleCategoria} /> feminino
          </label>
        </div>

        <button type="submit" style={stylesForm.botao}>criar produto</button>
      </form>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Painel do Administrador</h1>
        <button onClick={() => setPaginaAtiva("inicio")} style={styles.viewBtn}>
          👁️ Ver como usuário
        </button>
      </div>

      {paginaAtiva === "inicio" && (
        <div style={styles.grid}>
          <button onClick={() => setPaginaAtiva("cadastrar")} style={styles.btn}>
            📦 Cadastrar Produto
          </button>
          <button onClick={() => setPaginaAtiva("estoque")} style={styles.btn}>
            📋 Ver Estoque
          </button>
          <button onClick={() => setPaginaAtiva("caixa")} style={styles.btn}>
            💰 Ver Caixa
          </button>
          <button onClick={() => setPaginaAtiva("vendas")} style={styles.btn}>
            🛒 Vendas Online
          </button>
          <button onClick={() => setPaginaAtiva("relatorios")} style={styles.btn}>
            📈 Relatórios
          </button>
          <button onClick={() => setPaginaAtiva("config")} style={styles.btn}>
            ⚙️ Configurações
          </button>
        </div>
      )}

      {paginaAtiva === "cadastrar" && <CadastrarProduto />}

      {/* Outras seções (placeholder) */}
      {paginaAtiva === "estoque" && <p>🔧 Estoque ainda em construção.</p>}
      {paginaAtiva === "caixa" && <p>💸 Caixa ainda em construção.</p>}
      {paginaAtiva === "vendas" && <p>🛍️ Vendas Online em breve!</p>}
      {paginaAtiva === "relatorios" && <p>📊 Relatórios sendo gerados...</p>}
      {paginaAtiva === "config" && <p>⚙️ Configurações virão logo!</p>}
    </div>
  );
}

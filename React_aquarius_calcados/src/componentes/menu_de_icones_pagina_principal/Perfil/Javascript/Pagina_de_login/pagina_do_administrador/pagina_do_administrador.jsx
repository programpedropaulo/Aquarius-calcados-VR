// PainelAdmin.jsx
import { useNavigate } from "react-router-dom";

export default function PainelAdmin() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Painel do Administrador</h1>
        <button onClick={() => navigate("/")} style={styles.viewBtn}>
          👀 Ver como usuário
        </button>
      </div>

      <div style={styles.grid}>
        <button onClick={() => navigate("/admin/cadastrar-produto")} style={styles.btn}>📦 Cadastrar Produto</button>
        <button onClick={() => navigate("/admin/estoque")} style={styles.btn}>📋 Ver Estoque</button>
        <button onClick={() => navigate("/admin/caixa")} style={styles.btn}>💰 Ver Caixa</button>
        <button onClick={() => navigate("/admin/vendas-online")} style={styles.btn}>🛒 Vendas Online</button>
        <button onClick={() => navigate("/admin/relatorios")} style={styles.btn}>📈 Relatórios</button>
        <button onClick={() => navigate("/admin/configuracoes")} style={styles.btn}>⚙️ Configurações</button>
      </div>
    </div>
  );
} 
// PainelAdmin.jsx
import { useNavigate } from "react-router-dom";

// Importações dos módulos da área do admin (caso precise carregar todos no mesmo arquivo)
import Cadastro_de_produtos from "@/componentes/menu_de_icones_pagina_principal/Perfil/Javascript/Pagina_de_login/pagina_do_administrador/Pagina_do_administrador_jsx/Cadastro_de_produtos/cadastro_de_produtos";
import Estoque from "@/componentes/menu_de_icones_pagina_principal/Perfil/Javascript/Pagina_de_login/pagina_do_administrador/Pagina_do_administrador_jsx/Ver_estoque/Estoque";
import Caixa from "@/componentes/menu_de_icones_pagina_principal/Perfil/Javascript/Pagina_de_login/pagina_do_administrador/Pagina_do_administrador_jsx/Ver_caixa_financeiro/Caixa_finaceiro";
import VendasOnline from "@/componentes/menu_de_icones_pagina_principal/Perfil/Javascript/Pagina_de_login/pagina_do_administrador/Pagina_do_administrador_jsx/Vendas_online/vendas_online";
import Relatorios from "@/componentes/menu_de_icones_pagina_principal/Perfil/Javascript/Pagina_de_login/pagina_do_administrador/Pagina_do_administrador_jsx/Relatorios/Relatorios";

export default function PainelAdmin() {
  const navigate = useNavigate();

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

  // Fallback pra garantir que o retorno nunca esteja vazio
  if (!navigate) return <div>Erro ao carregar o painel.</div>;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Painel do Administrador</h1>
        <button onClick={() => navigate("/")} style={styles.viewBtn}>
          👁️ Ver como usuário
        </button>
      </div>

      <div style={styles.grid}>
        <button onClick={() => navigate("/admin/cadastrar-produto")} style={styles.btn}>
          📦 Cadastrar Produto
        </button>
        <button onClick={() => navigate("/admin/estoque")} style={styles.btn}>
          📋 Ver Estoque
        </button>
        <button onClick={() => navigate("/admin/caixa")} style={styles.btn}>
          💰 Ver Caixa
        </button>
        <button onClick={() => navigate("/admin/vendas-online")} style={styles.btn}>
          🛒 Vendas Online
        </button>
        <button onClick={() => navigate("/admin/relatorios")} style={styles.btn}>
          📈 Relatórios
        </button>
        <button onClick={() => navigate("/admin/configuracoes")} style={styles.btn}>
          ⚙️ Configurações
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";

// Importando os componentes internos
import CadastrarProduto from "@/componentes/menu_de_icones_pagina_principal/Perfil/Javascript/Pagina_de_login/pagina_do_administrador/Pagina_do_administrador_jsx/Cadastro_de_produtos/cadastro_de_produtos";
import Estoque from "@/componentes/menu_de_icones_pagina_principal/Perfil/Javascript/Pagina_de_login/pagina_do_administrador/Pagina_do_administrador_jsx/Ver_estoque/Estoque";
import Caixa from "@/componentes/menu_de_icones_pagina_principal/Perfil/Javascript/Pagina_de_login/pagina_do_administrador/Pagina_do_administrador_jsx/Ver_caixa_financeiro/Caixa_finaceiro";
import VendasOnline from "@/componentes/menu_de_icones_pagina_principal/Perfil/Javascript/Pagina_de_login/pagina_do_administrador/Pagina_do_administrador_jsx/Vendas_online/vendas_online";
import Relatorios from "@/componentes/menu_de_icones_pagina_principal/Perfil/Javascript/Pagina_de_login/pagina_do_administrador/Pagina_do_administrador_jsx/Relatorios/Relatorios";
import Configuracoes from "@/componentes/menu_de_icones_pagina_principal/Perfil/Javascript/Pagina_de_login/pagina_do_administrador/Pagina_do_administrador_jsx/Admin_configuracoes/configuracoes";

export default function PaginaDoAdministrador() {
  const [abaAtiva, setAbaAtiva] = useState("menu");

  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Georgia, serif",
      backgroundColor: "#faf8e3",
      minHeight: "100vh",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    voltarBtn: {
      padding: "8px 12px",
      backgroundColor: "#eee",
      border: "1px solid #ccc",
      borderRadius: "4px",
      cursor: "pointer",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "15px",
    },
    botao: {
      padding: "12px",
      backgroundColor: "#42210B",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };

  const voltarParaMenu = () => setAbaAtiva("menu");

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Painel do Administrador</h1>
        {abaAtiva !== "menu" && (
          <button onClick={voltarParaMenu} style={styles.voltarBtn}>
            ⬅️ Voltar ao Menu
          </button>
        )}
      </div>

      {abaAtiva === "menu" && (
        <div style={styles.grid}>
          <button onClick={() => setAbaAtiva("cadastro")} style={styles.botao}>📦 Cadastrar Produto</button>
          <button onClick={() => setAbaAtiva("estoque")} style={styles.botao}>📋 Ver Estoque</button>
          <button onClick={() => setAbaAtiva("caixa")} style={styles.botao}>💰 Ver Caixa</button>
          <button onClick={() => setAbaAtiva("vendas")} style={styles.botao}>🛒 Vendas Online</button>
          <button onClick={() => setAbaAtiva("relatorios")} style={styles.botao}>📈 Relatórios</button>
          <button onClick={() => setAbaAtiva("config")} style={styles.botao}>⚙️ Configurações</button>
        </div>
      )}

      {abaAtiva === "cadastro" && <CadastrarProduto />}
      {abaAtiva === "estoque" && <Estoque />}
      {abaAtiva === "caixa" && <Caixa />}
      {abaAtiva === "vendas" && <VendasOnline />}
      {abaAtiva === "relatorios" && <Relatorios />}
      {abaAtiva === "config" && <Configuracoes />}
    </div>
  );
}

import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

// Importando apenas o CSS corretamente
import "@/assets/menu_de_icones_pagina_principal/menu_perfil/assets_menu_perfil/css/perfil.css";

// Subcomponente flutuante com nome diferente
export function PerfilFlutuante({ onClose, zIndex, bringToFront }) {
  return (
    <div
      className="perfil-container"
      style={{ zIndex }}
      onMouseDown={bringToFront}
    >
      <div className="perfil-header">
        <h2>👤 Perfil do Usuário</h2>
        <button onClick={onClose}>✖</button>
      </div>

      <div className="perfil-body">
        <p>Seus dados pessoais aparecerão aqui.</p>
        {/* Conteúdo extra futuro */}
      </div>
    </div>
  );
}

// Subpáginas do perfil
import Pagina_de_compras from "./Javascript/Pagina_de_compras/Pagina_de_compras";
import Pagina_de_favoritos from "./Javascript/Pagina_de_favoritos/Pagina_de_favoritos";
import Pagina_de_ajuda from "./Javascript/Pagina_de_ajuda/Pagina_de_ajuda";
import Pagina_de_login from "./Javascript/Pagina_de_login/pagina_de_login/pagina_de_login";
import Pagina_sobre_nos from "./Javascript/Pagina_sobre_nos/Pagina_sobre_nos";
import Pagina_de_configuracoes from "./Javascript/Pagina_de_configuracoes/pagina_de_configuracoes";

// Componente principal de perfil com navegação
export default function Perfil() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mostrarMenu, setMostrarMenu] = useState(true);

  useEffect(() => {
    setMostrarMenu(true);
  }, [location.pathname]);

  return (
    <div className="perfil-container">
      {mostrarMenu && (
        <div className="perfil-menu">
          <button onClick={() => navigate("compras")}>🛍️ Compras</button>
          <button onClick={() => navigate("favoritos")}>❤️ Favoritos</button>
          <button onClick={() => navigate("ajuda")}>❓ Ajuda</button>
          <button onClick={() => navigate("login")}>🔐 Login</button>
          <button onClick={() => navigate("sobre-nos")}>📄 Sobre nós</button>
          <button onClick={() => navigate("configuracoes")}>⚙️ Configurações</button>
        </div>
      )}

      <div className="perfil-conteudo">
        <Routes>
          <Route path="compras" element={<Pagina_de_compras />} />
          <Route path="favoritos" element={<Pagina_de_favoritos />} />
          <Route path="ajuda" element={<Pagina_de_ajuda />} />
          <Route path="login" element={<Pagina_de_login />} />
          <Route path="sobre-nos" element={<Pagina_sobre_nos />} />
          <Route path="configuracoes" element={<Pagina_de_configuracoes />} />
        </Routes>
      </div>
    </div>
  );
}

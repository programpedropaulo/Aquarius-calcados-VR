import { useState } from "react";
import "../../../assets/menu_de_icones_pagina_principal/menu_perfil/assets_menu_perfil/css/perfil.css";


export default function Perfil() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="perfil-container">
      {menuAberto && (
        <div className="perfil-menu">
          <button>Compras</button>
          <button>Favoritos</button>
          <button>Ajuda</button>
          <button>Login</button>
          <button>Sobre nós</button>
        </div>
      )}
    </div>
  );
}

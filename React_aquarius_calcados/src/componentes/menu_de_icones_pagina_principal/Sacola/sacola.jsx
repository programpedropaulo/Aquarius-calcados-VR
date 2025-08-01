import { useState } from "react";
import "@/assets/menu_de_icones_pagina_principal/pagina_da_sacola/css/sacola.css";

function SacolaCarrinho() {
  return <div>🛒 Seus produtos estão aqui!</div>;
}

function SacolaFavoritos() {
  return <div>❤️ Seus produtos favoritos estão aqui!</div>;
}

function SacolaSugestoes() {
  return <div>✨ Sugestões com base nos seus gostos!</div>;
}

export default function Sacola() {
  const [abaAtiva, setAbaAtiva] = useState("carrinho");

  const renderizarConteudo = () => {
    switch (abaAtiva) {
      case "carrinho":
        return <SacolaCarrinho />;
      case "favoritos":
        return <SacolaFavoritos />;
      case "sugestoes":
        return <SacolaSugestoes />;
      default:
        return <SacolaCarrinho />;
    }
  };

  return (
    <div className="sacola-container">
      <h2>🛍️ Minha Sacola</h2>

      <div className="sacola-botoes">
        <button
          onClick={() => setAbaAtiva("carrinho")}
          className={abaAtiva === "carrinho" ? "ativo" : ""}
        >
          Carrinho
        </button>
        <button
          onClick={() => setAbaAtiva("favoritos")}
          className={abaAtiva === "favoritos" ? "ativo" : ""}
        >
          Favoritos
        </button>
        <button
          onClick={() => setAbaAtiva("sugestoes")}
          className={abaAtiva === "sugestoes" ? "ativo" : ""}
        >
          Sugestões
        </button>
      </div>

      <div className="sacola-conteudo">
        {renderizarConteudo()}
      </div>
    </div>
  );
}

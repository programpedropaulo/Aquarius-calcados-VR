import { useRef, useEffect, useState } from "react";
import "@/assets/menu_de_icones_pagina_principal/chat_de_busca/css/Botao_de_pesquisa.css";

export default function Busca({ onClose }) {
  const [texto, setTexto] = useState("");
  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();

    const handleClickFora = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickFora);
    return () => document.removeEventListener("mousedown", handleClickFora);
  }, [onClose]);

  return (
    <div className="janela-pesquisa" ref={containerRef}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Pesquisar na loja..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
    </div>
  );
}

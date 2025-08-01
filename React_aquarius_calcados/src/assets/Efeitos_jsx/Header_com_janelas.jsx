import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Componentes flutuantes
import Pesquisa from "@/componentes/menu_de_icones_pagina_principal/Funcao_de_pesquisa/buscar";
import Chat_vendendor from "@/componentes/menu_de_icones_pagina_principal/Chat_com_vendedor/chat_com_vendedor";
import Sacola from "@/componentes/menu_de_icones_pagina_principal/Sacola/sacola";
import Perfil from "@/componentes/menu_de_icones_pagina_principal/Perfil/perfil";

// Imagens
import logo from "@/assets/pagina_principal/Imagens/logo_aquarius-removebg-preview.png";
import lupaIcon from "@/assets/pagina_principal/Imagens/lupa_menu-removebg-preview.png";
import sacolaIcon from "@/assets/pagina_principal/Imagens/sacola_menu-removebg-preview.png";
import perfilIcon from "@/assets/pagina_principal/Imagens/icone_perfil-removebg-preview.png";
import chatIcon from "@/assets/pagina_principal/Imagens/icone_de_chat-removebg-preview.png";

export default function HeaderComJanelas() {
  const [mostrarPerfil, setMostrarPerfil] = useState(false);
  const [mostrarChat, setMostrarChat] = useState(false);
  const [mostrarPesquisa, setMostrarPesquisa] = useState(false);
  const [mostrarSacola, setMostrarSacola] = useState(false);

  const perfilRef = useRef();
  const chatRef = useRef();
  const pesquisaRef = useRef();
  const sacolaRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (perfilRef.current && !perfilRef.current.contains(event.target)) setMostrarPerfil(false);
      if (chatRef.current && !chatRef.current.contains(event.target)) setMostrarChat(false);
      if (pesquisaRef.current && !pesquisaRef.current.contains(event.target)) setMostrarPesquisa(false);
      if (sacolaRef.current && !sacolaRef.current.contains(event.target)) setMostrarSacola(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="top-bar">
        <div className="header-content">
          <img src={logo} alt="Logo Aquarius" className="logo_aquarius" />

          <div className="header-icons">
            <img src={lupaIcon} onClick={() => setMostrarPesquisa((v) => !v)} style={{ cursor: "pointer" }} />
            <img src={chatIcon} onClick={() => setMostrarChat((v) => !v)} style={{ cursor: "pointer" }} />
            <img src={sacolaIcon} onClick={() => setMostrarSacola((v) => !v)} style={{ cursor: "pointer" }} />
            <div className="divisor-linha-perfil" />
            <img src={perfilIcon} onClick={() => setMostrarPerfil((v) => !v)} style={{ cursor: "pointer" }} />
          </div>
        </div>
      </header>

      {mostrarPesquisa && <div ref={pesquisaRef}><Pesquisa /></div>}
      {mostrarChat && <div ref={chatRef}><Chat_vendendor /></div>}
      {mostrarSacola && <div ref={sacolaRef}><Sacola /></div>}
      {mostrarPerfil && <div ref={perfilRef}><Perfil /></div>}
    </>
  );
}

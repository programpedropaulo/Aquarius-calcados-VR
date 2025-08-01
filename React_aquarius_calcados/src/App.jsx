import "@/App.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Menu escrito
import Pagina_novidades from "@/componentes/menu_escrito_pagina_principal/Pagina_novidades";
import Pagina_promocoes from "@/componentes/menu_escrito_pagina_principal/Pagina_promocoes";
import Pagina_masculina from "@/componentes/menu_escrito_pagina_principal/Pagina_masculina";
import Pagina_feminina from "@/componentes/menu_escrito_pagina_principal/Pagina_feminina";

// Menu de ícones
import Busca from "@/componentes/menu_de_icones_pagina_principal/Funcao_de_pesquisa/buscar";
import Chat_vendendor from "@/componentes/menu_de_icones_pagina_principal/Chat_com_vendedor/chat_com_vendedor";
import Sacola from "@/componentes/menu_de_icones_pagina_principal/Sacola/sacola";
import Perfil from "@/componentes/menu_de_icones_pagina_principal/Perfil/perfil";

// Imagens
import logo from "@/assets/pagina_principal/Imagens/logo_aquarius-removebg-preview.png";
import lupaIcon from "@/assets/pagina_principal/Imagens/lupa_menu-removebg-preview.png";
import sacolaIcon from "@/assets/pagina_principal/Imagens/sacola_menu-removebg-preview.png";
import perfilIcon from "@/assets/pagina_principal/Imagens/icone_perfil-removebg-preview.png";
import chatIcon from "@/assets/pagina_principal/Imagens/icone_de_chat-removebg-preview.png";

function App() {
  const [pagina, setPagina] = useState("home");

  // Janela ativa (perfil, sacola, pesquisa)
  const [ativo, setAtivo] = useState(null);

  // Chat fica isolado e só fecha manualmente
  const [mostrarChat, setMostrarChat] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.pathname.startsWith("/Aquarius-calcados-VR")) {
      navigate("/Aquarius-calcados-VR/login");
    }
  }, []);

  const renderConteudo = () => {
    switch (pagina) {
      case "Novidades":
        return <Pagina_novidades />;
      case "Promoções":
        return <Pagina_promocoes />;
      case "Masculino":
        return <Pagina_masculina />;
      case "Feminino":
        return <Pagina_feminina />;
      default:
        return <h2>Bem-vindo à loja Aquarius</h2>;
    }
  };

  const toggleAtivo = (nome) => {
    setAtivo((prev) => (prev === nome ? null : nome));
  };

  return (
    <>
      <header className="top-bar">
        <div className="header-content">
          <img src={logo} alt="Logo Aquarius" className="logo_aquarius" />

          <nav className="menu">
            <ul>
              <li><div className="divisor-linha" /></li>
              <li onClick={() => setPagina("Novidades")}>Novidades</li>
              <li onClick={() => setPagina("Promoções")}>Promoções</li>
              <li onClick={() => setPagina("Masculino")}>Masculino</li>
              <li onClick={() => setPagina("Feminino")}>Feminino</li>
            </ul>
          </nav>

          <div className="header-icons">
            <img src={lupaIcon} alt="Buscar" onClick={() => toggleAtivo("pesquisa")} style={{ cursor: "pointer" }} />
            <img src={chatIcon} alt="Chat com vendedor" onClick={() => setMostrarChat(true)} style={{ cursor: "pointer" }} />
            <img src={sacolaIcon} alt="Sacola" onClick={() => toggleAtivo("sacola")} style={{ cursor: "pointer" }} />
            <div className="divisor-linha-perfil" />
            <img src={perfilIcon} alt="Perfil" className="perfil_do_usuario" onClick={() => toggleAtivo("perfil")} style={{ cursor: "pointer" }} />
          </div>
        </div>

        {/* Janelas flutuantes (somente uma visível ao mesmo tempo, exceto o chat) */}
        {ativo === "pesquisa" && <Busca onClose={() => setAtivo(null)} />}
        {ativo === "sacola" && <Sacola onClose={() => setAtivo(null)} />}
        {ativo === "perfil" && <Perfil onClose={() => setAtivo(null)} />}
        {mostrarChat && <Chat_vendendor onClose={() => setMostrarChat(false)} />}
      </header>

      <main className="conteudo">
        {renderConteudo()}
      </main>
    </>
  );
}

export default App;

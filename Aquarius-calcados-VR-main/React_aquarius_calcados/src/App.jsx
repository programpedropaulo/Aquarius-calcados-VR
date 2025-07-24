import "./App.css";
import { useState } from "react";

//Importação de Componentes Carrossel
import Administrador from "./componentes/Administrador";
import Login from "./componentes/Login";
import Pagina_novidades from "./componentes/Pagina_novidades";
import Pagina_promocoes from "./componentes/Pagina_promocoes";
import Pagina_masculina from "./componentes/Pagina_masculina";
import Pagina_feminina from "./componentes/Pagina_feminina";
import Pesquisa from "./componentes/buscar"
import Chat_vendendor from "./componentes/chat_com_vendedor"
import Sacola from "./componentes/sacola"
import Perfil from "./componentes/perfil"

// Importção de imagens
import logo from "./assets/imagens pagina principal/logo_aquarius-removebg-preview.png";
import lupaIcon from "./assets/imagens pagina principal/lupa_menu-removebg-preview.png";
import sacolaIcon from "./assets/imagens pagina principal/sacola_menu-removebg-preview.png";
import perfilIcon from "./assets/imagens pagina principal/icone_perfil-removebg-preview.png";
import chatIcon from "./assets/imagens pagina principal/icone_de_chat-removebg-preview.png";

function App() {
  const [pagina, setPagina] = useState("home");

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
      case "Administrador":
        return <Administrador />;
      case "Login":
        return <Login />;
    }
};

  return (
    <>
      <header className="top-bar">
        <div className="header-content">
          <img src={logo} alt="Logo Aquarius" className="logo_aquarius" />

          <nav className="menu">
            <ul>
              <li>
                <div className="divisor-linha" />
              </li>
              <li onClick={() => setPagina("Novidades")}>Novidades</li>

              <li onClick={() => setPagina("Promoções")}>Promoções</li>

              <li onClick={() => setPagina("Masculino")}>Masculino</li>

              <li onClick={() => setPagina("Feminino")}>Feminino</li>
            </ul>
          </nav>

          <div className="header-icons">
            <img
              src={lupaIcon}
              alt="Buscar"
              onClick={() => setPagina("Pesquisa")}
              style={{ cursor: "pointer" }}
            />

            <img
              src={chatIcon}
              alt="Chat com vendedor"
              onClick={() => setPagina("Chat")}
              style={{ cursor: "pointer" }}
            />

            <img
              src={sacolaIcon}
              alt="Sacola"
              onClick={() => setPagina("Sacola")}
              style={{ cursor: "pointer" }}
            />

            <div className="divisor-linha-perfil" />

            <img
              src={perfilIcon}
              alt="Perfil"
              className="perfil_do_usuario"
              onClick={() => setPagina("Perfil")}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </header>

      <main className="conteudo">{renderConteudo()}</main>
    </>
  );
}

export default App;


//Pesquisar sobre AJAX php
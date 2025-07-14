import "./App.css";
import logo from "./assets/imagens pagina principal/logo_aquarius-removebg-preview.png";
import { useState } from "react";
import lupaIcon from "./assets/imagens pagina principal/lupa_menu-removebg-preview.png";
import sacolaIcon from "./assets/imagens pagina principal/sacola_menu-removebg-preview.png";
import perfilIcon from "./assets/imagens pagina principal/icone_perfil-removebg-preview.png";
import chatIcon from "./assets/imagens pagina principal/icone_de_chat-removebg-preview.png";

function App() {
  const [pagina, setPagina] = useState("home");

  const renderConteudo = () => {
    switch (pagina) {
      case "Masculino":
        return <h2>Seção Masculina</h2>;
      case "Feminino":
        return <h2>Seção Feminina</h2>;
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
            <img src={lupaIcon} alt="Buscar" />
            <img src={chatIcon} alt="Chat com vendendor" />
            <img src={sacolaIcon} alt="Sacola" />
            <div className="divisor-linha-perfil" />
            <img src={perfilIcon} alt="Perfil" className=" perfil_do_usuario" />
          </div>
        </div>
      </header>

      <main className="conteudo">{renderConteudo()}</main>
    </>
  );
}

export default App;

import "./App.css";
import Carrossel from "./componentes/Carrossel";
import { useState } from "react";

// 🖼 Imagens
import logo from "./assets/imagens pagina principal/logo_aquarius-removebg-preview.png";
import lupaIcon from "./assets/imagens pagina principal/lupa_menu-removebg-preview.png";
import sacolaIcon from "./assets/imagens pagina principal/sacola_menu-removebg-preview.png";
import perfilIcon from "./assets/imagens pagina principal/icone_perfil-removebg-preview.png";
import chatIcon from "./assets/imagens pagina principal/icone_de_chat-removebg-preview.png";
import personagem_aqua from "./assets/imagens pagina principal/Aqua-removebg-preview.png";


function App() {
  const [pagina, setPagina] = useState("home");

  // 🟦 Produtos de exemplo (pode deixar vazio se quiser usar backend depois)
  const produtosMasculinos = [
    { nome: "Tênis Esportivo", imagem: "/img/masculino1.jpg" },
    { nome: "Bota Casual", imagem: "/img/masculino2.jpg" },
    { nome: "Chinelo Slide", imagem: "/img/masculino3.jpg" },
  ];

  const produtosFemininos = [
    { nome: "Salto Alto", imagem: "/img/feminino1.jpg" },
    { nome: "Tênis Casual", imagem: "/img/feminino2.jpg" },
    { nome: "Rasteirinha", imagem: "/img/feminino3.jpg" },
  ];

  const novidades = [
    { nome: "Lançamento Aqua 1", imagem: "/img/novidade1.jpg" },
    { nome: "Lançamento Aqua 2", imagem: "/img/novidade2.jpg" },
    { nome: "Lançamento Aqua 3", imagem: "/img/novidade3.jpg" },
  ];

  const promocoes = [
    { nome: "Tênis com 50%", imagem: "/img/promo1.jpg" },
    { nome: "Bota 30% OFF", imagem: "/img/promo2.jpg" },
    { nome: "Leve 2 Pague 1", imagem: "/img/promo3.jpg" },
  ];

  // 🔄 Renderização dinâmica do conteúdo
  const renderConteudo = () => {
    switch (pagina) {
      case "Masculino":
        return (
          <Carrossel titulo="Linha Masculina" produtos={produtosMasculinos} />
        );
      case "Feminino":
        return (
          <Carrossel titulo="Linha Feminina" produtos={produtosFemininos} />
        );
      case "Novidades":
        return <Carrossel titulo="Novidades" produtos={novidades} />;
      case "Promoções":
        return <Carrossel titulo="Promoções" produtos={promocoes} />;
      default:
        return null;
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
            <img src={chatIcon} alt="Chat com vendedor" />
            <img src={sacolaIcon} alt="Sacola" />
            <div className="divisor-linha-perfil" />
            <img src={perfilIcon} alt="Perfil" className="perfil_do_usuario" />
          </div>
        </div>
      </header>

      <main className="conteudo">
        {renderConteudo()}

        <div className="assistente_aqua">
          <img src={personagem_aqua} alt="personagem Aqua" />
        </div>

        <div className="titulos_main">
          <h1 className="primeiro_titulo">Olá!</h1>
          <h1 className="segundo_titulo">
            Pronto para encontrar o par perfeito?
          </h1>
        </div>
      </main>

      <footer className="roda_pe">
        {/* Rodapé personalizado no futuro */}
      </footer>
    </>
  );
}

export default App;

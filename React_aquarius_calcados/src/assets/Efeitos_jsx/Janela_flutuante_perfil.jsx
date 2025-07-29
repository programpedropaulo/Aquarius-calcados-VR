import { useEffect, useState } from "react";
import "@/App.css"; // ou o CSS que tiver suas animações

export default function Janela_flutuante_perfil({ children, onClose }) {
  const [fechando, setFechando] = useState(false);

  const fechar = () => {
    setFechando(true);
    setTimeout(() => {
      onClose();
    }, 300); // tempo da animação em ms
  };

  useEffect(() => {
    const escListener = (e) => {
      if (e.key === "Escape") fechar();
    };
    window.addEventListener("keydown", escListener);
    return () => window.removeEventListener("keydown", escListener);
  }, []);

  return (
    <div className="janela-flutuante-wrapper">
      <div
        className={`janela-flutuante ${fechando ? "saindo" : ""}`}
        onAnimationEnd={() => fechando && onClose()}
      >
        <div className="conteudo-flutuante" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
}

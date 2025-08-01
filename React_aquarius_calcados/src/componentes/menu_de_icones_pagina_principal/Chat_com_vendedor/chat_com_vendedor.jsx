import { useState, useEffect } from "react";
import "@/assets/menu_de_icones_pagina_principal/chat_com_vendedor/css/chat_com_vendedor.css";

export default function Chat_com_vendedor({ onClose, zIndex, bringToFront }) {
  const [mensagem, setMensagem] = useState("");
  const [mensagens, setMensagens] = useState([
    { texto: "Olá! Como posso te ajudar?", autor: "vendedor" }
  ]);

  const [ultimoOnline, setUltimoOnline] = useState(new Date());
  const [tempoAgora, setTempoAgora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => setTempoAgora(new Date()), 60000);
    return () => clearInterval(intervalo);
  }, []);

  const calcularStatus = () => {
    const diffMs = tempoAgora - ultimoOnline;
    const diffMin = Math.floor(diffMs / 60000);

    if (diffMin < 1) return "🟢 Online";
    if (diffMin === 1) return "🔘 Visto há 1 minuto";
    return `🔘 Visto há ${diffMin} minutos`;
  };

  const enviarMensagem = () => {
    if (mensagem.trim() === "") return;
    setMensagens((prev) => [...prev, { texto: mensagem, autor: "cliente" }]);
    setMensagem("");
    setUltimoOnline(new Date());
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") enviarMensagem();
  };

  return (
    <div
      className="chat-vendedor"
      onMouseDown={bringToFront}
      style={{ zIndex }}
    >
      <div className="chat-header">
        <div>
          <div>💬 Chat com o Vendedor</div>
          <div className="status-text">{calcularStatus()}</div>
        </div>
        <button onClick={onClose}>✖</button>
      </div>

      <div className="chat-body">
        {mensagens.map((msg, i) => (
          <p key={i} className={`mensagem ${msg.autor}`}>{msg.texto}</p>
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={enviarMensagem}>➤</button>
      </div>
    </div>
  );
}

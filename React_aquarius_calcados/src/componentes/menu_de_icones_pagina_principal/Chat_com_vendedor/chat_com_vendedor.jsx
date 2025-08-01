import { useRef, useState, useEffect } from "react";
import "@/assets/menu_de_icones_pagina_principal/chat_com_vendedor/css/chat_com_vendedor.css";

export default function Chat_com_vendedor({ onClose }) {
  const chatRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const offset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y,
      });
    };

    const handleMouseUp = () => setIsDragging(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const startDrag = (e) => {
    const rect = chatRef.current.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setIsDragging(true);
  };

  return (
    <div
      className="chat-vendedor"
      ref={chatRef}
      style={{ left: `${position.x}px`, bottom: `${position.y}px` }}
    >
      <div className="chat-header" onMouseDown={startDrag}>
        <span>💬 Chat com o Vendedor</span>
        <button onClick={onClose}>✖</button>
      </div>
      <div className="chat-body">
        <p>Olá! Como posso te ajudar?</p>
        {/* Futuramente, lista de mensagens aqui */}
      </div>
    </div>
  );
}

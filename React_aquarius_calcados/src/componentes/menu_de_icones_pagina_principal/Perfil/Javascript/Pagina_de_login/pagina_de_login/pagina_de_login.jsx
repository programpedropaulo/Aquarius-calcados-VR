import React, { useState } from 'react';
import Pagina_do_administrador from '@/componentes/menu_de_icones_pagina_principal/Perfil/Javascript/Pagina_de_login/pagina_do_administrador/pagina_do_administrador';


function Pagina_de_login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [logado, setLogado] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const emailAdmin = "AndreAquariusCalcadosVr";
    const senhaAdmin = "@VrCalcadosAquariusAndre";

    if (email === emailAdmin && senha === senhaAdmin) {
      setErro('');
      sessionStorage.setItem("usuario", "admin");
      setLogado(true);
    } else {
      setErro("Usuário ou senha incorretos");
    }
  };

  if (logado) {
    return <Pagina_do_administrador />;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        {erro && <p style={{ color: 'red' }}>{erro}</p>}

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="login-input"
            required
          />
          <button type="submit" className="login-button">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Pagina_de_login;

import React, { useState } from "react";
import styled from "styled-components";
import Pagina_do_administrador from "@/componentes/menu_de_icones_pagina_principal/Perfil/Javascript/Pagina_de_login/pagina_do_administrador/pagina_do_administrador";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1c1c1c, #111);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow-y: auto;
`;

const Card = styled.div`
  background-color: #222;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  background-color: #333;
  color: #fff;
  border: none;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.2rem;

  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
  background-color: #ff6600;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e65c00;
  }
`;

const ErrorMessage = styled.p`
  color: #ff4d4d;
  text-align: center;
  margin-bottom: 1rem;
`;

export default function Pagina_de_login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [logado, setLogado] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const emailAdmin = "AndreAquariusCalcadosVr";
    const senhaAdmin = "@VrCalcadosAquariusAndre";

    if (email === emailAdmin && senha === senhaAdmin) {
      setErro("");
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
    <Container>
      <Card>
        <Title>Login</Title>
        {erro && <ErrorMessage>{erro}</ErrorMessage>}

        <Form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <Button type="submit">Entrar</Button>
        </Form>
      </Card>
    </Container>
  );
}

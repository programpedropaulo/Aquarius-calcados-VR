// src/componentes/Carrossel.jsx
function pagina_inicial({ titulo, produtos }) {
  return (
    <div className="Pagina__inicial">
      <h2>{titulo}</h2>
      <div className="pagina_inicial_lista">
        {produtos.map((produto, index) => (
          <div key={index} className="pagina_inicial_item">
            <img src={produto.imagem} alt={produto.nome} />
            <p>{produto.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default pagina_inicial;

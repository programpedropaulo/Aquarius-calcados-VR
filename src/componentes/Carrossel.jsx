// src/componentes/Carrossel.jsx
function Carrossel({ titulo, produtos }) {
  return (
    <div className="carrossel">
      <h2>{titulo}</h2>
      <div className="carrossel-lista">
        {produtos.map((produto, index) => (
          <div key={index} className="carrossel-item">
            <img src={produto.imagem} alt={produto.nome} />
            <p>{produto.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrossel;

export default function ListarProdutos({ listaObjetos }) {
  return (
    <div>
      <style>
        {`
          .bloco-produtos {
            padding: 20px;
            background-color: #f0f0f0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .bloco-produto {
            margin: 32px;
            padding: 10px;
            border: 1px solid #ddd;
            width: 200px;
            height: 250px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .produto-nome {
            font-size: 18px;
            font-weight: bold;
          }

          #image-objeto {
            width: 80px;
            height: 80px;
            border-radius: 5px;
          }

          .tag-frete {
            font-size: 14px;
            color: blue;
            font-style: italic;
          }
        `}
      </style>
      <div className="bloco-produtos">
        {listaObjetos.map((produto) => (
          <div key={produto.id} className="bloco-produto">
            <p className="produto-nome">{produto.nome}</p>
            <img id="image-objeto" src={produto.image} alt={produto.nome} />
            <p>{produto.item}</p>
            <p className="tag-frete">Frete Grátis</p>
            <p>R$ {produto.preco},00</p>
          </div>
        ))}
      </div>
    </div>
  );
}
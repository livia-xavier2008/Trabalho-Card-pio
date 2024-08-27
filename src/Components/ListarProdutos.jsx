export default function ListarProdutos({ listaObjetos }) {
  return (
    <div>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');

          * {
            font-family: 'Open Sans', sans-serif;
          }

          .bloco-produtos {
            padding: 40px;
            background-color: #f0f0f0;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .bloco-produto {
            margin: 40px;
            padding: 20px;
            border: 1px solid #ddd;
            width: 300px;
            height: 400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }

          .produto-nome {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
          }

          #image-objeto {
            width: 150px;
            height: 150px;
            border-radius: 10px;
            margin-bottom: 20px;
          }

          .tag-frete {
            font-size: 16px;
            color: #337ab7;
            font-style: italic;
            margin-bottom: 10px;
          }

          .produto-preco {
            font-size: 20px;
            font-weight: bold;
            color: #337ab7;
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
            <p className="produto-preco">R$ {produto.preco},00</p>
          </div>
        ))}
      </div>
    </div>
  );
}
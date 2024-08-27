import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <style>
        {`
        .header{
background-color: gray;
            padding: 23px;
            display: flex;
            align-items: center;
          .cabecalho {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }

          .tese {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .title1, .title2, .title3 {
            margin: 0 20px;
          }

          .titulo, .tag {
            color: black;
            text-decoration: none;
          }

        `}
      </style>
      <div className="header"> 
        <div className="cabecalho"> 
          <div className="tese">
            <div className="title1">
              <Link to="/"><h3 className="titulo">Home</h3></Link>
            </div>
            <div className="title2">
              <Link to="/Produtos"><h3 className="tag">Produtos</h3></Link>
            </div>
            <div className="title3">
              <Link to="/Ofertas"><h3 className="tag">Ofertas</h3></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <style>
        {`
          .footer {
            background-color: #f9f9f9;
            padding: 10px 0;
            color: #333;
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 50px;
          }

          .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .footer-left {
            font-size: 12px;
          }

          .footer-right {
            font-size: 12px;
          }

          .footer-right a {
            text-decoration: none;
            color: #337ab7;
          }

          .footer-right a:hover {
            color: #23527c;
          }
        `}
      </style>
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            &copy; 2023 Loja de Roupas Femininas. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
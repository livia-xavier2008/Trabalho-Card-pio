import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <style>
        {`
          .footer {
            background-color: #ffb6c1;
            padding: 10px 0;
            color: #333;
            position: relative;
            bottom: 0;
            width: 100%;
            height: 50px;
          }

          .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
          }

          .footer-left {
            font-size: 12px;
            flex-basis:50%;
            text-align: right;
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
            &copy; 2024 Lxshein. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
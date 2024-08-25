import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Sobre Nós</h4>
            <p>
              A nossa loja é especializada em roupas femininas de alta qualidade.
              Nossa missão é fazer você se sentir linda e confiante.
            </p>
          </div>
          <div className="footer-column">
            <h4>Links Úteis</h4>
            <ul>
              <li>
                <Link to="/categorias/roupas">Roupas</Link>
              </li>
              <li>
                <Link to="/categorias/acessorios">Acessórios</Link>
              </li>
              <li>
                <Link to="/categorias/promocoes">Promoções</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contato</h4>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              Rua das Flores, 123 - Centro, São Paulo - SP
            </p>
            <p>
              <i className="fas fa-phone"></i>
              (11) 99999-9999
            </p>
            <p>
              <i className="fas fa-envelope"></i>
              [contato@loja.com.br](mailto:contato@loja.com.br)
            </p>
          </div>
          <div className="footer-column">
            <h4>Redes Sociais</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/loja" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/loja" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/loja" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">
          &copy; 2023 Loja de Roupas Femininas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
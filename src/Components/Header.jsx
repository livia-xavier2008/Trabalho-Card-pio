import { Link } from "react-router-dom";    
    export default function Header() {
        return (
          <header className="header">
            <div className="container">
              <nav className="nav">
                <Link to="/" className="logo">
                  <img src={logo} alt="Logo da loja" />
                </Link>
                <ul className="nav-links">
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
                <div className="nav-actions">
                  <Link to="/carrinho" className="cart-link">
                    <i className="fas fa-shopping-cart"></i>
                    Carrinho
                  </Link>
                  <Link to="/login" className="login-link">
                    <i className="fas fa-user"></i>
                    Login
                  </Link>
                </div>
              </nav>
            </div>
          </header>
        );
      }
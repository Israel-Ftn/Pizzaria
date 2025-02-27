import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div>
      <header>
        <Link to="/">Pizza Quality</Link>

        <Link className="sabores" to="/Pizzas">
          Pizzas
        </Link>
      </header>
    </div>
  );
}

export default Header;

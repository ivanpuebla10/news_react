import "./Header.scss";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="header">
      <span>SPORTS</span>
      <span className="menu">Menu</span>
      <span>
          <Link to="/">Home</Link>
      </span>
      <span>
          <Link to="/form">Form</Link>
      </span>
      <span>
          <Link to="/news">News</Link>
      </span>
    </div>
  );
};

export default Header;

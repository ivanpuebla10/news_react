import "./Header.css";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="header">
      <span>NEWS</span>
      <span className="menu">Home</span>
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

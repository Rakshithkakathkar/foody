import { Link } from "react-router-dom";
import { LOGO_IMG } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_IMG} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

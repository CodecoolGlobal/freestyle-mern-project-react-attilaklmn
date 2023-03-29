import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Layout.css";

const Layout = () => {
  // const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn"));
  }, []);

  return (
    <div className="Layout">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">
              <button type="button">Homepage</button>
            </Link>
          </li>
          <li>
            <Link to="/cardList">
              <button type="button">Cardlist</button>
            </Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="/favorites">
                <button type="button">Favorites</button>
              </Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link to="/login">
                <button type="button">Login</button>
              </Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button
                type="button"
                onClick={() => {
                  setIsLoggedIn(false);
                  localStorage.setItem("isLoggedIn", false);
                  localStorage.setItem("userLoggedIn", "");
                }}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;

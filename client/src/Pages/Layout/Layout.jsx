import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Layout.css";

const Layout = () => {
  // const navigate = useNavigate();

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
          <li>
            <Link to="/login">
              <button type="button">Login</button>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;

import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Layout.css";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <div className="Layout">
      <nav>
        <ul>
          <li>
            <Link to="/cardList">
              <button type="button">Cardlist</button>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;

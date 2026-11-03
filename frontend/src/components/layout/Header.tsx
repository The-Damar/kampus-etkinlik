import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-inner">
        <h1>Kampüs Etkinlikleri</h1>
        <p>Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin.</p>
        <nav>
          <ul>
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                Ana Sayfa
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className={({ isActive }) => (isActive ? "active" : "")}>
                Etkinlikler
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" className={({ isActive }) => (isActive ? "active" : "")}>
                Yönetim
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>
                Giriş
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
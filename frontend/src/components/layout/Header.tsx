import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  
  const getHeaderContent = () => {
    const path = location.pathname;
    if (path.startsWith("/events/")) {
      return { title: "Etkinlik Detayı", subtitle: "Etkinlik bilgilerini inceleyin." };
    }
    switch (path) {
      case "/events":
        return { title: "Tüm Etkinlikler", subtitle: "Ekim ayında kampüste düzenlenen etkinlikler." };
      case "/admin":
        return { title: "Etkinlik Yönetimi", subtitle: "Etkinlik ekleyin, düzenleyin veya silin." };
      case "/admin/new":
        return { title: "Yeni Etkinlik Ekle", subtitle: "Yeni bir kampüs etkinliği oluşturun." };
      case "/login":
        return { title: "Giriş Yap", subtitle: "Hesabınıza giriş yapın." };
      case "/register":
        return { title: "Kayıt Ol", subtitle: "Yeni üyelik oluşturun." };
      case "/forgot-password":
        return { title: "Şifremi Unuttum", subtitle: "Şifrenizi sıfırlayın." };
      default:
        return { title: "Kampüs Etkinlikleri", subtitle: "Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin." };
    }
  };

  const { title, subtitle } = getHeaderContent();

  return (
    <header>
      <div className="header-inner">
        <h1>{title}</h1>
        <p>{subtitle}</p>
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
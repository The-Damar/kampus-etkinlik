import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h2>Sayfa bulunamadı</h2>
      <p>Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
      <Link to="/" className="buton">
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}

export default NotFoundPage;
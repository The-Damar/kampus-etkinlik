import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const found = email.includes("@") ? "" : "Geçerli bir e-posta girin.";
    setError(found);
    setSent(found === "");
  };

  return (
    <div>
      <h2>Şifremi Unuttum</h2>
      <p>Kayıtlı e-posta adresinizi yazın, şifre yenileme bağlantısı gönderelim.</p>
      {sent && (
        <p className="mesaj mesaj-basari">
          Bağlantı <strong>{email}</strong> adresine gönderildi (demo).
        </p>
      )}
      <form onSubmit={handleSubmit} noValidate className="form-kapsayici">
        <div className="form-grup">
          <label htmlFor="email">E-posta</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={error ? true : undefined}
          />
          {error && <span className="hata-metni">{error}</span>}
        </div>
        <button type="submit" className="buton">
          Bağlantı gönder
        </button>
      </form>
      <div style={{ marginTop: "1rem" }}>
        <Link to="/login">← Girişe dön</Link>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
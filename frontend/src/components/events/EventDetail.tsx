import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventDetailProps {
  event: CampusEvent;
}

function EventDetail({ event }: EventDetailProps) {
  return (
    <div>
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", marginBottom: "2rem" }}>
        
        <div style={{ flex: "1", minWidth: "300px" }}>
          <div
            style={{
              backgroundColor: "#1a233a",
              border: "3px solid #e67e22",
              borderRadius: "4px",
              padding: "2rem 1rem",
              textAlign: "center",
              color: "white"
            }}
          >
            <h2 style={{ fontSize: "1.8rem", color: "white", marginBottom: "0.5rem", fontFamily: "Georgia, serif" }}>
              {event.title}
            </h2>
            <p style={{ color: "#e67e22", fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1rem" }}>
              2026
            </p>
            <p style={{ fontSize: "0.9rem", color: "#ddd" }}>
              {event.date} · {event.location}
            </p>
          </div>
          <p style={{ fontStyle: "italic", fontSize: "0.85rem", color: "#666", marginTop: "0.5rem" }}>
            {event.title} afişi
          </p>
        </div>

        
        <div
          style={{
            flex: "1",
            minWidth: "280px",
            background: "white",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            padding: "1.5rem"
          }}
        >
          <h3 style={{ marginBottom: "1rem", fontSize: "1.3rem", borderBottom: "1px solid #eee", paddingBottom: "0.5rem" }}>
            Etkinlik Künyesi
          </h3>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.95rem" }}>
            <tbody>
              <tr>
                <td style={{ padding: "0.4rem 0", fontWeight: "bold", width: "30%" }}>Tarih</td>
                <td style={{ padding: "0.4rem 0" }}>{formatDate(event.date)}, {event.time}</td>
              </tr>
              <tr>
                <td style={{ padding: "0.4rem 0", fontWeight: "bold" }}>Yer</td>
                <td style={{ padding: "0.4rem 0" }}>{event.location}</td>
              </tr>
              <tr>
                <td style={{ padding: "0.4rem 0", fontWeight: "bold" }}>Kategori</td>
                <td style={{ padding: "0.4rem 0" }}>{event.category}</td>
              </tr>
              <tr>
                <td style={{ padding: "0.4rem 0", fontWeight: "bold" }}>Kontenjan</td>
                <td style={{ padding: "0.4rem 0" }}>{event.capacity} kişi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      
      <div style={{ marginTop: "1.5rem" }}>
        <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>Açıklama</h3>
        <p style={{ marginBottom: "1.5rem", color: "#333" }}>{event.description}</p>

        <div style={{ display: "flex", gap: "1rem" }}>
          <Link to="/events" className="buton">
            ← Listeye dön
          </Link>
          <Link to={`/admin/${event.id}/edit`} className="buton">
            Bu etkinliği güncelle
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventDetail;
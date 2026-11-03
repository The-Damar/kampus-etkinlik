import { Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import { formatDate } from "../utils/format-date";

function AdminPage() {
  const { events, deleteEvent } = useEvents();

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`"${title}" etkinliğini silmek istediğinize emin misiniz?`)) {
      deleteEvent(id);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <h2>Etkinlik Yönetimi</h2>
        <Link to="/admin/new" className="buton">
          + Yeni Etkinlik Ekle
        </Link>
      </div>

      <table className="tablo">
        <thead>
          <tr>
            <th>Etkinlik</th>
            <th>Tarih</th>
            <th>Kategori</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{formatDate(event.date)}</td>
              <td>{event.category}</td>
              <td>
                <Link to={`/admin/${event.id}/edit`} style={{ marginRight: "1rem", color: "#2563eb", fontWeight: "bold" }}>
                  Düzenle
                </Link>
                <button
                  onClick={() => handleDelete(event.id, event.title)}
                  style={{
                    backgroundColor: "#dc2626",
                    color: "#ffffff",
                    border: "none",
                    padding: "0.4rem 0.8rem",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "0.85rem"
                  }}
                >
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
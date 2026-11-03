import { Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";

function AdminPage() {
  const { events, deleteEvent } = useEvents();

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`"${title}" silinsin mi?`)) {
      deleteEvent(id);
    }
  };

  return (
    <div>
      <h2>Etkinlik Yönetimi</h2>
      <Link to="/admin/new" className="buton" style={{ marginBottom: "1rem", display: "inline-block" }}>
        + Yeni etkinlik
      </Link>
      {events.length === 0 ? (
        <p>Henüz etkinlik yok.</p>
      ) : (
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
            {events.map((e) => (
              <tr key={e.id}>
                <td data-baslik="Etkinlik">{e.title}</td>
                <td data-baslik="Tarih">{e.date}</td>
                <td data-baslik="Kategori">{e.category}</td>
                <td data-baslik="İşlemler" className="islemler">
                  <Link to={`/admin/${e.id}/edit`} className="buton">
                    Düzenle
                  </Link>
                  <button onClick={() => handleDelete(e.id, e.title)} className="buton buton-sil">
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminPage;
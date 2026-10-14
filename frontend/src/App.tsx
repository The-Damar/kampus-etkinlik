import { useState, useEffect } from "react";
import "./App.css";
import type { CampusEvent, Category } from "./types/campus-event";
import { events } from "./data/events";
import { searchEvents, filterByCategory, findEventById } from "./utils/filter-events";

type PageName = "home" | "events" | "detail" | "add" | "update";

export default function App() {
  const [page, setPage] = useState<PageName>("home");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Etkinlikler Sayfası State'leri
  const [searchText, setSearchText] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "">("");

  // Sayfa Değiştirme Fonksiyonu
  function go(next: PageName, id: string | null = null) {
    setPage(next);
    setSelectedId(id);
  }

  // Seçili Etkinliği Bulma
  const selectedEvent = selectedId ? findEventById(events, selectedId) : undefined;

  // Yaklaşan 2 Etkinlik (Ana Sayfa İçin)
  const upcomingEvents = [...events]
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 2);

  // Filtrelenmiş Etkinlikler (Etkinlikler Sayfası İçin)
  const filteredEvents = filterByCategory(
    searchEvents(events, searchText),
    selectedCategory
  );

  // Dinamik Sekme Başlığı (useEffect - Adım 11)
  useEffect(() => {
    if (page === "home") {
      document.title = "Kampüs Etkinlikleri - Ana Sayfa";
    } else if (page === "events") {
      document.title = "Kampüs Etkinlikleri - Tüm Etkinlikler";
    } else if (page === "detail" && selectedEvent) {
      document.title = `Kampüs Etkinlikleri - ${selectedEvent.title}`;
    } else if (page === "add") {
      document.title = "Kampüs Etkinlikleri - Etkinlik Ekle";
    } else if (page === "update") {
      document.title = "Kampüs Etkinlikleri - Etkinlik Güncelle";
    } else {
      document.title = "Kampüs Etkinlikleri";
    }
  }, [page, selectedEvent]);

  // Kart Oluşturma Fonksiyonu (Render Card)
  function renderCard(event: CampusEvent) {
    return (
      <article className="kart" key={event.id}>
        <h2>{event.title}</h2>
        <p className="kategori-etiket">{event.category}</p>
        <p><strong>Tarih:</strong> {event.date}, {event.time}</p>
        <p><strong>Yer:</strong> {event.location}</p>
        <p><strong>Kontenjan:</strong> {event.capacity} kişi</p>
        <p>{event.description}</p>
        <button className="buton" onClick={() => go("detail", event.id)}>
          Detayları gör
        </button>
      </article>
    );
  }

  return (
    <>
      <header className="site-baslik">
        <h1>Kampüs Etkinlikleri</h1>
        <p>Fakültedeki seminer, atölye ve söyleşileri tek yerden takip edin.</p>
        <nav className="menu">
          <a
            href="#"
            className={page === "home" ? "aktif" : ""}
            aria-current={page === "home" ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              go("home");
            }}
          >
            Ana Sayfa
          </a>
          <a
            href="#"
            className={page === "events" ? "aktif" : ""}
            aria-current={page === "events" ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              go("events");
            }}
          >
            Etkinlikler
          </a>
          <a
            href="#"
            className={page === "add" ? "aktif" : ""}
            aria-current={page === "add" ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              go("add");
            }}
          >
            Ekle
          </a>
        </nav>
      </header>

      <main>
        {/* 1. ANA SAYFA */}
        {page === "home" && (
          <section>
            <h2>Yaklaşan 2 Etkinlik</h2>
            <div className="etkinlik-listesi">
              {upcomingEvents.map(renderCard)}
            </div>
            <div style={{ marginTop: "20px" }}>
              <button className="buton" onClick={() => go("events")}>
                Tüm etkinlikleri gör
              </button>
            </div>
          </section>
        )}

        {/* 2. ETKİNLİKLER SAYFASI */}
        {page === "events" && (
          <section>
            <h2>Tüm Etkinlikler</h2>
            <p>Ekim ayında kampüste düzenlenen etkinlikler.</p>
            <div className="filtre-alani">
              <div>
                <label htmlFor="search">Etkinlik ara</label>
                <input
                  id="search"
                  type="search"
                  placeholder="Örn. atölye, kariyer"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="category">Kategori</label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) =>
                    setSelectedCategory(e.target.value as Category | "")
                  }
                >
                  <option value="">Tümü</option>
                  <option value="Seminer">Seminer</option>
                  <option value="Atölye">Atölye</option>
                  <option value="Söyleşi">Söyleşi</option>
                  <option value="Yarışma">Yarışma</option>
                </select>
              </div>
            </div>

            <p style={{ margin: "15px 0" }}>
              {filteredEvents.length === 0
                ? "Aranan kriterlere uygun etkinlik bulunamadı."
                : `${filteredEvents.length} etkinlik listeleniyor.`}
            </p>

            <div className="etkinlik-listesi">
              {filteredEvents.map(renderCard)}
            </div>
          </section>
        )}

        {/* 3. DETAY SAYFASI */}
        {page === "detail" && (
          <section>
            {!selectedEvent ? (
              <div>
                <h2>Etkinlik Bulunamadı</h2>
                <button className="buton" onClick={() => go("events")}>
                  Listeye dön
                </button>
              </div>
            ) : (
              <article className="detay">
                <h2>{selectedEvent.title}</h2>
                <div className="detay-icerik">
                  {selectedEvent.image && (
                    <figure className="afis-kutu">
                      <img
                        src={selectedEvent.image}
                        alt={`${selectedEvent.title} afişi`}
                      />
                      <figcaption>{selectedEvent.title} afişi</figcaption>
                    </figure>
                  )}
                  <aside className="kunye-kutu">
                    <h3>Etkinlik Künyesi</h3>
                    <p><strong>Tarih:</strong> {selectedEvent.date}, {selectedEvent.time}</p>
                    <p><strong>Yer:</strong> {selectedEvent.location}</p>
                    <p><strong>Kategori:</strong> {selectedEvent.category}</p>
                    <p><strong>Kontenjan:</strong> {selectedEvent.capacity} kişi</p>
                  </aside>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <h3>Açıklama</h3>
                  <p>{selectedEvent.description}</p>
                </div>
                <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                  <button className="buton" onClick={() => go("events")}>
                    Listeye dön
                  </button>
                  <button
                    className="buton"
                    onClick={() => go("update", selectedEvent.id)}
                  >
                    Bu etkinliği güncelle
                  </button>
                </div>
              </article>
            )}
          </section>
        )}

        {/* 4 & 5. EKLE VE GÜNCELLE SAYFALARI */}
        {(page === "add" || page === "update") && (
          <section>
            <h2>{page === "add" ? "Etkinlik Ekle" : "Etkinlik Güncelle"}</h2>
            <p className="bilgi-notu">
              Bu sprintte form sadece görünüm; kayıt yapılmaz.
            </p>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="title">Etkinlik Adı</label>
                <input
                  id="title"
                  type="text"
                  maxLength={80}
                  placeholder="Örn. Kariyer Günleri 2026"
                />
              </div>
              <div>
                <label htmlFor="category">Kategori</label>
                <select id="category">
                  <option value="">Seçiniz</option>
                  <option value="Seminer">Seminer</option>
                  <option value="Atölye">Atölye</option>
                  <option value="Söyleşi">Söyleşi</option>
                  <option value="Yarışma">Yarışma</option>
                </select>
              </div>
              <div>
                <label htmlFor="date">Tarih</label>
                <input id="date" type="date" />
              </div>
              <div>
                <label htmlFor="time">Saat</label>
                <input id="time" type="time" />
              </div>
              <div>
                <label htmlFor="location">Yer</label>
                <input
                  id="location"
                  type="text"
                  placeholder="Örn. A Blok Konferans Salonu"
                />
              </div>
              <div>
                <label htmlFor="capacity">Kontenjan</label>
                <input id="capacity" type="number" />
              </div>
              <div>
                <label htmlFor="description">Açıklama</label>
                <textarea id="description" rows={5} />
              </div>
              <button type="submit" className="buton">
                Kaydet
              </button>
            </form>
          </section>
        )}
      </main>

      <footer className="site-altlik">
        <p>Ali Özdamar &middot; 2026</p>
      </footer>
    </>
  );
}
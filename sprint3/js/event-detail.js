import { events } from "./data.js";

const container = document.querySelector("#detay");

function formatDate(dateStr) {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  const dateObj = new Date(year, month - 1, day);
  return dateObj.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

if (container) {
  const id = new URLSearchParams(location.search).get("id");
  const event = events.find((e) => e.id === id);

  if (!event) {
    document.title = "Etkinlik Bulunamadı";
    container.innerHTML = `
      <div class="hata-kutusu">
        <h2>Etkinlik bulunamadı</h2>
        <p>Aradığınız etkinlik mevcut değil veya silinmiş olabilir.</p>
        <a href="etkinlikler.html" class="btn">Listeye dön</a>
      </div>
    `;
  } else {
    document.title = event.title;
    container.innerHTML = `
      <div class="detay-sayfasi-duzen">
        <div class="detay-sol">
          <h1>${event.title}</h1>
          <img src="afis.svg" alt="${event.title} Afişi" class="detay-afis">
          <section>
            <h2>Açıklama</h2>
            <p>${event.description}</p>
          </section>
          <div class="detay-butonlar">
            <a href="etkinlikler.html" class="btn">Listeye dön</a>
            <a href="etkinlik-guncelle.html?id=${event.id}" class="btn btn-secondary">Bu etkinliği güncelle</a>
          </div>
        </div>

        <aside class="detay-sag">
          <div class="kunye-kart">
            <h3>Etkinlik Künyesi</h3>
            <dl>
              <dt>Tarih</dt>
              <dd>${formatDate(event.date)}, ${event.time}</dd>
              <dt>Yer</dt>
              <dd>${event.location}</dd>
              <dt>Kategori</dt>
              <dd>${event.category}</dd>
              <dt>Kontenjan</dt>
              <dd>${event.capacity} kişi</dd>
            </dl>
          </div>
        </aside>
      </div>
    `;
  }
}
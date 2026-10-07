import { events } from "./data.js";

const list = document.querySelector("#etkinlik-listesi");
const aramaInput = document.querySelector("#arama");
const kategoriSelect = document.querySelector("#kategori-filtre");
const sonucSatiri = document.querySelector("#sonuc");


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


function createCard(event) {
  return `
    <article class="kart">
      <span class="kategori-etiketi">${event.category}</span>
      <h2>${event.title}</h2>
      <p><strong>Tarih:</strong> ${formatDate(event.date)}, ${event.time}</p>
      <p><strong>Yer:</strong> ${event.location}</p>
      <p><strong>Kontenjan:</strong> ${event.capacity} kişi</p>
      <p>${event.description}</p>
      <a href="etkinlik-detay.html?id=${event.id}" class="detay-link">Detayları gör</a>
    </article>
  `;
}


function render(dizi) {
  if (!list) return;
  if (dizi.length === 0) {
    list.innerHTML = `<p class="bulunamadi">Aramanıza uygun etkinlik bulunamadı.</p>`;
  } else {
    list.innerHTML = dizi.map(createCard).join("");
  }
}


function filtrele() {
  if (!aramaInput || !kategoriSelect) return;

  const aranan = aramaInput.value.trim().toLocaleLowerCase("tr-TR");
  const secilenKategori = kategoriSelect.value;

  const sonuc = events.filter((e) => {
    const metinUyuyor =
      e.title.toLocaleLowerCase("tr-TR").includes(aranan) ||
      e.description.toLocaleLowerCase("tr-TR").includes(aranan) ||
      e.location.toLocaleLowerCase("tr-TR").includes(aranan);

    const kategoriUyuyor = secilenKategori === "" || e.category === secilenKategori;

    return metinUyuyor && kategoriUyuyor;
  });

  render(sonuc);

  if (sonucSatiri) {
    if (sonuc.length === 0) {
      sonucSatiri.textContent = "Aramanıza uygun etkinlik bulunamadı.";
    } else {
      sonucSatiri.textContent = `${sonuc.length} etkinlik listeleniyor.`;
    }
  }
}


function initKategoriler() {
  if (!kategoriSelect) return;
  const kategoriler = [...new Set(events.map((e) => e.category))];
  kategoriler.forEach((kat) => {
    const opt = document.createElement("option");
    opt.value = kat;
    opt.textContent = kat;
    kategoriSelect.appendChild(opt);
  });
}


if (list) {
  if (list.dataset.limit) {
    
    const yaklasan = [...events]
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(0, Number(list.dataset.limit));
    render(yaklasan);
  } else {
    
    initKategoriler();
    render(events);

    if (sonucSatiri) {
      sonucSatiri.textContent = `${events.length} etkinlik listeleniyor.`;
    }

    if (aramaInput) aramaInput.addEventListener("input", filtrele);
    if (kategoriSelect) kategoriSelect.addEventListener("change", filtrele);

    const filtreFormu = document.querySelector("#filtre-formu");
    if (filtreFormu) {
      filtreFormu.addEventListener("submit", (e) => e.preventDefault());
    }
  }
}
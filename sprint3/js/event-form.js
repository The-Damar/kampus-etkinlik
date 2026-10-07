import { events } from "./data.js";

const form = document.querySelector("#etkinlik-formu");

if (form) {
  const isGuncelle = form.dataset.mode === "guncelle";
  const id = new URLSearchParams(location.search).get("id");
  const etkinlik = events.find((e) => e.id === id);

  
  if (isGuncelle) {
    if (!etkinlik) {
      form.outerHTML = `
        <div class="hata-kutusu">
          <p>Güncellenecek etkinlik seçilmedi. Lütfen bir etkinlik detayından girin.</p>
          <a href="etkinlikler.html" class="btn">Etkinliklere git</a>
        </div>
      `;
    } else {
      
      if (form.elements.ad) form.elements.ad.value = etkinlik.title;
      if (form.elements.kategori) form.elements.kategori.value = etkinlik.category;
      if (form.elements.tarih) form.elements.tarih.value = etkinlik.date;
      if (form.elements.saat) form.elements.saat.value = etkinlik.time;
      if (form.elements.yer) form.elements.yer.value = etkinlik.location;
      if (form.elements.kontenjan) form.elements.kontenjan.value = etkinlik.capacity;
      if (form.elements.aciklama) form.elements.aciklama.value = etkinlik.description;
    }
  }

  
  const activeForm = document.querySelector("#etkinlik-formu");
  if (activeForm) {
    activeForm.setAttribute("novalidate", "true");

    activeForm.addEventListener("submit", (e) => {
      e.preventDefault();

      
      document.querySelectorAll(".hata-mesaji").forEach((el) => (el.textContent = ""));
      document.querySelectorAll("[aria-invalid]").forEach((el) => el.removeAttribute("aria-invalid"));
      const mesajKutusu = document.querySelector("#form-mesaj");
      if (mesajKutusu) mesajKutusu.innerHTML = "";

      const fd = new FormData(activeForm);
      const data = {
        id: isGuncelle && etkinlik ? etkinlik.id : `event-${events.length + 1}`,
        title: fd.get("ad") ? fd.get("ad").trim() : "",
        category: fd.get("kategori") || "",
        date: fd.get("tarih") || "",
        time: fd.get("saat") || "",
        location: fd.get("yer") ? fd.get("yer").trim() : "",
        capacity: fd.get("kontenjan") ? Number(fd.get("kontenjan")) : null,
        description: fd.get("aciklama") ? fd.get("aciklama").trim() : ""
      };

      
      const errors = {};

      if (data.title.length < 3) {
        errors.ad = "Etkinlik adı en az 3 karakter olmalıdır.";
      }
      if (!data.category) {
        errors.kategori = "Lütfen bir kategori seçiniz.";
      }
      if (!data.date) {
        errors.tarih = "Lütfen bir tarih giriniz.";
      }
      if (!data.time) {
        errors.saat = "Lütfen bir saat giriniz.";
      }
      if (!data.location) {
        errors.yer = "Lütfen bir etkinlik yeri giriniz.";
      }
      if (data.capacity !== null && (data.capacity < 1 || data.capacity > 1000)) {
        errors.kontenjan = "Kontenjan 1 ile 1000 arasında olmalıdır.";
      }

      
      if (Object.keys(errors).length > 0) {
        for (const [key, msg] of Object.entries(errors)) {
          const field = activeForm.elements[key];
          if (field) {
            field.setAttribute("aria-invalid", "true");
            let errSpan = field.parentNode.querySelector(".hata-mesaji");
            if (!errSpan) {
              errSpan = document.createElement("span");
              errSpan.className = "hata-mesaji";
              field.parentNode.appendChild(errSpan);
            }
            errSpan.textContent = msg;
          }
        }
        return;
      }

      
      if (mesajKutusu) {
        mesajKutusu.innerHTML = `
          <div class="basari-kutusu">
            <p>Form başarıyla ${isGuncelle ? "güncellendi" : "oluşturuldu"} (Geçici gösterim):</p>
            <pre>${JSON.stringify(data, null, 2)}</pre>
          </div>
        `;
      }
    });
  }
}
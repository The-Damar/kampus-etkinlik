# Kampüs Etkinlik Backend - Sprint 7 Express REST API

Bu proje, Kampüs Etkinlik uygulamasının Express.js ile geliştirilmiş REST API sunucusudur.

## Kurulum ve Çalıştırma

```bash
cd backend
npm install
npm run dev

Sunucu varsayılan olarak http://localhost:3000 adresinde çalışır. Ortam değişkenleri .env dosyasından okunur.

Ortam Değişkenleri (.env)

PORT: Sunucunun çalışacağı port numarası (Varsayılan: 3000)


## REST Sözleşmesi Tablosu

| Method | Endpoint    | Amaç                       | Başarılı | Hata     | Durum     |
| ------ | ----------- | -------------------------- | -------- | -------- | --------- |
| GET    | /health     | Sunucu durum kontrolü      | 200      | —        | Bu sprint |
| GET    | /events     | Etkinlik listesini getirir | 200      | —        | Bu sprint |
| GET    | /events/:id | Tek bir etkinliği getirir  | 200      | 404      | Bu sprint |
| POST   | /events     | Yeni etkinlik ekler        | 201      | 400      | Bu sprint |
| PATCH  | /events/:id | Etkinlik günceller         | 200      | 400, 404 | Sprint 9  |
| DELETE | /events/:id | Etkinlik siler             | 204      | 404      | Sprint 9  |
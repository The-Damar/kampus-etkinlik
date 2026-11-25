| Method | Endpoint | Açıklama | Durum |
|--------|----------|----------|-------|
| GET | `/health` | Sunucu ve veritabanı durum kontrolü (`200`) | çalışıyor |
| GET | `/events` | Tüm etkinlikleri listeler (`?search=` ve `?category=` destekli) (`200`) | çalışıyor |
| GET | `/events/upcoming` | Bugün ve sonraki etkinlikleri tarihe göre sıralı listeler (`200`) | çalışıyor |
| GET | `/events/:id` | Belirtilen ID'ye sahip tek etkinliği getirir (`200` / `404`) | çalışıyor |
| POST | `/events` | Yeni etkinlik oluşturur (`201` / `400`) | çalışıyor |
| PATCH | `/events/:id` | Mevcut etkinliğin gönderilen alanlarını günceller (`200` / `400` / `404`) | çalışıyor |
| DELETE | `/events/:id` | Belirtilen etkinliği siler (`204` / `404`) | çalışıyor |
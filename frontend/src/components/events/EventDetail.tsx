import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventDetailProps {
  event: CampusEvent;
}

function EventDetail({ event }: EventDetailProps) {
  const imgPath = event.imageUrl || event.image;

  return (
    <article className="detay">
      {imgPath && (
        <div className="detay-gorsel-kapsayici">
          <img src={imgPath} alt={event.title} className="detay-gorsel" />
        </div>
      )}
      <dl className="detay-bilgiler">
        <div>
          <dt>Kategori</dt>
          <dd>{event.category}</dd>
        </div>
        <div>
          <dt>Tarih & Saat</dt>
          <dd>
            {formatDate(event.date)}, {event.time}
          </dd>
        </div>
        <div>
          <dt>Yer</dt>
          <dd>{event.location}</dd>
        </div>
        <div>
          <dt>Kontenjan</dt>
          <dd>{event.capacity} kişi</dd>
        </div>
      </dl>
      <p className="detay-aciklama">{event.description}</p>
    </article>
  );
}

export default EventDetail;
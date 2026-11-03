import { Link } from "react-router-dom";
import type { CampusEvent } from "../../types/campus-event";
import { formatDate } from "../../utils/format-date";

interface EventCardProps {
  event: CampusEvent;
}

function EventCard({ event }: EventCardProps) {
  return (
    <article className="kart">
      <h2>{event.title}</h2>
      <p className="kategori">{event.category}</p>
      <p>
        <strong>Tarih:</strong> {formatDate(event.date)}, {event.time}
      </p>
      <p>
        <strong>Yer:</strong> {event.location}
      </p>
      <p>
        <strong>Kontenjan:</strong> {event.capacity} kişi
      </p>
      <p>{event.description}</p>
      <Link to={`/events/${event.id}`} className="buton">
        Detayları gör
      </Link>
    </article>
  );
}

export default EventCard;
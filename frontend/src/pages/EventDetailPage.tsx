import { useParams, Link } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import EventDetail from "../components/events/EventDetail";
import NotFoundPage from "./NotFoundPage";

function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { events } = useEvents();
  const event = events.find((e) => e.id === (id ?? ""));

  if (!event) return <NotFoundPage />;

  return (
    <div>
      <h2>{event.title}</h2>
      <EventDetail event={event} />
      <div style={{ marginTop: "1rem" }}>
        <Link to="/events" className="buton">
          ← Listeye Dön
        </Link>
      </div>
    </div>
  );
}

export default EventDetailPage;
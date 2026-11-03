import { useParams } from "react-router-dom";
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
      <EventDetail event={event} />
    </div>
  );
}

export default EventDetailPage;
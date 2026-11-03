import { useParams, useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import EventForm from "../components/forms/EventForm";
import NotFoundPage from "./NotFoundPage";
import type { EventFormData } from "../types/campus-event";

function EditEventPage() {
  const { id } = useParams<{ id: string }>();
  const { events, updateEvent } = useEvents();
  const navigate = useNavigate();

  const event = events.find((e) => e.id === (id ?? ""));
  if (!event) return <NotFoundPage />;

  const initialData: EventFormData = {
    title: event.title,
    category: event.category,
    date: event.date,
    time: event.time,
    location: event.location,
    capacity: String(event.capacity),
    description: event.description,
    imageUrl: event.imageUrl || event.image || "",
  };

  const handleSubmit = (data: EventFormData) => {
    updateEvent(event.id, data);
    navigate("/admin");
  };

  return (
    <div>
      <h2>Etkinlik Güncelle</h2>
      <EventForm initialData={initialData} submitText="Güncelle" onSubmit={handleSubmit} />
    </div>
  );
}

export default EditEventPage;
import { useNavigate } from "react-router-dom";
import { useEvents } from "../context/EventsContext";
import EventForm from "../components/forms/EventForm";
import type { EventFormData } from "../types/campus-event";

const emptyForm: EventFormData = {
  title: "",
  category: "",
  date: "",
  time: "",
  location: "",
  capacity: "",
  description: "",
  imageUrl: "",
};

function AddEventPage() {
  const { addEvent } = useEvents();
  const navigate = useNavigate();

  const handleSubmit = (data: EventFormData) => {
    addEvent(data);
    navigate("/admin");
  };

  return (
    <div>
      <h2>Yeni Etkinlik Ekle</h2>
      <EventForm initialData={emptyForm} submitText="Kaydet" onSubmit={handleSubmit} />
    </div>
  );
}

export default AddEventPage;
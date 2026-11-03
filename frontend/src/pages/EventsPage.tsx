import { useState } from "react";
import { useEvents } from "../context/EventsContext";
import EventFilter from "../components/events/EventFilter";
import EventList from "../components/events/EventList";

function EventsPage() {
  const { events } = useEvents();
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");

  const filtered = events.filter((e) => {
    const matchesSearch =
      e.title.toLowerCase().includes(searchText.toLowerCase()) ||
      e.description.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = !category || e.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <EventFilter
        searchText={searchText}
        category={category}
        onSearchChange={setSearchText}
        onCategoryChange={setCategory}
      />
      <EventList events={filtered} />
    </div>
  );
}

export default EventsPage;
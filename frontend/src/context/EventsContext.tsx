import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { CampusEvent, EventFormData } from "../types/campus-event";
import { initialEvents } from "../data/events";

interface EventsContextValue {
  events: CampusEvent[];
  addEvent: (data: EventFormData) => void;
  updateEvent: (id: string, data: EventFormData) => void;
  deleteEvent: (id: string) => void;
}

const EventsContext = createContext<EventsContextValue | null>(null);

function toEvent(id: string, data: EventFormData): CampusEvent {
  return {
    id,
    title: data.title.trim(),
    category: data.category,
    date: data.date,
    time: data.time,
    location: data.location,
    capacity: Number(data.capacity),
    description: data.description.trim(),
    imageUrl: data.imageUrl,
  };
}

export function EventsProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<CampusEvent[]>(initialEvents);

  const addEvent = (data: EventFormData) => {
    const newId = `event-${Date.now()}`;
    setEvents((prev) => [...prev, toEvent(newId, data)]);
  };

  const updateEvent = (id: string, data: EventFormData) => {
    setEvents((prev) => prev.map((e) => (e.id === id ? toEvent(id, data) : e)));
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <EventsContext.Provider value={{ events, addEvent, updateEvent, deleteEvent }}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error("useEvents bir EventsProvider içinde kullanılmalıdır.");
  }
  return context;
}
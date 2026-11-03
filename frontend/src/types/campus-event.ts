export interface CampusEvent {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  capacity: number;
  description: string;
  imageUrl?: string;
  image?: string;
}

export type Category = "Seminer" | "Atölye" | "Söyleşi" | "Yarışma" | string;

export interface EventFormData {
  title: string;
  category: Category;
  date: string;
  time: string;
  location: string;
  capacity: string;
  description: string;
  imageUrl?: string;
}

export type EventFormErrors = Partial<Record<keyof EventFormData, string>>;
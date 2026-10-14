import type { CampusEvent } from "../types/campus-event";

export const events: CampusEvent[] = [
  {
    id: "event-1",
    title: "Kariyer Günleri 2026",
    category: "Seminer",
    capacity: 100,
    date: "2026-10-12",
    time: "14:00",
    location: "A Blok Konferans Salonu",
    description: "Mezunlarla kariyer söyleşileri ve şirket standları.",
    image: "/afis.svg"
  },
  {
    id: "event-2",
    title: "Robotik Atölyesi",
    category: "Atölye",
    capacity: 20,
    date: "2026-10-20",
    time: "10:00",
    location: "Bilgisayar Laboratuvarı 2",
    description: "Arduino ile çizgi izleyen robot yapımı, başlangıç seviyesi."
  },
  {
    id: "event-3",
    title: "Yapay Zeka ve Gelecek",
    category: "Söyleşi",
    capacity: 50,
    date: "2026-10-25",
    time: "15:30",
    location: "C Blok Amfi 1",
    description: "Büyük dil modelleri ve geleceğin yazılım teknolojileri üzerine söyleşi."
  },
  {
    id: "event-4",
    title: "Web Tasarım Atölyesi",
    category: "Atölye",
    capacity: 30,
    date: "2026-11-03",
    time: "15:00",
    location: "Bilgisayar Laboratuvarı 1",
    description: "HTML ve CSS ile ilk kişisel sayfam yap."
  },
  {
    id: "event-5",
    title: "Hackathon 2026",
    category: "Yarışma",
    capacity: 60,
    date: "2026-11-10",
    time: "09:00",
    location: "Öğrenci Merkezi",
    description: "24 saatlik kesintisiz kodlama ve proje geliştirme yarışması."
  },
  {
    id: "event-6",
    title: "Girişimcilik 101",
    category: "Seminer",
    capacity: 80,
    date: "2026-11-18",
    time: "13:00",
    location: "B Blok Mavi Salon",
    description: "Fikirden ürüne startup yolculuğu ve yatırım süreçleri."
  }
];
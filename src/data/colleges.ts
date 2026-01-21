export interface Course {
  name: string;
  duration: string;
  fee: number;
}

export interface College {
  id: string;
  name: string;
  location: string;
  type: "Private" | "Government" | "Deemed";
  rating: number;
  courses: Course[];
  facilities: string[];
  image: string;
}

export const colleges: College[] = [
  {
    id: "1",
    name: "St. Joseph's College of Engineering",
    location: "Chennai, Tamil Nadu",
    type: "Private",
    rating: 4.5,
    courses: [
      { name: "B.Tech Computer Science", duration: "4 Years", fee: 150000 },
      { name: "B.Tech Electronics", duration: "4 Years", fee: 140000 },
      { name: "B.Tech Mechanical", duration: "4 Years", fee: 135000 },
      { name: "M.Tech Data Science", duration: "2 Years", fee: 180000 },
    ],
    facilities: ["Library", "Hostel", "Sports Complex", "WiFi Campus", "Cafeteria"],
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop",
  },
  {
    id: "2",
    name: "Anna University",
    location: "Chennai, Tamil Nadu",
    type: "Government",
    rating: 4.8,
    courses: [
      { name: "B.E Computer Science", duration: "4 Years", fee: 50000 },
      { name: "B.E Electronics & Communication", duration: "4 Years", fee: 48000 },
      { name: "B.E Civil Engineering", duration: "4 Years", fee: 45000 },
      { name: "M.E Software Engineering", duration: "2 Years", fee: 60000 },
    ],
    facilities: ["Central Library", "Research Labs", "Hostels", "Sports Ground", "Auditorium"],
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
  },
  {
    id: "3",
    name: "VIT University",
    location: "Vellore, Tamil Nadu",
    type: "Deemed",
    rating: 4.6,
    courses: [
      { name: "B.Tech Computer Science & AI", duration: "4 Years", fee: 200000 },
      { name: "B.Tech Information Technology", duration: "4 Years", fee: 195000 },
      { name: "B.Tech Biotechnology", duration: "4 Years", fee: 180000 },
      { name: "MBA", duration: "2 Years", fee: 350000 },
    ],
    facilities: ["Smart Classrooms", "International Hostel", "Gym", "Swimming Pool", "Tech Park"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
  },
  {
    id: "4",
    name: "SRM Institute of Science and Technology",
    location: "Kanchipuram, Tamil Nadu",
    type: "Deemed",
    rating: 4.4,
    courses: [
      { name: "B.Tech Computer Science", duration: "4 Years", fee: 250000 },
      { name: "B.Tech Automobile Engineering", duration: "4 Years", fee: 220000 },
      { name: "BBA", duration: "3 Years", fee: 150000 },
      { name: "M.Tech Cyber Security", duration: "2 Years", fee: 280000 },
    ],
    facilities: ["Medical Center", "Placement Cell", "Innovation Hub", "E-Library", "Food Court"],
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=300&fit=crop",
  },
  {
    id: "5",
    name: "PSG College of Technology",
    location: "Coimbatore, Tamil Nadu",
    type: "Private",
    rating: 4.7,
    courses: [
      { name: "B.E Production Engineering", duration: "4 Years", fee: 120000 },
      { name: "B.E Robotics", duration: "4 Years", fee: 130000 },
      { name: "B.Tech Fashion Technology", duration: "4 Years", fee: 110000 },
      { name: "M.E Manufacturing", duration: "2 Years", fee: 150000 },
    ],
    facilities: ["Industry Partnerships", "Incubation Center", "Sports Arena", "Digital Library", "Canteen"],
    image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&h=300&fit=crop",
  },
  {
    id: "6",
    name: "Madras Christian College",
    location: "Chennai, Tamil Nadu",
    type: "Private",
    rating: 4.3,
    courses: [
      { name: "B.Sc Computer Science", duration: "3 Years", fee: 80000 },
      { name: "B.A Economics", duration: "3 Years", fee: 60000 },
      { name: "B.Com Honours", duration: "3 Years", fee: 70000 },
      { name: "M.Sc Data Analytics", duration: "2 Years", fee: 100000 },
    ],
    facilities: ["Heritage Campus", "Chapel", "Library", "Hostel", "Sports Fields"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=300&fit=crop",
  },
];

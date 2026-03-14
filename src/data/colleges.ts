export interface Course {
  name: string;
  duration: string;
  fee: number;
}

export interface PlacementData {
  year: string;
  placementPercentage: number;
  averageSalary: number;
  highestSalary: number;
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
  programs: string[];
  established: number;
  feeRange: string;
  galleryImages?: string[];
  amenities?: string[];
  placementData?: PlacementData[];
  associatedCompanies?: string[];
  campusHiring?: {
    totalOffersGiven: number;
    averagePackage: number;
    highestPackage: number;
    topRecruiter: string;
  };
  description?: string;
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
    programs: ["Computer Science", "Electronics", "Mechanical", "Data Science"],
    established: 1956,
    feeRange: "₹1,35,000 - ₹1,80,000",
    description: "One of the oldest and most prestigious engineering institutions in India, known for academic excellence and industry partnerships.",
    galleryImages: [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop",
    ],
    amenities: [
      "100+ Acre Campus",
      "Air-conditioned Classrooms",
      "Advanced Laboratory Facilities",
      "High-Speed WiFi",
      "Multi-cuisine Cafeteria",
      "Swimming Pool",
      "Gymnasium",
      "Basketball & Volleyball Courts",
      "Cricket Ground",
      "Hospital with Medical Facilities",
      "Emergency Ambulance Service",
      "Transportation Facility",
    ],
    placementData: [
      { year: "2023", placementPercentage: 92, averageSalary: 750000, highestSalary: 2500000 },
      { year: "2022", placementPercentage: 88, averageSalary: 680000, highestSalary: 2200000 },
      { year: "2021", placementPercentage: 85, averageSalary: 620000, highestSalary: 1900000 },
    ],
    associatedCompanies: [
      "TCS", "Infosys", "Wipro", "HCL", "Accenture", "Cognizant",
      "Microsoft", "Google", "Amazon", "IBM", "DXC", "KTC", "Daimler", "Alstom"
    ],
    campusHiring: {
      totalOffersGiven: 342,
      averagePackage: 750000,
      highestPackage: 2500000,
      topRecruiter: "TCS"
    }
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
    programs: ["Computer Science", "Electronics", "Civil", "Software Engineering"],
    established: 1978,
    feeRange: "₹45,000 - ₹60,000",
    description: "India's premier government engineering university with world-class research facilities and industry connections.",
    galleryImages: [
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop",
    ],
    amenities: [
      "Central Research Library",
      "Multiple Research Centers",
      "Advanced Computing Facilities",
      "Sports Complex",
      "Modern Hostel Blocks",
      "Student Cafeteria",
      "Auditorium",
      "Medical Clinic",
      "Transportation System",
      "WiFi Campus",
      "Yoga & Fitness Center",
      "Multipurpose Ground",
    ],
    placementData: [
      { year: "2023", placementPercentage: 95, averageSalary: 850000, highestSalary: 2800000 },
      { year: "2022", placementPercentage: 93, averageSalary: 780000, highestSalary: 2500000 },
      { year: "2021", placementPercentage: 91, averageSalary: 720000, highestSalary: 2200000 },
    ],
    associatedCompanies: [
      "Infosys", "TCS", "Cognizant", "Wipro", "Accenture", "HCL",
      "NVIDIA", "Intel", "Qualcomm", "Bosch", "L&T", "Siemens", "Johnson & Johnson"
    ],
    campusHiring: {
      totalOffersGiven: 450,
      averagePackage: 850000,
      highestPackage: 2800000,
      topRecruiter: "Infosys"
    }
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
    programs: ["Computer Science", "IT", "Biotechnology", "MBA"],
    established: 1984,
    feeRange: "₹1,80,000 - ₹3,50,000",
    description: "India's leading private university with cutting-edge technology infrastructure and global academic standards.",
    galleryImages: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop",
    ],
    amenities: [
      "Ultra-Modern Smart Classrooms",
      "International Standard Hostels",
      "Exclusive AC Dining Hall",
      "Multiple Sports Complexes",
      "Olympic-sized Swimming Pool",
      "Fitness Center with Gym",
      "Technology Park",
      "Innovation Hubs",
      "Health & Wellness Center",
      "Auditorium",
      "High-Speed Internet",
      "24/7 Security",
    ],
    placementData: [
      { year: "2023", placementPercentage: 94, averageSalary: 920000, highestSalary: 3200000 },
      { year: "2022", placementPercentage: 91, averageSalary: 850000, highestSalary: 2800000 },
      { year: "2021", placementPercentage: 89, averageSalary: 780000, highestSalary: 2500000 },
    ],
    associatedCompanies: [
      "Google", "Microsoft", "Amazon", "Apple", "Facebook", "Adobe",
      "Flipkart", "Swiggy", "PayPal", "Cisco", "Capgemini", "Oracle", "SAP"
    ],
    campusHiring: {
      totalOffersGiven: 520,
      averagePackage: 920000,
      highestPackage: 3200000,
      topRecruiter: "Google"
    }
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
    programs: ["Computer Science", "Automobile", "BBA", "Cyber Security"],
    established: 1985,
    feeRange: "₹1,50,000 - ₹2,80,000",
    description: "Multi-campus deemed university known for innovation and industry-academic partnerships.",
    galleryImages: [
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
    ],
    amenities: [
      "Multi-Story Library",
      "E-Resources Library",
      "Advanced Labs",
      "Medical & Hospital Facilities",
      "Counseling Center",
      "Placement Support Center",
      "Innovation Center",
      "Sports Facilities",
      "Hostel Facilities",
      "Food Court",
      "WiFi Campus",
      "Emergency Services",
    ],
    placementData: [
      { year: "2023", placementPercentage: 90, averageSalary: 820000, highestSalary: 2600000 },
      { year: "2022", placementPercentage: 87, averageSalary: 750000, highestSalary: 2300000 },
      { year: "2021", placementPercentage: 85, averageSalary: 680000, highestSalary: 2000000 },
    ],
    associatedCompanies: [
      "BMW", "Daimler", "Geely", "Maruti Suzuki", "Tata Motors", "Hero MotoCorp",
      "TCS", "Infosys", "Wipro", "HCL", "Accenture", "Tech Mahindra"
    ],
    campusHiring: {
      totalOffersGiven: 380,
      averagePackage: 820000,
      highestPackage: 2600000,
      topRecruiter: "TCS"
    }
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
    programs: ["Production", "Robotics", "Fashion Tech", "Manufacturing"],
    established: 1951,
    feeRange: "₹1,10,000 - ₹1,50,000",
    description: "Premier institution with strong focus on engineering innovation and industry collaboration.",
    galleryImages: [
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&h=400&fit=crop",
    ],
    amenities: [
      "State-of-the-Art Labs",
      "Industry Collaboration Spaces",
      "Incubation Center",
      "Sports Facilities",
      "Digital Library",
      "Canteen",
      "Student Lounge",
      "Hostel Facilities",
      "Medical Clinic",
      "Transportation",
      "WiFi Campus",
      "Parking Facility",
    ],
    placementData: [
      { year: "2023", placementPercentage: 93, averageSalary: 880000, highestSalary: 2900000 },
      { year: "2022", placementPercentage: 90, averageSalary: 810000, highestSalary: 2600000 },
      { year: "2021", placementPercentage: 88, averageSalary: 750000, highestSalary: 2300000 },
    ],
    associatedCompanies: [
      "Bosch", "Siemens", "Honda", "Hyundai", "Suzuki", "Volvo",
      "TCS", "Infosys", "HCL", "CTS", "Accenture", "Zoho", "Wipro"
    ],
    campusHiring: {
      totalOffersGiven: 410,
      averagePackage: 880000,
      highestPackage: 2900000,
      topRecruiter: "Bosch"
    }
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
    programs: ["Computer Science", "Economics", "Commerce", "Data Analytics"],
    established: 1837,
    feeRange: "₹60,000 - ₹1,00,000",
    description: "India's oldest women's college with strong academic traditions and emphasis on holistic education.",
    galleryImages: [
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    ],
    amenities: [
      "Heritage Campus",
      "Central Library",
      "Conference Halls",
      "Seminar Rooms",
      "Computer Labs",
      "Science Labs",
      "Hostel Facilities",
      "Chapel",
      "Sports Fields",
      "Health Center",
      "Cafeteria",
      "WiFi Campus",
    ],
    placementData: [
      { year: "2023", placementPercentage: 87, averageSalary: 650000, highestSalary: 1800000 },
      { year: "2022", placementPercentage: 84, averageSalary: 600000, highestSalary: 1600000 },
      { year: "2021", placementPercentage: 81, averageSalary: 550000, highestSalary: 1400000 },
    ],
    associatedCompanies: [
      "TCS", "Infosys", "CTS", "Cognizant", "HCL", "Tech Mahindra",
      "Wipro", "Accenture", "Deloitte", "Ernst & Young", "JPMorgan", "Bank of America"
    ],
    campusHiring: {
      totalOffersGiven: 280,
      averagePackage: 650000,
      highestPackage: 1800000,
      topRecruiter: "TCS"
    }
  },
];

type Location = {
  id: string;
  name: string;
  address: string;
  city: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  phone: string;
  features: string[];
};

export const locations: Location[] = [
  {
    id: "downtown",
    name: "Downtown Flagship",
    address: "123 Main Street",
    city: "Ljubljana",
    hours: {
      weekdays: "6:00 AM - 8:00 PM",
      weekends: "7:00 AM - 9:00 PM",
    },
    phone: "+386 1 234 5678",
    features: ["WiFi", "Outdoor Seating", "Live Music", "Parking"],
  },
  {
    id: "riverside",
    name: "Riverside Cafe",
    address: "456 River Walk",
    city: "Ljubljana",
    hours: {
      weekdays: "7:00 AM - 7:00 PM",
      weekends: "8:00 AM - 8:00 PM",
    },
    phone: "+386 1 234 5679",
    features: ["River View", "WiFi", "Pet Friendly", "Terrace"],
  },
  {
    id: "university",
    name: "University Quarter",
    address: "789 Student Avenue",
    city: "Ljubljana",
    hours: {
      weekdays: "6:30 AM - 10:00 PM",
      weekends: "8:00 AM - 9:00 PM",
    },
    phone: "+386 1 234 5680",
    features: ["Study Rooms", "WiFi", "Late Hours", "Student Discounts"],
  },
];

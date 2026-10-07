export interface CarProfile {
  vin: string;
  make: string;
  model: string;
  trim: string;
  year: number;
  mileage: number;
  color: string;
  purchaseDate: string;
  purchasePrice: number;
  currentValue: number;
}

export interface ServiceRecord {
  date: string;
  type: 'routine' | 'repair' | 'inspection';
  description: string;
  cost: number;
  mileage: number;
  provider: string;
}

export interface HealthMetrics {
  engine: number;
  transmission: number;
  brakes: number;
  suspension: number;
  electrical: number;
  tires: number;
}

export interface MaintenanceItem {
  service: string;
  description: string;
  mileage: number;
  status: 'completed' | 'upcoming' | 'scheduled';
}

export const carProfile: CarProfile = {
  vin: "5UXCR6C0XL9C74429",
  make: "BMW",
  model: "X5",
  trim: "M50i",
  year: 2023,
  mileage: 8500,
  color: "Alpine White",
  purchaseDate: "2023-01-15",
  purchasePrice: 95000,
  currentValue: 82500
};

export const serviceHistory: ServiceRecord[] = [
  {
    date: "2024-09-15",
    type: "routine",
    description: "Oil change and multi-point inspection",
    cost: 185,
    mileage: 8200,
    provider: "BMW Service Center"
  },
  {
    date: "2024-06-22",
    type: "routine",
    description: "Tire rotation and brake inspection",
    cost: 120,
    mileage: 6800,
    provider: "BMW Service Center"
  },
  {
    date: "2024-03-10",
    type: "inspection",
    description: "Annual safety inspection",
    cost: 95,
    mileage: 5200,
    provider: "BMW Service Center"
  },
  {
    date: "2023-12-18",
    type: "routine",
    description: "Oil change and filter replacement",
    cost: 185,
    mileage: 3500,
    provider: "BMW Service Center"
  },
  {
    date: "2023-09-05",
    type: "routine",
    description: "First service - oil change, inspection",
    cost: 0,
    mileage: 1500,
    provider: "BMW Service Center"
  }
];

export const healthMetrics: HealthMetrics = {
  engine: 95,
  transmission: 92,
  brakes: 88,
  suspension: 90,
  electrical: 94,
  tires: 85
};

export const valueOverTime = [
  { year: "2023", value: 95000 },
  { year: "2024", value: 82500 },
  { year: "2025", value: 72000 },
  { year: "2026", value: 64000 },
  { year: "2027", value: 58000 },
  { year: "2028", value: 52000 }
];

export const maintenanceSchedule: MaintenanceItem[] = [
  {
    service: "Oil Change",
    description: "Replace engine oil and filter",
    mileage: 10000,
    status: "upcoming"
  },
  {
    service: "Tire Rotation",
    description: "Rotate tires and check alignment",
    mileage: 10000,
    status: "upcoming"
  },
  {
    service: "Brake Inspection",
    description: "Inspect brake pads and rotors",
    mileage: 12000,
    status: "scheduled"
  },
  {
    service: "Cabin Air Filter",
    description: "Replace cabin air filter",
    mileage: 15000,
    status: "scheduled"
  },
  {
    service: "Previous Oil Change",
    description: "Completed oil change and inspection",
    mileage: 8200,
    status: "completed"
  }
];

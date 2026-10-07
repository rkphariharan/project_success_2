export interface CarProfile {
  registration: string;
  model: string;
  year: number;
  currentKM: number;
  fuelType: string;
  purchaseDate: string;
  variant: string;
}

export interface HealthMetric {
  component: string;
  score: number;
  status: 'Good' | 'Fair' | 'Poor';
  color: string;
}

export interface ServiceRecord {
  id: string;
  date: string;
  type: string;
  description: string;
  cost: number;
  km: number;
  serviceCenter: string;
}

export interface ServiceMilestone {
  km: number;
  description: string;
  completed: boolean;
  dueDate?: string;
}

export interface ResaleFactor {
  factor: string;
  impact: 'Positive' | 'Neutral' | 'Negative';
  description: string;
}

export const carProfile: CarProfile = {
  registration: 'MH-12-AB-1234',
  model: 'Hyundai Creta',
  year: 2021,
  currentKM: 38000,
  fuelType: 'Diesel',
  purchaseDate: '2021-03-15',
  variant: 'SX(O) 1.5 Diesel',
};

export const healthScore = 82;

export const healthMetrics: HealthMetric[] = [
  { component: 'Engine', score: 90, status: 'Good', color: '#10b981' },
  { component: 'Transmission', score: 85, status: 'Good', color: '#3b82f6' },
  { component: 'Suspension', score: 75, status: 'Fair', color: '#f59e0b' },
  { component: 'Electrical', score: 78, status: 'Fair', color: '#8b5cf6' },
];

export const serviceHistory: ServiceRecord[] = [
  {
    id: '1',
    date: '2026-09-15',
    type: 'Scheduled Service',
    description: '30,000 KM service - Oil change, filter replacement, brake inspection',
    cost: 5500,
    km: 30000,
    serviceCenter: 'Hyundai Authorized Service Center',
  },
  {
    id: '2',
    date: '2026-03-10',
    type: 'Scheduled Service',
    description: '20,000 KM service - Oil change, tire rotation, AC gas top-up',
    cost: 4200,
    km: 20000,
    serviceCenter: 'Hyundai Authorized Service Center',
  },
  {
    id: '3',
    date: '2025-09-05',
    type: 'Scheduled Service',
    description: '10,000 KM service - Oil change, filter replacement',
    cost: 3500,
    km: 10000,
    serviceCenter: 'Hyundai Authorized Service Center',
  },
  {
    id: '4',
    date: '2025-05-20',
    type: 'Repair',
    description: 'Windshield replacement due to crack',
    cost: 8500,
    km: 7500,
    serviceCenter: 'Glass Specialist Auto Care',
  },
  {
    id: '5',
    date: '2021-04-01',
    type: 'First Service',
    description: '1,000 KM first free service - Basic inspection',
    cost: 0,
    km: 1000,
    serviceCenter: 'Hyundai Authorized Service Center',
  },
];

export const serviceMilestones: ServiceMilestone[] = [
  {
    km: 10000,
    description: 'First major service',
    completed: true,
  },
  {
    km: 20000,
    description: 'Second scheduled service',
    completed: true,
  },
  {
    km: 30000,
    description: 'Third scheduled service',
    completed: true,
  },
  {
    km: 40000,
    description: 'Fourth scheduled service',
    completed: false,
    dueDate: '2027-01-15',
  },
  {
    km: 50000,
    description: 'Major service with transmission check',
    completed: false,
    dueDate: '2027-07-20',
  },
];

export const resaleFactors: ResaleFactor[] = [
  {
    factor: 'Service History',
    impact: 'Positive',
    description: 'Complete service records from authorized center',
  },
  {
    factor: 'Ownership',
    impact: 'Positive',
    description: 'Single owner, well maintained',
  },
  {
    factor: 'Mileage',
    impact: 'Neutral',
    description: 'Average usage for age',
  },
  {
    factor: 'Accident History',
    impact: 'Positive',
    description: 'No accident records',
  },
  {
    factor: 'Market Demand',
    impact: 'Positive',
    description: 'High demand for this model',
  },
];

export const estimatedResaleValue = {
  current: 1250000,
  afterOneYear: 1100000,
  afterTwoYears: 950000,
};

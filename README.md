# Customer Dashboard - Car Health & Service Tracker

A modern Next.js 15 application for customers to track their car's health, service history, and estimated resale value.

## Features

- **Car Profile Card**: Complete vehicle information with registration, model, year, and mileage
- **Health Score Gauge**: Circular radial chart showing overall car health (0-100)
- **Component Breakdown**: Bar charts displaying health scores for Engine, Transmission, Suspension, and Electrical systems
- **Resale Value Estimator**: Current and projected resale values with impact factors
- **Service History Timeline**: Complete service records with dates, costs, and service centers
- **Service Milestones**: Progress tracker for scheduled maintenance intervals

## Tech Stack

- **Next.js 15** - Latest stable version with App Router
- **TypeScript** - Full type safety
- **Tailwind CSS 4** - Modern utility-first styling
- **Recharts v3** - Production-ready charting library (RadialBarChart, BarChart)
- **Lucide React** - Beautiful icons
- **ESLint 9** - Latest linting standards

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Deployment to Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Vercel Dashboard
1. Push your code to GitHub
2. Import the repository in Vercel
3. Select the `customer-dashboard` directory as the root
4. Deploy

## Project Structure

```
customer-dashboard/
├── app/
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Main dashboard with all features
│   └── globals.css          # Global styles
├── lib/
│   └── mockData.ts          # Mock data and TypeScript interfaces
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── eslint.config.mjs        # ESLint 9 configuration
```

## Features Detail

### Car Profile Section
- Displays comprehensive vehicle information
- Registration number, model, year, variant
- Current mileage and fuel type
- Purchase date tracking

### Health Score Gauge
- Radial bar chart showing overall health (0-100)
- Color-coded status: Green (80+), Yellow (60-79), Red (<60)
- Visual indicator with score label

### Component Health Breakdown
- Horizontal bar chart for major components
- Individual scores for:
  - Engine (90/100 - Good)
  - Transmission (85/100 - Good)
  - Suspension (75/100 - Fair)
  - Electrical (78/100 - Fair)
- Color-coded bars for easy identification

### Resale Value Estimator
- Current estimated value: ₹12,50,000
- Projected value after 1 year: ₹11,00,000
- Projected value after 2 years: ₹9,50,000
- Impact factors with positive/neutral/negative indicators:
  - Service History (Positive)
  - Ownership (Positive)
  - Mileage (Neutral)
  - Accident History (Positive)
  - Market Demand (Positive)

### Service History Timeline
- Chronological display of all service records
- 5 service records included (from first service to latest)
- Information displayed:
  - Service type (Scheduled Service, Repair, First Service)
  - Detailed description
  - Cost (₹0 - ₹12,000)
  - Odometer reading
  - Service center name
  - Date of service

### Service Milestones
- Progress tracker for scheduled maintenance
- Shows completed and upcoming services
- Milestones at: 10k, 20k, 30k, 40k, 50k KM
- Due dates for upcoming services
- Visual completion indicators

## Mock Data

The application includes realistic data for a Hyundai Creta 2021:
- Complete car profile information
- Overall health score: 82/100
- 4 component health metrics
- 5 service history records
- 5 service milestones (3 completed, 2 upcoming)
- Resale value estimates with 5 impact factors

## Design

- Premium purple/grey/gold color scheme
- Glass morphism effects with backdrop blur
- Dark theme optimized for readability
- Responsive layout for all screen sizes
- Smooth transitions and hover effects

## Environment

- Node.js 18+ recommended
- No environment variables required for demo
- Ready for production deployment

## License

Private - For internal use only

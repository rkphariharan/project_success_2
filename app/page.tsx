'use client';

import {
  RadialBarChart,
  RadialBar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import {
  Car,
  Gauge,
  Calendar,
  Wrench,
  TrendingUp,
  CheckCircle,
  Clock,
  IndianRupee,
  MapPin,
} from 'lucide-react';
import {
  carProfile,
  healthScore,
  healthMetrics,
  serviceHistory,
  serviceMilestones,
  resaleFactors,
  estimatedResaleValue,
} from '@/lib/mockData';

export default function Dashboard() {
  const healthScoreData = [
    {
      name: 'Health',
      value: healthScore,
      fill: healthScore >= 80 ? '#10b981' : healthScore >= 60 ? '#f59e0b' : '#ef4444',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Your Car Dashboard</h1>
        <p className="text-gray-400">Track your car's health, service history, and value</p>
      </div>

      {/* Car Profile Card */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start space-x-4">
            <div className="bg-purple-500/20 rounded-full p-4">
              <Car className="w-12 h-12 text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{carProfile.model}</h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Registration:</span>
                  <span className="text-white font-medium">{carProfile.registration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Year:</span>
                  <span className="text-white font-medium">{carProfile.year}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Variant:</span>
                  <span className="text-white font-medium">{carProfile.variant}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Fuel Type:</span>
                  <span className="text-white font-medium">{carProfile.fuelType}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Current KM:</span>
                  <span className="text-white font-medium">{carProfile.currentKM.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Purchase Date:</span>
                  <span className="text-white font-medium">{carProfile.purchaseDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Health Score and Component Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Health Score Gauge */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Gauge className="w-6 h-6 text-purple-400" />
            <h3 className="text-xl font-semibold text-white">Overall Health Score</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height={250}>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="70%"
                outerRadius="90%"
                barSize={20}
                data={healthScoreData}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar
                  minAngle={15}
                  background
                  clockWise
                  dataKey="value"
                  cornerRadius={10}
                />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute">
              <div className="text-center">
                <div className="text-5xl font-bold text-white">{healthScore}</div>
                <div className="text-gray-400 text-sm">out of 100</div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <span
                className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                  healthScore >= 80
                    ? 'bg-green-500/20 text-green-400'
                    : healthScore >= 60
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {healthScore >= 80 ? 'Excellent' : healthScore >= 60 ? 'Good' : 'Needs Attention'}
              </span>
            </div>
          </div>
        </div>

        {/* Component Breakdown */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Component Health</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={healthMetrics} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis type="number" domain={[0, 100]} stroke="#9ca3af" />
              <YAxis dataKey="component" type="category" stroke="#9ca3af" width={100} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #6b21a8',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="score" name="Health Score" radius={[0, 8, 8, 0]}>
                {healthMetrics.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Resale Value Estimator */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-6 h-6 text-gold-400" />
          <h3 className="text-xl font-semibold text-white">Resale Value Estimator</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-slate-700/50 rounded-lg p-4 border border-purple-500/10">
            <div className="text-gray-400 text-sm mb-1">Current Value</div>
            <div className="text-2xl font-bold text-white flex items-center">
              <IndianRupee className="w-5 h-5" />
              {estimatedResaleValue.current.toLocaleString()}
            </div>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-4 border border-purple-500/10">
            <div className="text-gray-400 text-sm mb-1">After 1 Year</div>
            <div className="text-2xl font-bold text-white flex items-center">
              <IndianRupee className="w-5 h-5" />
              {estimatedResaleValue.afterOneYear.toLocaleString()}
            </div>
          </div>
          <div className="bg-slate-700/50 rounded-lg p-4 border border-purple-500/10">
            <div className="text-gray-400 text-sm mb-1">After 2 Years</div>
            <div className="text-2xl font-bold text-white flex items-center">
              <IndianRupee className="w-5 h-5" />
              {estimatedResaleValue.afterTwoYears.toLocaleString()}
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-white font-medium mb-3">Value Impact Factors</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {resaleFactors.map((factor, index) => (
              <div key={index} className="flex items-start space-x-3 bg-slate-700/30 rounded-lg p-3">
                <div
                  className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                    factor.impact === 'Positive'
                      ? 'bg-green-400'
                      : factor.impact === 'Neutral'
                      ? 'bg-yellow-400'
                      : 'bg-red-400'
                  }`}
                />
                <div className="flex-1">
                  <div className="text-white font-medium text-sm">{factor.factor}</div>
                  <div className="text-gray-400 text-xs">{factor.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service History Timeline */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Wrench className="w-6 h-6 text-purple-400" />
          <h3 className="text-xl font-semibold text-white">Service History</h3>
        </div>
        <div className="space-y-4">
          {serviceHistory.map((service, index) => (
            <div key={service.id} className="relative pl-8 pb-4 border-l-2 border-purple-500/30">
              {index !== serviceHistory.length - 1 && (
                <div className="absolute left-0 top-0 w-0.5 h-full bg-purple-500/30" />
              )}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-800" />
              <div className="bg-slate-700/30 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium mb-2">
                      {service.type}
                    </span>
                    <h4 className="text-white font-medium">{service.description}</h4>
                  </div>
                  <div className="text-right">
                    <div className="text-gold-400 font-bold flex items-center justify-end">
                      <IndianRupee className="w-4 h-4" />
                      {service.cost.toLocaleString()}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{service.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Gauge className="w-4 h-4" />
                    <span>{service.km.toLocaleString()} KM</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{service.serviceCenter}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Milestones */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-6">
          <CheckCircle className="w-6 h-6 text-green-400" />
          <h3 className="text-xl font-semibold text-white">Service Milestones</h3>
        </div>
        <div className="space-y-4">
          {serviceMilestones.map((milestone, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-slate-700/30 rounded-lg p-4"
            >
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                  milestone.completed
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-slate-700 text-gray-400'
                }`}
              >
                {milestone.completed ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <Clock className="w-6 h-6" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="text-white font-medium">{milestone.km.toLocaleString()} KM</span>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      milestone.completed
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}
                  >
                    {milestone.completed ? 'Completed' : 'Upcoming'}
                  </span>
                </div>
                <div className="text-gray-400 text-sm">{milestone.description}</div>
                {milestone.dueDate && (
                  <div className="text-gray-500 text-xs mt-1">Due: {milestone.dueDate}</div>
                )}
              </div>
              <div className="flex-shrink-0">
                <div
                  className={`w-24 h-2 rounded-full ${
                    milestone.completed ? 'bg-green-500' : 'bg-slate-700'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

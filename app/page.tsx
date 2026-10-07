"use client";

import { Car, Wrench, DollarSign, Calendar, AlertTriangle, CheckCircle, TrendingUp, Activity, Shield } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";
import { carProfile, serviceHistory, healthMetrics, valueOverTime, maintenanceSchedule } from "@/lib/mockData";

export default function Home() {
  const overallHealth = Math.round(
    (healthMetrics.engine + healthMetrics.transmission + healthMetrics.brakes +
     healthMetrics.suspension + healthMetrics.electrical + healthMetrics.tires) / 6
  );

  const healthColor = overallHealth >= 85 ? "#22c55e" : overallHealth >= 70 ? "#f59e0b" : "#ef4444";

  const totalServiceCost = serviceHistory.reduce((sum, service) => sum + service.cost, 0);
  const upcomingMaintenanceCount = maintenanceSchedule.filter(item => item.status === 'upcoming').length;

  const healthData = [
    {
      name: "Overall Health",
      value: overallHealth,
      fill: healthColor
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">My Vehicle Dashboard</h1>
          <p className="text-purple-300">Track your vehicle's health, service history, and value</p>
        </div>

        {/* Vehicle Profile Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-purple-500/20 rounded-xl">
              <Car className="text-purple-400" size={48} />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-2">
                {carProfile.year} {carProfile.make} {carProfile.model}
              </h2>
              <p className="text-purple-300 text-lg mb-4">{carProfile.trim}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">VIN</p>
                  <p className="text-white font-mono text-sm">{carProfile.vin}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Mileage</p>
                  <p className="text-white font-semibold">{carProfile.mileage.toLocaleString()} mi</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Purchase Date</p>
                  <p className="text-white font-semibold">{carProfile.purchaseDate}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Color</p>
                  <p className="text-white font-semibold">{carProfile.color}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Overall Health */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <Shield className="text-green-400" size={24} />
              </div>
              <span className="text-sm text-purple-300">Vehicle Health</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{overallHealth}%</div>
            <div className="text-sm text-green-400">Excellent Condition</div>
          </div>

          {/* Current Value */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-amber-500/20 rounded-lg">
                <DollarSign className="text-amber-400" size={24} />
              </div>
              <span className="text-sm text-purple-300">Current Value</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              ${carProfile.currentValue.toLocaleString()}
            </div>
            <div className="text-sm text-gray-400">Resale estimate</div>
          </div>

          {/* Service History */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-500/20 rounded-lg">
                <Wrench className="text-blue-400" size={24} />
              </div>
              <span className="text-sm text-purple-300">Total Services</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{serviceHistory.length}</div>
            <div className="text-sm text-gray-400">${totalServiceCost.toLocaleString()} spent</div>
          </div>

          {/* Upcoming Maintenance */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-500/20 rounded-lg">
                <Calendar className="text-orange-400" size={24} />
              </div>
              <span className="text-sm text-purple-300">Upcoming Items</span>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{upcomingMaintenanceCount}</div>
            <div className="text-sm text-orange-400">maintenance items</div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Health Score Gauge */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Overall Health Score</h2>
            <ResponsiveContainer width="100%" height={300}>
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="90%"
                data={healthData}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar
                  minAngle={15}
                  background
                  clockWise
                  dataKey="value"
                />
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="text-4xl font-bold" fill="#fff">
                  {overallHealth}%
                </text>
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div>
                <p className="text-gray-400 text-sm">Engine</p>
                <p className="text-white font-semibold">{healthMetrics.engine}%</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Transmission</p>
                <p className="text-white font-semibold">{healthMetrics.transmission}%</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Brakes</p>
                <p className="text-white font-semibold">{healthMetrics.brakes}%</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Suspension</p>
                <p className="text-white font-semibold">{healthMetrics.suspension}%</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Electrical</p>
                <p className="text-white font-semibold">{healthMetrics.electrical}%</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Tires</p>
                <p className="text-white font-semibold">{healthMetrics.tires}%</p>
              </div>
            </div>
          </div>

          {/* Value Over Time */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Resale Value Projection</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={valueOverTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="year" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #8b5cf6', borderRadius: '8px' }}
                  labelStyle={{ color: '#e5e7eb' }}
                  formatter={(value: number) => `$${value.toLocaleString()}`}
                />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#f59e0b" strokeWidth={3} name="Estimated Value ($)" />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-amber-300 text-sm">
                Your vehicle is depreciating at a healthy rate. Regular maintenance helps preserve value.
              </p>
            </div>
          </div>
        </div>

        {/* Maintenance Schedule */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Maintenance Schedule</h2>
          <div className="space-y-4">
            {maintenanceSchedule.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-purple-500/10"
              >
                <div className="flex items-center gap-4">
                  {item.status === 'completed' ? (
                    <CheckCircle className="text-green-400" size={24} />
                  ) : item.status === 'upcoming' ? (
                    <AlertTriangle className="text-orange-400" size={24} />
                  ) : (
                    <Calendar className="text-purple-400" size={24} />
                  )}
                  <div>
                    <h3 className="text-white font-semibold">{item.service}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-semibold">{item.mileage.toLocaleString()} mi</p>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    item.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                    item.status === 'upcoming' ? 'bg-orange-500/20 text-orange-300' :
                    'bg-purple-500/20 text-purple-300'
                  }`}>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service History */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Service History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-purple-500/20">
                  <th className="text-left py-4 px-4 text-purple-300 font-semibold">Date</th>
                  <th className="text-left py-4 px-4 text-purple-300 font-semibold">Service Type</th>
                  <th className="text-left py-4 px-4 text-purple-300 font-semibold">Description</th>
                  <th className="text-left py-4 px-4 text-purple-300 font-semibold">Mileage</th>
                  <th className="text-left py-4 px-4 text-purple-300 font-semibold">Cost</th>
                  <th className="text-left py-4 px-4 text-purple-300 font-semibold">Provider</th>
                </tr>
              </thead>
              <tbody>
                {serviceHistory.map((service, index) => (
                  <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                    <td className="py-4 px-4 text-gray-300">{service.date}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        service.type === 'routine' ? 'bg-blue-500/20 text-blue-300' :
                        service.type === 'repair' ? 'bg-red-500/20 text-red-300' :
                        'bg-purple-500/20 text-purple-300'
                      }`}>
                        {service.type.charAt(0).toUpperCase() + service.type.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-white">{service.description}</td>
                    <td className="py-4 px-4 text-gray-300">{service.mileage.toLocaleString()} mi</td>
                    <td className="py-4 px-4 text-amber-400 font-semibold">
                      ${service.cost.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-gray-300">{service.provider}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

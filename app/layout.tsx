import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Car } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Customer Dashboard - Car Health & Service',
  description: 'Track your car health, service history, and resale value',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Mobile-Optimized Navigation */}
          <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="flex justify-between items-center h-14 md:h-16">
                <div className="flex items-center space-x-2">
                  <Car className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
                  <span className="text-base md:text-xl font-bold text-white">
                    <span className="hidden sm:inline">Car Health Dashboard</span>
                    <span className="sm:hidden">My Car</span>
                  </span>
                </div>
                <div className="text-gray-300 text-xs md:text-sm">
                  <span className="hidden sm:inline">Welcome, Customer</span>
                  <span className="sm:hidden">Customer</span>
                </div>
              </div>
            </div>
          </nav>
          {/* Mobile-Optimized Main Content */}
          <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

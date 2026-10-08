import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Car, Settings } from 'lucide-react';

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Mobile-First Navigation */}
          <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-purple-500/20 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-3">
                  <Car className="w-7 h-7 md:w-8 md:h-8 text-purple-400" />
                  <span className="text-xl font-bold text-white">
                    <span className="hidden sm:inline">Car Health Dashboard</span>
                    <span className="sm:hidden">My Car</span>
                  </span>
                </div>
                {/* Mobile: Settings Icon */}
                <div className="md:hidden">
                  <Settings className="w-6 h-6 text-purple-400" />
                </div>
                {/* Desktop: User Info */}
                <div className="hidden md:block text-gray-300 text-sm">
                  Welcome, Customer
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8 py-8 md:py-8 pb-32 md:pb-8">
            {children}
          </main>

          {/* Bottom CTA Button - Mobile Only */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-purple-500/20 p-5 z-50">
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-5 rounded-2xl text-xl font-bold active:scale-[0.98] transition-all shadow-lg shadow-purple-500/20">
              Book Service
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}

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
          <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-purple-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center space-x-2">
                  <Car className="w-8 h-8 text-purple-400" />
                  <span className="text-xl font-bold text-white">
                    Car Health Dashboard
                  </span>
                </div>
                <div className="text-gray-300 text-sm">
                  Welcome, Customer
                </div>
              </div>
            </div>
          </nav>
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

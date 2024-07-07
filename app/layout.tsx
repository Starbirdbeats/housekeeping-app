// app/layout.tsx
import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic';
import '@/app/globals.css'

const DynamicSettingsDialog = dynamic(
  () => import('@/components/settingsDialog').then(mod => mod.SettingsDialog),
  { ssr: false }
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This is a basic check. You should implement proper authentication.
  const isAuthenticated = true; // Replace with actual auth check

  return (
    <html lang="en">
      <body className="bg-gray-100">
        {isAuthenticated ? (
          <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white p-6">
              <h2 className="text-2xl font-semibold mb-6">Navigation</h2>
              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/rooms">Rooms to Clean</Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/inspections">Start Inspection</Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/schedule">Daily Schedule</Link>
                </Button>
                <DynamicSettingsDialog />
              </nav>
            </div>

            {/* Main content */}
            <div className="flex-1 p-10">
              {children}
            </div>
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
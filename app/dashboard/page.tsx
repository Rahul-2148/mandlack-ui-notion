'use client';

import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import CameraPlayer from '@/components/CameraPlayer';
import Timeline from '@/components/Timeline';
import IncidentList from '@/components/IncidentList';
import clsx from 'clsx';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-950">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Toggle Button */}
       {/* Mobile Toggle Button */}
<button
  className={clsx(
    'md:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-md border border-gray-700 transition-transform',
    sidebarOpen ? 'ml-64' : ''
  )}
  onClick={() => setSidebarOpen(!sidebarOpen)}
>
  {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
</button>

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 text-white">
          <div className="flex flex-col xl:flex-row gap-6 h-full">
            {/* Left Column */}
            <div className="flex-1 space-y-6">
              <CameraPlayer />
              <Timeline />
            </div>

            {/* Right Panel */}
            <div className="w-full xl:w-72">
              <IncidentList />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import CameraPlayer from '@/components/CameraPlayer';
import Timeline from '@/components/Timeline';
import IncidentList from '@/components/IncidentList';

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-950 text-white overflow-auto">
          <div className="flex flex-col lg:flex-row gap-6 h-full">
            {/* Left Panel */}
            <div className="flex-1 space-y-6">
              <CameraPlayer />
              <Timeline />
            </div>

            {/* Right Panel: Incidents */}
            <IncidentList />
          </div>
        </main>
      </div>
    </div>
  );
}

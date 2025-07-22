'use client';

import {
  AlertTriangle,
  ShieldAlert,
  UserCheck,
  TrafficCone,
} from 'lucide-react';
import Tag from './Tag';
import { JSX } from 'react';

type Incident = {
  id: number;
  type: string;
  time: string;
  icon: JSX.Element;
  tagColor: 'red' | 'orange' | 'blue' | 'green';
};

const incidents: Incident[] = [
  {
    id: 1,
    type: 'Gun Threat',
    time: '01:26:10',
    icon: <ShieldAlert className="text-orange-500" size={20} />,
    tagColor: 'orange',
  },
  {
    id: 2,
    type: 'Unauthorized Access',
    time: '01:24:01',
    icon: <AlertTriangle className="text-red-500" size={20} />,
    tagColor: 'red',
  },
  {
    id: 3,
    type: 'Face Recognized',
    time: '01:20:55',
    icon: <UserCheck className="text-blue-500" size={20} />,
    tagColor: 'blue',
  },
  {
    id: 4,
    type: 'Traffic Congestion',
    time: '01:16:45',
    icon: <TrafficCone className="text-green-500" size={20} />,
    tagColor: 'green',
  },
];

export default function IncidentList() {
  return (
    <aside className="w-full md:w-72 max-h-[80vh] md:max-h-screen bg-gray-900 border-t md:border-t-0 md:border-l border-gray-800 p-4 space-y-4 overflow-y-auto rounded-b-lg md:rounded-none">
      <h2 className="text-lg font-semibold text-white mb-2">Incidents</h2>
      {incidents.map((incident) => (
        <div
          key={incident.id}
          className="bg-gray-800 p-3 rounded-md flex items-center justify-between shadow hover:bg-gray-700 transition"
        >
          <div className="flex items-center gap-2">
            {incident.icon}
            <div className="flex flex-col">
              <span className="text-sm text-white truncate w-32 sm:w-40">
                {incident.type}
              </span>
              <span className="text-xs text-gray-400">{incident.time}</span>
            </div>
          </div>
          <Tag color={incident.tagColor} />
        </div>
      ))}
    </aside>
  );
}

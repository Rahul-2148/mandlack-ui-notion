'use client';

import React from 'react';

export default function Timeline() {
  const events = [
    { time: '01:10', label: 'Traffic Congestion', color: 'bg-green-500', position: '25%' },
    { time: '01:20', label: 'Face Recognized', color: 'bg-blue-500', position: '50%' },
    { time: '01:24', label: 'Unauthorized Access', color: 'bg-red-500', position: '80%' },
    { time: '01:26', label: 'Gun Threat', color: 'bg-orange-500', position: '95%' },
  ];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 space-y-4">
      <h2 className="text-white font-semibold text-lg mb-2">Timeline</h2>

      <div className="relative w-full h-24 bg-gray-800 rounded-md overflow-hidden">
        {/* Base timeline line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 transform -translate-y-1/2 rounded" />

        {events.map((event, i) => (
          <div 
            key={i}
            className={`absolute top-1/2 -translate-y-1/2 h-4 w-4 rounded-full ${event.color} cursor-pointer transition hover:scale-110`}
            style={{ left: event.position }}
            title={`${event.label} - ${event.time}`}
          />
        ))}
      </div>

      <div className="flex justify-between text-xs text-gray-400">
        <span>01:00</span>
        <span>01:15</span>
        <span>01:30</span>
      </div>
    </div>
  );
}

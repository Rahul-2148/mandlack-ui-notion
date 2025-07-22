'use client';

import { Home, Camera, Video, AlertCircle, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: <Home size={20} /> },
  { name: 'Cameras', href: '/cameras', icon: <Camera size={20} /> },
  { name: 'Scenes', href: '/scenes', icon: <Video size={20} /> },
  { name: 'Incidents', href: '/incidents', icon: <AlertCircle size={20} /> },
  { name: 'Users', href: '/users', icon: <Users size={20} /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="bg-gray-900 text-white w-64 h-screen flex flex-col border-r border-gray-800">
      <div className="text-xl font-bold px-6 py-5 border-b border-gray-800">
        MANDLACK
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={clsx(
              'flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-800 transition',
              pathname === item.href ? 'bg-gray-800 font-semibold' : 'text-gray-300'
            )}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

// ✅ components/Header.tsx
'use client';

import { Bell, Menu, Sun, Moon } from 'lucide-react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-800 bg-white dark:bg-gray-950">
      {/* Left: Logo / Menu */}
      <div className="flex items-center gap-3 text-gray-800 dark:text-white text-lg font-semibold">
        <Menu size={20} className="cursor-pointer md:hidden" />
        <span className="hidden sm:inline">Dashboard</span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <button
          type="button"
          title="Toggle Theme"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
        </button>

        {/* Notification bell */}
        <button
          type="button"
          title="Notifications"
          className="relative text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
        >
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* User profile */}
        <div className="flex items-center gap-2 text-sm text-gray-800 dark:text-white">
          <span className="hidden sm:block">Mohammed Ajnas</span>
          <Image
            src="https://i.pravatar.cc/40?img=32"
            alt="User Avatar"
            width={32}
            height={32}
            className="rounded-full border border-gray-300 dark:border-gray-700"
          />
        </div>
      </div>
    </header>
  );
}

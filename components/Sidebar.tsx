"use client";

import { Home, Camera, Video, AlertCircle, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { name: "Dashboard", href: "/", icon: <Home size={20} /> },
  { name: "Cameras", href: "/cameras", icon: <Camera size={20} /> },
  { name: "Scenes", href: "/scenes", icon: <Video size={20} /> },
  { name: "Incidents", href: "/incidents", icon: <AlertCircle size={20} /> },
  { name: "Users", href: "/users", icon: <Users size={20} /> },
];

export default function Sidebar({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (val: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <>
      <aside
        className={clsx(
          "bg-gray-900 text-white fixed md:static top-0 left-0 z-30 w-64 h-full flex flex-col border-r border-gray-800 transform transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="text-xl font-bold px-6 py-5 border-b border-gray-800">
          MANDLACK
        </div>
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-800 transition",
                pathname === item.href
                  ? "bg-gray-800 font-semibold"
                  : "text-gray-300"
              )}
              onClick={() => setOpen(false)}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}

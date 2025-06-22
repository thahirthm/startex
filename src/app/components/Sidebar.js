'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import logo from './main-logo.png'; // Adjust path as needed
import {
  Home,
  LayoutDashboard,
  Users,
  FileText,
  MessageSquare,
  Menu,
} from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-black p-4 flex justify-between items-center">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed md:relative top-0 left-0 h-screen w-64 bg-black text-white flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div>
          {/* Logo */}
          <div className="flex items-center justify-center py-6">
            <Image src={logo} alt="Logo" width={120} height={120} />
          </div>

          {/* Divider */}
          <hr className="border-gray-700 mx-4" />

          {/* Navigation */}
          <nav className="mt-6 px-4 flex flex-col gap-2 text-sm font-medium">
            <Link href="/admin/blog">
              <div className="flex items-center gap-2 p-2 hover:bg-orange-500 rounded cursor-pointer">
                <Home size={18} />
                BlogList
              </div>
            </Link>

            <Link href="/admin/blog/new">
              <div className="flex items-center gap-2 p-2 hover:bg-orange-500 rounded cursor-pointer">
                <LayoutDashboard size={18} />
                Create-Blog
              </div>
            </Link>

            <hr className="border-gray-700 mx-4" />

            <Link href="/admin/hiring">
              <div className="flex items-center gap-2 p-2 hover:bg-orange-500 rounded cursor-pointer">
                <Users size={18} />
                Careers
              </div>
            </Link>

            <Link href="/admin/hiring/new">
              <div className="flex items-center gap-2 p-2 hover:bg-orange-500 rounded cursor-pointer">
                <FileText size={18} />
                Hire-Someone
              </div>
            </Link>

            <hr className="border-gray-700 mx-4" />

            <Link href="/admin/form/message">
              <div className="flex items-center gap-2 p-2 hover:bg-orange-500 rounded cursor-pointer">
                <FileText size={18} />
                Messages
              </div>
            </Link>

            <Link href="/admin/form/consultant">
              <div className="flex items-center gap-2 p-2 hover:bg-orange-500 rounded cursor-pointer">
                <FileText size={18} />
                Consultant
              </div>
            </Link>

            <Link href="/admin/form/activity">
              <div className="flex items-center gap-2 p-2 hover:bg-orange-500 rounded cursor-pointer">
                <MessageSquare size={18} />
                Activity
              </div>
            </Link>
          </nav>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 pb-4">
          © 2025 Startex Hub
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;

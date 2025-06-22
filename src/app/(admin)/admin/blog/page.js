import React from 'react';
import { Trash2 } from 'lucide-react'; // Make sure you have lucide-react installed

export default function MessagesTable() {
  const data = [
    {
      email: 'thahirthahi7525@gmail.com',
      name: 'thahir thahir',
      phone: '+917510263837',
      message: 'gfrgf',
      requirement: 'dddd',
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Client Messages</h1>

      {/* Desktop Table */}
     <div className="overflow-x-auto hidden md:block">
  <table className="w-full table-fixed border border-gray-700 text-white rounded-lg text-sm">
    <thead className="bg-gray-800 text-gray-300 uppercase text-xs">
      <tr>
        <th className="px-4 py-3 w-1/5 text-left">Email</th>
        <th className="px-4 py-3 w-1/6 text-left">Name</th>
        <th className="px-4 py-3 w-1/6 text-left">Phone</th>
        <th className="px-4 py-3 w-1/4 text-left">Message</th>
        <th className="px-4 py-3 w-1/4 text-left">Requirement</th>
        <th className="px-4 py-3 w-10 text-right"></th>
      </tr>
    </thead>
    <tbody>
      {data.map((entry, index) => (
        <tr
          key={index}
          className="border-t border-gray-700 hover:bg-gray-800 transition"
        >
          <td className="px-4 py-3 w-1/5 font-semibold truncate">{entry.email}</td>
          <td className="px-4 py-3 w-1/6">{entry.name}</td>
          <td className="px-4 py-3 w-1/6">{entry.phone}</td>
          <td className="px-4 py-3 w-1/4">{entry.message}</td>
          <td className="px-4 py-3 w-1/4">{entry.requirement}</td>
          <td className="px-4 py-3 w-10 text-right">
            <button className="text-red-500 hover:text-red-600">
              <Trash2 size={16} />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      {/* Mobile View - Card Style */}
      <div className="block md:hidden space-y-4">
        {data.map((entry, index) => (
          <div
            key={index}
            className="bg-black border border-gray-700 rounded-lg p-4 text-white text-sm"
          >
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">Email: </span>
              <span className="font-medium">{entry.email}</span>
            </div>
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">Name: </span>
              {entry.name}
            </div>
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">Phone: </span>
              {entry.phone}
            </div>
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">Message: </span>
              {entry.message}
            </div>
            <div className="mb-2">
              <span className="text-gray-400 font-semibold">Requirement: </span>
              {entry.requirement}
            </div>
            <div className="flex justify-end">
              <button className="text-red-500 hover:text-red-600">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

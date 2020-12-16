
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export function JMenu() {
  return (
    <nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1" aria-label="Sidebar">
      <NavLink to="/dashboard" className="text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md" activeClassName="bg-gray-900">
        <svg className="text-gray-300 mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Dashboard
      </NavLink>

      <NavLink to="/repos" activeClassName="bg-gray-900" className="text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md">
        <svg className="mr-3 h-6 w-6 text-indigo-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
        Repositories

        <span className="ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full bg-indigo-800">
          4
        </span>
      </NavLink>
    </nav>
  )
}

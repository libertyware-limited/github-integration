import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { JFooter } from './footer';
import { JMenu } from './menu';
import { ConnectAccount } from './pages/connect/connect-account';
import { Dashboard } from './pages/dashboard/dashboard';
import { Repos } from './pages/repos/repos';

export function JMain() {
  return (
    <Router>
      <div className="h-screen flex overflow-hidden bg-gray-100">
        <div className="flex flex-auto flex-shrink md:flex-shrink-0">
          <div className="flex flex-col w-64">
            <div className="flex flex-col h-0 flex-1 bg-gray-800">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <img className="h-8 w-auto" src="/assets/logo.png" alt="Liberty Logo" />
                </div>
                <JMenu></JMenu>
              </div>
            </div>
            <div className="flex-shrink-0 flex bg-gray-700 p-7">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img className="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">
                      Tom Cook
                    </p>
                    <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col w-0 flex-1 overflow-hidden">
            <main className="flex-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/connect" element={<ConnectAccount />} />
                  <Route path="/repos" element={<Repos />} />
                </Routes>
            </main>
            <JFooter></JFooter>
          </div>
        </div>
      </div>
    </Router>
  )
}

import React from 'react';

export function RepoList({ children }) {
  return (
    <div className="relative z-0 divide-y divide-gray-200 border-b border-gray-200">
      { children }
    </div>
  )
}

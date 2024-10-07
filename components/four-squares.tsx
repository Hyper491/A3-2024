'use client'

import Link from 'next/link'

export function FourSquares() {
  const squares = [
    { id: 1, color: 'bg-red-500', url: 'https://www.example.com' },
    { id: 2, color: 'bg-blue-500', url: 'https://www.example.org' },
    { id: 3, color: 'bg-green-500', url: 'https://www.example.net' },
    { id: 4, color: 'bg-purple-500', url: 'https://www.example.io' },
    { id: 5, color: 'bg-purple-500', url: 'https://www.example.io' },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-4 max-w-md w-full">
        {squares.map((square) => (
          <Link
            key={square.id}
            href={square.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${square.color} w-full aspect-square rounded-lg shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 focus:ring-gray-400`}
            aria-label={`Visit ${new URL(square.url).hostname}`}
          />
        ))}
      </div>
    </div>
  )
}
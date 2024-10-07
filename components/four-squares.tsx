'use client'

import Link from 'next/link'

export function FourSquares() {

  type SquareProps = {
    id: number;
    color: string;
    url: string;
    description: string;
    font_color: string
  }

  const squares: SquareProps[] = [
    {
      id: 1, color: 'bg-white', url: 'https://www.kaspersky.com.br/resource-center/definitions/what-is-cyber-security', description: 'artigo',
      font_color: 'text-black'
    },
    {
      id: 2, color: 'bg-white', url: 'https://www.youtube.com/watch?v=yAHCyvXfLeA', description: 'video explicativo',
      font_color: 'text-black'
    },
    {
      id: 3, color: 'bg-blue-300', url: 'https://kahoot.com/', description: 'prova',
      font_color: 'text-purple-500'
    },

  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="grid grid-cols-2 gap-4 max-w-md w-full">
        {squares.map((square) => (
          <Link
            key={square.id}
            href={square.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${square.color} ${square.font_color} w-full text-center justify-center flex items-center text-2xl aspect-square rounded-lg shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50 focus:ring-gray-400`}
            aria-label={`Visit ${new URL(square.url).hostname}`}
          >{square.description}</Link>
        ))}
      </div>
    </div>
  )
}
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
      id: 1, color: 'bg-white', url: 'https://www.kaspersky.com.br/resource-center/definitions/what-is-cyber-security', description: 'Artigo de cyber segurança',
      font_color: 'text-black'
    },
    {
      id: 2, color: 'bg-white', url: 'https://www.youtube.com/watch?v=yAHCyvXfLeA', description: 'Video Explicativo - 1',
      font_color: 'text-black'
    },
    {
      id: 3, color: 'bg-white', url: 'https://kahoot.com/', description: 'Video Explicativo - 2',
      font_color: 'text-black'
    },
    {
      id: 4, color: 'bg-white', url: 'https://kahoot.com/', description: 'Video Explicativo - 3',
      font_color: 'text-black'
    },
    {
      id: 5, color: 'bg-white', url: 'https://kahoot.com/', description: 'Quiz 1',
      font_color: 'text-black'
    },
    {
      id: 6, color: 'bg-white', url: 'https://kahoot.com/', description: 'Quiz 2',
      font_color: 'text-black'
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
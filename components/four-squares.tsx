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
      id: 1, color: 'bg-white', url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1738223', description: 'Artigo Geral sobre "Cyber crime"',
      font_color: 'text-black'
    },
    {
      id: 2, color: 'bg-white', url: 'https://www.cisa.gov/', description: 'Site da CISA (Agência de segurança cibernética americana)',
      font_color: 'text-black'
    },
    {
      id: 3, color: 'bg-white', url: 'https://www.youtube.com/watch?v=sS3mZVCARZg', description: 'Video 1 - Email duvidosos',
      font_color: 'text-black'
    },
    {
      id: 4, color: 'bg-white', url: 'https://www.youtube.com/watch?v=1Luh3tBH-8I', description: 'Video 3 - O que são os "Cyber crime"',
      font_color: 'text-black'
    },
    {
      id: 5, color: 'bg-white', url: 'https://www.proprofs.com/quiz-school/story.php?title=cybersafe-quiz', description: 'Quiz 1 - Cyber safaty',
      font_color: 'text-black'
    },
    {
      id: 6, color: 'bg-white', url: 'https://www.proprofs.com/quiz-school/quizzes/cyber-crime-pretest', description: 'Quiz 2 - Cyber crime',
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
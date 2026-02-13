'use client'
// to use hooks : useState , useCallback -> which only work in in the client side,
// Next.js uses server component by default

import { Grid } from '../components/Grid';
import { useGridState } from '../hooks/useGridState';

export default function Home() {
  // using custom hook
  const { grid, onCellClick } = useGridState();
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex flex-col items-center justify-center p-4">
      {/* Title */}
      <h1 className="text-5xl font-bold text-white mb-8 text-center">
        Recursive Grid
      </h1>

      {/* Instructions */}
      <div className="mb-8 max-w-4xl w-full">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2">
              <span className="text-3xl">🎮</span>
              How to Play
            </h2>
            <p className="text-purple-200 text-lg">Click any cell to increment its value and trigger special effects</p>
          </div>

          {/* Rules Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Rule 1 */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-2xl p-5 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3 text-center">➗</div>
              <h3 className="text-white font-bold text-center mb-2 text-lg">Divisible by 3</h3>
              <p className="text-blue-100 text-center text-sm leading-relaxed">
                Right neighbor <span className="font-bold text-white">decrements by 1 </span>
              </p>
            </div>

            {/* Rule 2 */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl p-5 border border-green-400/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3 text-center">✨</div>
              <h3 className="text-white font-bold text-center mb-2 text-lg">Divisible by 5</h3>
              <p className="text-green-100 text-center text-sm leading-relaxed">
                Bottom neighbor <span className="font-bold text-white">increments by 2 </span>
              </p>
            </div>

            {/* Rule 3 */}
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl p-5 border border-red-400/30 hover:border-red-400/60 transition-all duration-300 hover:scale-105">
              <div className="text-4xl mb-3 text-center">🔒</div>
              <h3 className="text-white font-bold text-center mb-2 text-lg">Value ≥ 15</h3>
              <p className="text-red-100 text-center text-sm leading-relaxed">
                Cell becomes <span className="font-bold text-white">locked permanently</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      <Grid grid={grid} onCellClick={onCellClick} />

      {/*Legend */}
      <div className="mt-10 bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20 shadow-2xl">
        <div className="flex gap-8 items-center justify-center">
          <div className="flex items-center gap-3 group cursor-default">
            <div className="w-8 h-8 bg-blue-500 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200"></div>
            <span className="text-white font-medium text-lg">Even</span>
          </div>
          <div className="w-px h-8 bg-white/30"></div>
          <div className="flex items-center gap-3 group cursor-default">
            <div className="w-8 h-8 bg-green-500 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200"></div>
            <span className="text-white font-medium text-lg">Odd</span>
          </div>
          <div className="w-px h-8 bg-white/30"></div>
          <div className="flex items-center gap-3 group cursor-default">
            <div className="w-8 h-8 bg-red-500 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-200"></div>
            <span className="text-white font-medium text-lg">Locked</span>
          </div>
        </div>
      </div>
    </main>
  );
}

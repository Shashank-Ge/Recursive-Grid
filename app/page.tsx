'use client'
// to use hooks : useState , useCallback -> which only work in in the client side,
// Next.js uses server component by default

import { Grid } from '../components/Grid';
import { useGridState } from '../hooks/useGridState';

export default function Home() {
  // using custom hook
  const { grid, onCellClick } = useGridState();
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      {/* Radial glow background - softer and more diffused */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 50% 45%, rgba(99, 102, 241, 0.12) 0%, transparent 45%)'
      }}></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
        {/* Title - responsive sizing */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 sm:mb-8 text-center tracking-tight" style={{
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
        }}>
          Recursive Grid
        </h1>

        {/* Instructions - reduced dominance, responsive */}
        <div className="mb-8 sm:mb-10 md:mb-12 max-w-4xl w-full px-2 sm:px-0">
          <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[20px] p-4 sm:p-5 border border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
            {/* Header */}
            <div className="text-center mb-4 sm:mb-5">
              <h2 className="text-base sm:text-lg font-bold text-white/95 mb-2 flex items-center justify-center gap-2">
                <span className="text-lg sm:text-xl">🎮</span>
                How to Play
              </h2>
              <p className="text-slate-300/80 text-xs sm:text-sm opacity-75">Click any cell to increment its value and trigger special effects</p>
            </div>

            {/* Rules Grid - responsive columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Rule 1 */}
              <div className="bg-gradient-to-br from-blue-500/12 to-blue-600/4 rounded-2xl p-3 border border-blue-400/15 hover:border-blue-400/30 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg">
                <div className="text-xl sm:text-2xl mb-1 text-center">➗</div>
                <h3 className="text-white/95 font-semibold text-center mb-1 text-xs sm:text-sm">Divisible by 3</h3>
                <p className="text-blue-100/80 text-center text-xs leading-relaxed">
                  Right neighbor <span className="font-semibold text-white/95">decrements by 1</span>
                </p>
              </div>

              {/* Rule 2 */}
              <div className="bg-gradient-to-br from-green-500/12 to-green-600/4 rounded-2xl p-3 border border-green-400/15 hover:border-green-400/30 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg">
                <div className="text-xl sm:text-2xl mb-1 text-center">✨</div>
                <h3 className="text-white/95 font-semibold text-center mb-1 text-xs sm:text-sm">Divisible by 5</h3>
                <p className="text-green-100/80 text-center text-xs leading-relaxed">
                  Bottom neighbor <span className="font-semibold text-white/95">increments by 2</span>
                </p>
              </div>

              {/* Rule 3 */}
              <div className="bg-gradient-to-br from-red-500/12 to-red-600/4 rounded-2xl p-3 border border-red-400/15 hover:border-red-400/30 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:shadow-lg">
                <div className="text-xl sm:text-2xl mb-1 text-center">🔒</div>
                <h3 className="text-white/95 font-semibold text-center mb-1 text-xs sm:text-sm">Value ≥ 15</h3>
                <p className="text-red-100/80 text-center text-xs leading-relaxed">
                  Cell becomes <span className="font-semibold text-white/95">locked permanently</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid - increased size and prominence, responsive */}
        <Grid grid={grid} onCellClick={onCellClick} />

        {/*Legend - more subtle, responsive */}
        <div className="mt-8 sm:mt-10 md:mt-12 bg-white/[0.03] backdrop-blur-md rounded-2xl px-4 sm:px-6 md:px-8 py-3 border border-white/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
          <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 items-center justify-center">
            <div className="flex items-center gap-2 sm:gap-3 group cursor-default">
              <div
                className="w-5 h-5 sm:w-6 sm:h-6 rounded group-hover:scale-110 transition-transform duration-200"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #f5f5f5 0%, #d4d4d4 100%)',
                  boxShadow: '2px 2px 0px black, inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                  borderRadius: '4px'
                }}
              ></div>
              <span className="text-slate-400 font-medium text-xs sm:text-sm">Even</span>
            </div>
            <div className="w-px h-4 sm:h-5 bg-white/15"></div>
            <div className="flex items-center gap-2 sm:gap-3 group cursor-default">
              <div
                className="w-5 h-5 sm:w-6 sm:h-6 rounded group-hover:scale-110 transition-transform duration-200"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #1e3a8a 0%, #1a237e 100%)',
                  boxShadow: '2px 2px 0px black, inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                  borderRadius: '4px'
                }}
              ></div>
              <span className="text-slate-400 font-medium text-xs sm:text-sm">Odd</span>
            </div>
            <div className="w-px h-4 sm:h-5 bg-white/15"></div>
            <div className="flex items-center gap-2 sm:gap-3 group cursor-default">
              <div
                className="w-5 h-5 sm:w-6 sm:h-6 rounded group-hover:scale-110 transition-transform duration-200"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                  boxShadow: '2px 2px 0px black, inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                  borderRadius: '4px'
                }}
              ></div>
              <span className="text-slate-400 font-medium text-xs sm:text-sm">Locked</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


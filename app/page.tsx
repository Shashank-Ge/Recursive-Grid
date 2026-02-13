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

      {/*Instructions */}
      <div className="text-white text-center mb-6 max-w-2xl">
        <p className="mb-2"> Click Cells to increment values </p>
        <p className="text-sm text-gray-300">
          Divisible by 3 : Right neighbor decrements |
          Divisible by 5 : Bottom neighbor increments |
          Value ≥ 15 : Lock permanently
        </p>
      </div>

      {/* Grid */}
      <Grid grid={grid} onCellClick={onCellClick} />

      {/*Legend */}
      <div className="mt-8 flex gap-6 text-white">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-500 rounded"></div>
          <span> Even </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-500 rounded"></div>
          <span> Odd</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-red-500 rounded"></div>
          <span> Locked</span>
        </div>
      </div>
    </main>
  );
}

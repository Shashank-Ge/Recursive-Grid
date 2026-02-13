import React from 'react' ;
import { Cell as CellType } from '../engine/gridEngine';
import { getCellColorClass } from '../engine/gridEngine' ;
import { on } from 'events';

interface CellProps {
    cell : CellType;
    onClick : () => void  // function to call when clicked
}

// Cell Component ( used 9 times in the grid )

export function Cell ({cell , onClick } :CellProps) {
    // get color based o cell state
    const colorClass = getCellColorClass(cell);

    return (
        <button
            onClick={onClick}
            disabled={cell.locked}
            className={`
                ${colorClass}
                w-24 h-24
                text-white text-2xl font-bold
                rounded-lg
                transition-all duration-200
                hover:scale-105 hover:shadow-lg
                disabled:cursor-not-allowed disabled:opacity-75
                active:scale-95
            `}
        >
            {cell.value}
        </button>
    );
}
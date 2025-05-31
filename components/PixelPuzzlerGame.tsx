import React, { useState, useEffect } from 'react';

const TILE_COUNT = 9; // For a 3x3 puzzle
const EMPTY_TILE_INDEX = TILE_COUNT - 1; // The last tile is the empty one

const PixelPuzzlerGame: React.FC = () => {
  // State to hold the current order of tiles
  const [tiles, setTiles] = useState<number[]>([]);
  // State to track if the puzzle is solved
  const [isSolved, setIsSolved] = useState(false);

  useEffect(() => {
    // Initialize the puzzle when the component mounts
    initializePuzzle();
  }, []);

  useEffect(() => {
    // Check if the puzzle is solved whenever tiles change
    checkSolved();
  }, [tiles]);

  // Function to initialize or shuffle the puzzle
  const initializePuzzle = () => {
    let newTiles = Array.from({ length: TILE_COUNT }, (_, i) => i); // [0, 1, 2, ..., 8]
    
    // Shuffle the tiles (Fisher-Yates algorithm)
    for (let i = newTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newTiles[i], newTiles[j]] = [newTiles[j], newTiles[i]];
    }

    // Ensure the puzzle is solvable (for an N*N grid, N odd, inversions must be even)
    // For a 3x3 (N=3, odd), we just need an even number of inversions.
    // If it's not solvable, swap two tiles to make it solvable.
    // This is a simplified check for a 3x3, a more robust check involves parity of inversions.
    // For simplicity, we'll just re-shuffle if it's not solvable.
    if (!isSolvable(newTiles)) {
      // If not solvable, try shuffling again until it is
      // In a real game, you'd use a more sophisticated algorithm to guarantee solvability
      // For this quick puzzle, re-shuffling is acceptable.
      let solvable = false;
      while (!solvable) {
        newTiles = Array.from({ length: TILE_COUNT }, (_, i) => i);
        for (let i = newTiles.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newTiles[i], newTiles[j]] = [newTiles[j], newTiles[i]];
        }
        if (isSolvable(newTiles)) {
          solvable = true;
        }
      }
    }

    setTiles(newTiles);
    setIsSolved(false); // Reset solved state
  };

  // Helper to check if a puzzle configuration is solvable (simplified for 3x3)
  const isSolvable = (currentTiles: number[]): boolean => {
    let inversions = 0;
    for (let i = 0; i < TILE_COUNT - 1; i++) {
      for (let j = i + 1; j < TILE_COUNT; j++) {
        // Count inversions, ignoring the empty tile (0 in our case, as we map 0-8)
        if (currentTiles[i] !== EMPTY_TILE_INDEX && currentTiles[j] !== EMPTY_TILE_INDEX && currentTiles[i] > currentTiles[j]) {
          inversions++;
        }
      }
    }
    // For an odd grid size (like 3x3), the puzzle is solvable if the number of inversions is even.
    return inversions % 2 === 0;
  };

  // Function to handle tile clicks
  const handleTileClick = (index: number) => {
    if (isSolved) return; // Don't allow moves if solved

    const emptyIndex = tiles.indexOf(EMPTY_TILE_INDEX); // Find the empty tile
    const clickedTileValue = tiles[index];

    // Determine if the clicked tile is adjacent to the empty tile
    const rowClicked = Math.floor(index / 3);
    const colClicked = index % 3;
    const rowEmpty = Math.floor(emptyIndex / 3);
    const colEmpty = emptyIndex % 3;

    const isAdjacent = 
      (Math.abs(rowClicked - rowEmpty) === 1 && colClicked === colEmpty) || // Vertical adjacency
      (Math.abs(colClicked - colEmpty) === 1 && rowClicked === rowEmpty);   // Horizontal adjacency

    if (isAdjacent) {
      // Create a new array with swapped tiles
      const newTiles = [...tiles];
      newTiles[emptyIndex] = clickedTileValue;
      newTiles[index] = EMPTY_TILE_INDEX;
      setTiles(newTiles);
    }
  };

  // Function to check if the puzzle is solved
  const checkSolved = () => {
    // A puzzle is solved if tiles are in ascending order (0, 1, 2, ..., 8)
    const solvedOrder = Array.from({ length: TILE_COUNT }, (_, i) => i);
    const solved = tiles.every((tile, i) => tile === solvedOrder[i]);
    setIsSolved(solved);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-container-bg rounded-lg shadow-inner border-2 border-accent-lime">
      <h4 className="text-xl font-display text-accent-yellow mb-4">Pixel Puzzler 3000DX</h4>
      {/* Puzzle grid container */}
      <div className="grid grid-cols-3 gap-1 p-1 bg-gray-800 border-2 border-accent-pink rounded-md w-[296px] h-[296px]"> {/* Set explicit width/height for 3x3 grid (3*96px + 2*4px gap) */}
        {tiles.map((tile, index) => (
          <div
            key={tile} // Use the tile value as key for consistent rendering
            className={`
              w-full h-full flex items-center justify-center text-3xl font-bold 
              rounded-sm shadow-md cursor-pointer transition-all duration-100
              ${tile === EMPTY_TILE_INDEX ? 'bg-transparent cursor-default' : 'bg-accent-cyan text-black hover:bg-accent-lime'}
              ${isSolved && tile !== EMPTY_TILE_INDEX ? 'bg-accent-lime text-white' : ''}
            `}
            onClick={() => handleTileClick(index)}
            aria-label={tile === EMPTY_TILE_INDEX ? "Empty space" : `Tile ${tile + 1}`}
          >
            {/* Display tile number, but hide for the empty tile */}
            {tile !== EMPTY_TILE_INDEX ? tile + 1 : ''} 
          </div>
        ))}
      </div>
      {isSolved && (
        <p className="text-accent-lime font-display text-2xl mt-4 animate-pulse">
          Totally Radical! You Solved It!
        </p>
      )}
      <button
        type="button"
        onClick={initializePuzzle}
        className="mt-6 px-5 py-2 border-2 border-black text-md font-display rounded-md shadow-hard-dark text-button-text bg-accent-yellow hover:bg-opacity-80 focus:outline-none focus:ring-4 focus:ring-accent-lime active:shadow-button-press active:translate-y-0.5 transition-all duration-150"
        aria-label="Shuffle Puzzle"
      >
        Shuffle, Dude!
      </button>
    </div>
  );
};

export default PixelPuzzlerGame;

import React, { useState } from 'react';
import MemoryCard from './components/MemoryCard';
import MemoryInfo from './components/MemoryInfo';
import { memoryTypes } from './data/memoryTypes';
import { MemoryType } from './types';
import { Info } from 'lucide-react';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const currentMemory = memoryTypes[currentIndex];

  const handleLike = () => {
    if (currentIndex < memoryTypes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDislike = () => {
    if (currentIndex < memoryTypes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Memory Dating App</h1>
      {currentIndex < memoryTypes.length ? (
        <>
          <MemoryCard
            memory={currentMemory}
            onLike={handleLike}
            onDislike={handleDislike}
          />
          <button
            onClick={toggleInfo}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
          >
            <Info size={20} className="mr-2" /> More Info
          </button>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">No more memory types!</h2>
          <p>You've seen all available memory types.</p>
          <button
            onClick={() => setCurrentIndex(0)}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Start Over
          </button>
        </div>
      )}
      {showInfo && (
        <MemoryInfo memory={currentMemory} onClose={toggleInfo} />
      )}
    </div>
  );
}

export default App;
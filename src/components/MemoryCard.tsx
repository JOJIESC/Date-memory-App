import React from 'react';
import { ThumbsUp, ThumbsDown, Info } from 'lucide-react';
import { MemoryCardProps } from '../types';

const MemoryCard: React.FC<MemoryCardProps> = ({ memory, onLike, onDislike }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto">
      <img src={memory.image} alt={memory.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{memory.name}</h2>
        <p className="text-gray-600 mb-4">Released: {memory.releaseDate}</p>
        <div className="mb-4">
          <p className="text-sm text-gray-600">Write Speed: {memory.writeSpeed}</p>
          <p className="text-sm text-gray-600">Read Speed: {memory.readSpeed}</p>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={onDislike}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
          >
            <ThumbsDown size={20} className="mr-2" /> Dislike
          </button>
          <button
            onClick={onLike}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
          >
            <ThumbsUp size={20} className="mr-2" /> Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;
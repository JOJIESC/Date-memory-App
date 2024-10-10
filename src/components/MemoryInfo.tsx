import React from 'react';
import { MemoryType } from '../types';
import { X } from 'lucide-react';

interface MemoryInfoProps {
  memory: MemoryType;
  onClose: () => void;
}

const MemoryInfo: React.FC<MemoryInfoProps> = ({ memory, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">{memory.name}</h2>
        <img src={memory.image} alt={memory.name} className="w-full h-48 object-cover mb-4 rounded" />
        <p className="mb-2"><strong>Release Date:</strong> {memory.releaseDate}</p>
        <p className="mb-2"><strong>Write Speed:</strong> {memory.writeSpeed}</p>
        <p className="mb-2"><strong>Read Speed:</strong> {memory.readSpeed}</p>
        <div className="mb-4">
          <h3 className="font-bold mb-2">Pros:</h3>
          <ul className="list-disc list-inside">
            {memory.pros.map((pro, index) => (
              <li key={index}>{pro}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">Cons:</h3>
          <ul className="list-disc list-inside">
            {memory.cons.map((con, index) => (
              <li key={index}>{con}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MemoryInfo;
import React from 'react';
import { Music, Volume2 } from 'lucide-react';

interface MusicControlProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export function MusicControl({ isPlaying, onToggle }: MusicControlProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-4 right-4 p-2 md:p-3 bg-white rounded-full shadow-lg z-50"
    >
      {isPlaying ? <Volume2 size={20} className="md:w-6 md:h-6" /> : <Music size={20} className="md:w-6 md:h-6" />}
    </button>
  );
}
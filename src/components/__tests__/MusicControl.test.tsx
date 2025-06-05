import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MusicControl } from '../MusicControl';
import { useState } from 'react';

function Wrapper() {
  const [isPlaying, setIsPlaying] = useState(false);
  return <MusicControl isPlaying={isPlaying} onToggle={() => setIsPlaying(p => !p)} />;
}

test('clicking the button toggles between Music and Volume2 icons', async () => {
  render(<Wrapper />);
  const button = screen.getByRole('button');

  expect(button.querySelector('svg.lucide-music')).toBeInTheDocument();
  expect(button.querySelector('svg.lucide-volume2')).not.toBeInTheDocument();

  await userEvent.click(button);
  expect(button.querySelector('svg.lucide-volume2')).toBeInTheDocument();
  expect(button.querySelector('svg.lucide-music')).not.toBeInTheDocument();

  await userEvent.click(button);
  expect(button.querySelector('svg.lucide-music')).toBeInTheDocument();
});

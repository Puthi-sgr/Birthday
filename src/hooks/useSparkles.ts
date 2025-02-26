import { useEffect } from 'react';

export function useSparkles() {
  useEffect(() => {
    const createSparkle = () => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.innerHTML = '✨';
      sparkle.style.left = Math.random() * window.innerWidth + 'px';
      sparkle.style.top = Math.random() * window.innerHeight + 'px';
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 2000);
    };

    const interval = setInterval(createSparkle, 300);
    return () => clearInterval(interval);
  }, []);
}
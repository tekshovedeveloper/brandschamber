'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;

    const color1 = '#1941bf'; // same as metawebpro color_1
    const color2 = '#bc2dff'; // same as metawebpro color_2
    
    const speed = 8500;       // ~ metawebpro “850” but in ms

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      width = rect.width;
      height = rect.height;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = (time: number) => {
      const t = time / speed; // 0..∞

      ctx.clearRect(0, 0, width, height);

      // --- dark base, like metawebpro ---
      ctx.fillStyle = '#04020b';
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'lighter';

      const maxR = Math.max(width, height) * 0.9;

      // blob 1 (purple / pink-ish)
      const cx1 = width * (0.2 + 0.15 * Math.cos(t * 2 * Math.PI));
      const cy1 = height * (0.8 + 0.1 * Math.sin(t * 1.5 * Math.PI));
      const g1 = ctx.createRadialGradient(cx1, cy1, 0, cx1, cy1, maxR);
      g1.addColorStop(0, color2);
      g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      // blob 2 (blue)
      const cx2 = width * (0.8 + 0.1 * Math.sin(t * 1.7 * Math.PI));
      const cy2 = height * (0.2 + 0.15 * Math.cos(t * 1.3 * Math.PI));
      const g2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, maxR * 0.9);
      g2.addColorStop(0, color1);
      g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',      // stays behind as you scroll, like their hero
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
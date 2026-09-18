import React, { useEffect, useRef } from 'react';

/**
 * FluidMeshBackground
 * Recreates the exact glowing ambient aurora / mesh gradient seen in the user's video:
 * Deep midnight black canvas with swirling, morphing pools of:
 * - Electric Cyan / Turquoise (#00f0ff, #22d3ee)
 * - Mint / Emerald Green (#10b981, #059669)
 * - Deep Oceanic Cobalt / Sapphire Blue (#0284c7, #1e3a8a, #0f172a)
 * - Soft dark vignettes at the corners (#020617, #000000)
 */
export function FluidMeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Orbs matching the exact colors and movements from the video
    // Orbs drift with sinusoidal Lissajous paths
    const orbs = [
      {
        // Bright Electric Cyan (top right / center)
        color: [0, 240, 255],
        radiusScale: 0.65,
        speedX: 0.00045,
        speedY: 0.00055,
        phaseX: 0.5,
        phaseY: 1.2,
        baseX: 0.72,
        baseY: 0.28,
        amplitudeX: 0.25,
        amplitudeY: 0.28,
        alpha: 0.85,
      },
      {
        // Emerald / Teal Green (left / center top)
        color: [16, 185, 129],
        radiusScale: 0.75,
        speedX: 0.0005,
        speedY: 0.0004,
        phaseX: 2.1,
        phaseY: 0.8,
        baseX: 0.25,
        baseY: 0.45,
        amplitudeX: 0.28,
        amplitudeY: 0.3,
        alpha: 0.75,
      },
      {
        // Deep Oceanic Cobalt Blue (bottom center & mid left)
        color: [2, 132, 199],
        radiusScale: 0.85,
        speedX: 0.00035,
        speedY: 0.00048,
        phaseX: 3.8,
        phaseY: 2.5,
        baseX: 0.48,
        baseY: 0.72,
        amplitudeX: 0.32,
        amplitudeY: 0.26,
        alpha: 0.9,
      },
      {
        // Luminous Light Turquoise / Aqua Accent (drifting across top-center)
        color: [34, 211, 238],
        radiusScale: 0.55,
        speedX: 0.00062,
        speedY: 0.00042,
        phaseX: 1.2,
        phaseY: 4.1,
        baseX: 0.62,
        baseY: 0.52,
        amplitudeX: 0.22,
        amplitudeY: 0.24,
        alpha: 0.7,
      },
      {
        // Deep Indigo/Navy anchor (creates rich darkness contrast)
        color: [15, 23, 42],
        radiusScale: 0.95,
        speedX: 0.00028,
        speedY: 0.00032,
        phaseX: 0.0,
        phaseY: 0.0,
        baseX: 0.2,
        baseY: 0.2,
        amplitudeX: 0.15,
        amplitudeY: 0.15,
        alpha: 0.95,
      },
    ];

    let startTime = performance.now();

    const render = (now: number) => {
      const elapsed = now - startTime;

      // Base dark midnight tone
      ctx.fillStyle = '#030712';
      ctx.fillRect(0, 0, width, height);

      // Render glowing morphing orbs
      const maxDim = Math.max(width, height);

      orbs.forEach((orb) => {
        // Calculate position based on time
        const x =
          (orb.baseX + Math.sin(elapsed * orb.speedX + orb.phaseX) * orb.amplitudeX) *
          width;
        const y =
          (orb.baseY + Math.cos(elapsed * orb.speedY + orb.phaseY) * orb.amplitudeY) *
          height;
        const radius = orb.radiusScale * maxDim;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        const [r, g, b] = orb.color;
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${orb.alpha})`);
        gradient.addColorStop(0.35, `rgba(${r}, ${g}, ${b}, ${orb.alpha * 0.5})`);
        gradient.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${orb.alpha * 0.15})`);
        gradient.addColorStop(1, 'rgba(3, 7, 18, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Subtle dark corner vignettes for depth
      const vignette = ctx.createRadialGradient(
        width * 0.5,
        height * 0.5,
        maxDim * 0.25,
        width * 0.5,
        height * 0.5,
        maxDim * 0.8
      );
      vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignette.addColorStop(1, 'rgba(2, 6, 23, 0.65)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      id="fluid-mesh-bg-container"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Dynamic 60fps Canvas Mesh */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full object-cover filter blur-[60px] sm:blur-[80px] scale-110 transform-gpu"
      />

      {/* Ambient CSS glow wave overlay for extra organic breathing */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-[#030712]/60 mix-blend-multiply pointer-events-none" />

      {/* Subtle fine film grain to eliminate digital banding */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}

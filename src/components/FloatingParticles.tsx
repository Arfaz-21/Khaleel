import { useEffect, useRef } from 'react';

interface FloatingParticlesProps {
  reducedMotion?: boolean;
}

export function FloatingParticles({ reducedMotion }: FloatingParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (reducedMotion) return;
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

    window.addEventListener('resize', handleResize);

    // Particle pool: gold dust, shimmering stars, and delicate sage/ivory petals
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      type: 'dust' | 'petal' | 'sparkle';
      opacity: number;
      opacityDelta: number;
      color: string;
    }

    const particles: Particle[] = [];
    const count = Math.min(38, Math.floor(window.innerWidth / 30));

    const colors = [
      'rgba(197, 164, 109, ', // champagne gold
      'rgba(232, 213, 168, ', // light gold
      'rgba(247, 241, 230, ', // ivory
      'rgba(142, 157, 140, ', // sage green light
    ];

    for (let i = 0; i < count; i++) {
      const typeRand = Math.random();
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: typeRand < 0.6 ? 1.5 + Math.random() * 2 : 4 + Math.random() * 5,
        speedX: -0.3 + Math.random() * 0.6,
        speedY: 0.3 + Math.random() * 0.7,
        rotation: Math.random() * 360,
        rotationSpeed: -0.02 + Math.random() * 0.04,
        type: typeRand < 0.5 ? 'dust' : typeRand < 0.85 ? 'petal' : 'sparkle',
        opacity: 0.2 + Math.random() * 0.5,
        opacityDelta: (Math.random() - 0.5) * 0.008,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        p.opacity += p.opacityDelta;

        if (p.opacity > 0.75 || p.opacity < 0.15) {
          p.opacityDelta *= -1;
        }

        // Wrap around screen
        if (p.y > height + 20) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -10;
        if (p.x < -20) p.x = width + 10;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === 'dust') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity})`;
          ctx.fill();
        } else if (p.type === 'petal') {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 1.6, p.size * 0.8, 0, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity * 0.7})`;
          ctx.fill();
        } else {
          // 4-point sparkle star
          ctx.beginPath();
          ctx.strokeStyle = `${p.color}${p.opacity})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(-p.size, 0);
          ctx.lineTo(p.size, 0);
          ctx.moveTo(0, -p.size);
          ctx.lineTo(0, p.size);
          ctx.stroke();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 h-full w-full"
      style={{ opacity: 0.8 }}
    />
  );
}

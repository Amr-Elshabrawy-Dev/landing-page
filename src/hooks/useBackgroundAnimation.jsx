import { useEffect, useRef } from 'react';

/**
 * useBackgroundAnimation Hook
 * Provides the logic for creating an animated background with particles and connections.
 *
 * @param {Object} options - Options for customizing the animation
 * @param {number} options.particleSize - Maximum size of the particles
 * @param {number} options.speed - Speed multiplier for particle movement
 * @param {Array<{ r: number, g: number, b: number }>} options.colors - Array of colors for particles
 * @param {Array<string>} options.shapes - Array of shapes for particles ("circle", "square", "triangle", etc.)
 * @returns {React.RefObject} Ref to attach to the canvas element
 */
const useBackgroundAnimation = ({
  particleSize,
  speed,
  colors,
  shapes,
  shapeCount,
  shapeBorder,
  lineWidth,
} = {}) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const validShapes = ['circle', 'square', 'triangle', 'star', 'hexagon'];
    const filteredShapes = shapes.filter((shape) =>
      validShapes.includes(shape)
    );
    const createParticles = () => {
      particlesRef.current = Array.from(
        { length: shapeCount >= 80 ? 80 : shapeCount },
        () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.floor(Math.random() * particleSize) + 4,
          speedX: (Math.random() - 0.5) * 2 * speed,
          speedY: (Math.random() - 0.5) * 2 * speed,
          colorIndex: Math.floor(Math.random() * colors.length), // Random color
          shapeIndex: Math.floor(Math.random() * filteredShapes.length), // Random shape
        })
      );
    };

    const resizeCanvas = () => {
      const parentElement = canvas.parentElement;
      const { width, height } = parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.scale(dpr, dpr);
      createParticles();
    };

    const updateParticles = () => {
      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
    };

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      const connectionDistance = Math.min(canvas.width, canvas.height) * 0.15;

      particlesRef.current.forEach((particle) => {
        const color = colors[particle.colorIndex];
        const shape = shapes[particle.shapeIndex]; // Get particle shape
        context.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.8)`;

        const isShapeBorder = () => {
          if (shapeBorder) {
            context.lineWidth = shapeBorder;
            context.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 1)`;
            context.stroke();
          }
        };

        // Draw particle shape
        context.beginPath();

        switch (shape) {
          case 'circle':
            context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            isShapeBorder();
            break;
          case 'square':
            context.rect(
              particle.x - particle.size / 2,
              particle.y - particle.size / 2,
              particle.size,
              particle.size
            );
            isShapeBorder();
            break;
          case 'triangle':
            context.moveTo(particle.x, particle.y - particle.size);
            context.lineTo(
              particle.x - particle.size,
              particle.y + particle.size
            );
            context.lineTo(
              particle.x + particle.size,
              particle.y + particle.size
            );
            context.closePath();
            isShapeBorder();
            break;
          case 'star': {
            const points = 5;
            const outerRadius = particle.size;
            const innerRadius = particle.size / 2;

            context.beginPath();
            for (let i = 0; i < points * 2; i++) {
              const radius = i % 2 === 0 ? outerRadius : innerRadius;
              const angle = (i * Math.PI) / points;
              if (i === 0) {
                context.moveTo(
                  particle.x + radius * Math.sin(angle),
                  particle.y - radius * Math.cos(angle)
                );
              } else {
                context.lineTo(
                  particle.x + radius * Math.sin(angle),
                  particle.y - radius * Math.cos(angle)
                );
              }
            }
            context.closePath();
            isShapeBorder();

            break;
          }
          case 'hexagon': {
            const angle = (Math.PI * 2) / 6; // 6 sides
            context.moveTo(
              particle.x + particle.size * Math.cos(0),
              particle.y + particle.size * Math.sin(0)
            );
            for (let i = 1; i <= 6; i++) {
              context.lineTo(
                particle.x + particle.size * Math.cos(i * angle),
                particle.y + particle.size * Math.sin(i * angle)
              );
            }
            context.closePath();
            isShapeBorder();
            break;
          }
          default:
            // Ignore particles with unsupported shapes
            return;
        }
        context.fill();

        // Draw connections
        particlesRef.current.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = 0.2 * (1 - distance / connectionDistance);
            context.strokeStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(otherParticle.x, otherParticle.y);
            context.lineWidth = lineWidth >= 8 ? 8 : lineWidth;
            context.stroke();
          }
        });
      });
    };

    const render = () => {
      updateParticles();
      draw();
      requestAnimationFrame(render);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleSize, speed, colors, shapes, shapeCount, shapeBorder, lineWidth]);

  return canvasRef;
};

export default useBackgroundAnimation;

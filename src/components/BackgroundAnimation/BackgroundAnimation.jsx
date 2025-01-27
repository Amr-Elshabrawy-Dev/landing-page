import { useEffect, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import "./BackgroundAnimation.css";

/**
 * BackgroundAnimation Component
 * Creates an animated background with moving particles and connecting lines
 * 
 * @component
 * @example
 * return (
 *   <BackgroundAnimation particleSize={5} />
 * )
 * 
 * @description
 * This component creates a canvas-based animation featuring:
 * - Multiple particles moving across the screen
 * - Particles bouncing off screen boundaries
 * - Dynamic connections between nearby particles
 * - Responsive design that adapts to window resizing
 * 
 * The animation uses:
 * - 50 particles with random positions, sizes, and velocities
 * - Particles size range: 1-4 pixels (default) or as specified by the particleSize prop
 * - Randomly colored particles
 * - Randomly colored connecting lines between particles within 100px
 * - Connection opacity based on distance
 * 
 * @param {number} particleSize - The maximum size of the particles
 * @returns {JSX.Element} A div containing a canvas element with the particle animation
 */
const BackgroundAnimation = ({ particleSize = 5 }) => { // increased default size
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  
  // Define a color palette for particles
  const colors = useMemo(() => [
    { r: 248, g: 211, b: 109 },   // Primary
    { r: 113, g: 75, b: 236 },    // Secondary
    { r: 157, g: 66, b: 253 },    // Tertiary
  ], []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Initialize particles with random positions, sizes, and velocities
    const createParticles = () => {
      particlesRef.current = Array.from({ length: 25 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * particleSize + 4,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        colorIndex: Math.floor(Math.random() * colors.length),
      }));
    };

    // Resize canvas to match the window size and create particles
    const resizeCanvas = () => {
      const parentElement = canvas.parentElement;
      const { width, height } = parentElement.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      // Set canvas size based on parent element and device pixel ratio
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      // Scale context for retina displays
      context.scale(dpr, dpr);

      // Maintain relative particle positions during resize
      if (particlesRef.current.length > 0) {
        const scaleX = width / (canvas.width / dpr);
        const scaleY = height / (canvas.height / dpr);
        particlesRef.current.forEach(particle => {
          particle.x *= scaleX;
          particle.y *= scaleY;
        });
      } else {
        createParticles();
      }
    };

    // Update particle positions and handle boundary collisions
    const updateParticles = () => {
      particlesRef.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off walls
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
    };

    // Draw particles and connections between them
    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate relative connection distance based on canvas size
      const connectionDistance = Math.min(canvas.width, canvas.height) * 0.15; // reduced to 15% for better performance

      particlesRef.current.forEach(particle => {
        // Draw particle
        const color = colors[particle.colorIndex];
        context.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, 0.6)`; // reduced opacity
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();

        // Draw connections
        particlesRef.current.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const gradient = context.createLinearGradient(
              particle.x, particle.y, 
              otherParticle.x, otherParticle.y
            );
            const color1 = colors[particle.colorIndex];
            const color2 = colors[otherParticle.colorIndex];
            
            // Calculate opacity based on relative distance
            const opacity = 0.25 * (1 - distance / connectionDistance); // reduced max opacity
            
            gradient.addColorStop(0, `rgba(${color1.r}, ${color1.g}, ${color1.b}, ${opacity})`);
            gradient.addColorStop(1, `rgba(${color2.r}, ${color2.g}, ${color2.b}, ${opacity})`);
            
            context.strokeStyle = gradient;
            context.lineWidth = 2; // reduced line width
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(otherParticle.x, otherParticle.y);
            context.stroke();
          }
        });
      });
    };

    // Render loop to update and draw particles
    const render = () => {
      updateParticles();
      draw();
      requestAnimationFrame(render);
    };

    // Initial setup
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    render();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [particleSize, colors]);

  return (
    <div className="background-animation">
      <canvas ref={canvasRef} />
    </div>
  );
};

// Define prop types for the component
BackgroundAnimation.propTypes = {
  particleSize: PropTypes.number,
};

export default BackgroundAnimation;
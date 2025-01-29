import PropTypes from 'prop-types';
import useBackgroundAnimation from '../../hooks/useBackgroundAnimation';
import './BackgroundAnimation.css';
const BackgroundAnimation = ({ config = {} }) => {
  // Initialize the hook with custom configuration
  const canvasRef = useBackgroundAnimation({
    particleSize: config.particleSize || 8,
    speed: config.speed || 1,
    colors: config.colors || [
      { r: 248, g: 211, b: 109 }, // Yellow
      { r: 113, g: 75, b: 236 }, // Purple
      { r: 157, g: 66, b: 253 }, // Violet
      { r: 252, g: 79, b: 145 }, // Pink
    ],
    shapes: config.shapes || [
      'circle',
      'square',
      'triangle',
      'star',
      'hexagon',
    ],
    shapeCount: config.shapeCount || 50,
    shapeBorder: config.shapeBorder || 0,
    lineWidth: config.lineWidth || 2,
  });

  return (
    <div className="background-animation">
      <canvas ref={canvasRef} />
    </div>
  );
};

BackgroundAnimation.propTypes = {
  config: PropTypes.shape({
    particleSize: PropTypes.number,
    speed: PropTypes.number,
    colors: PropTypes.arrayOf(
      PropTypes.shape({
        r: PropTypes.number,
        g: PropTypes.number,
        b: PropTypes.number,
      })
    ),
    shapes: PropTypes.arrayOf(PropTypes.string) || PropTypes.bool,
    shapeCount: PropTypes.number,
    shapeBorder: PropTypes.number,
    lineWidth: PropTypes.number,
  }),
};

export default BackgroundAnimation;

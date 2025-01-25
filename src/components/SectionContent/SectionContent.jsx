import PropTypes from 'prop-types';
import "./SectionContent.css";
import { useVisibility } from '../../hooks/useVisibility';

const SectionContent = ({ title, details}) => {
  const [elementRef3, isVisible3] = useVisibility();
  return (
    <div
      ref={elementRef3}
      className={`sectionContent ${
        isVisible3 ? "appear-visible" : "appear-right"
      }`}
    >
      <h2>{title}</h2>
      <p>{details}</p>
    </div>
  );
};

SectionContent.propTypes = {
  title: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default SectionContent;

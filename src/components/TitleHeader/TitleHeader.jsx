import PropTypes from 'prop-types';
import "./TitleHeader.css"
const TitleHeader = ({ title }) => {
  return (
    <div className="titleHeader">
      <h4 className="title">{title}</h4>
    </div>
  );
};

TitleHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleHeader;

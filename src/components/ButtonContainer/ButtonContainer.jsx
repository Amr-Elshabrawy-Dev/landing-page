import { MdArrowForwardIos } from "react-icons/md";
import "./ButtonContainer.css";
const ButtonContainer = () => {
  return (
    <div className="btnContainer">
      <button className="btnContainer__btn">
        <span className="btn__text">more details</span>
        <span className="btn__icon">
          <MdArrowForwardIos size={25} />
        </span>
      </button>
    </div>
  );
};
export default ButtonContainer;

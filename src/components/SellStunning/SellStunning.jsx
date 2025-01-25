import { useVisibility } from "../../hooks/useVisibility";
import ButtonContainer from "../ButtonContainer/ButtonContainer";
import { FaShoppingCart } from "react-icons/fa";
import "./SellStunning.css";
import TitleHeader from "../TitleHeader/TitleHeader";
import SectionContent from "../SectionContent/SectionContent";

const SellStunning = () => {
  const [elementRef, isVisible] = useVisibility();

  return (
    <div className="container">
      <div className="sellStunning">
        <TitleHeader title="We help you" />
        <div className="sellStunning__content">
          <div>
            <SectionContent
              title="Sell Stunning Products"
              details=" We'll guide you through our unique 5-step brand-building framework"
            />
          </div>
          <div
            className={`sellStunning__img ${
              isVisible ? "appear-visible" : "appear-right"
            }`}
            ref={elementRef}
          >
            <div className="product-chair">
              <div className="product__card">
                <img
                  src="./images/chair.webp"
                  alt="hero image"
                  loading="lazy"
                  width={200}
                />
                <div className="card__title">
                  <h4>Minimal Chair</h4>
                </div>
                <div className="card__footer">
                  <p className="card__price">
                    $204<span>.00</span>
                  </p>
                  <button className="card__btn">
                    <FaShoppingCart size={15} />
                  </button>
                </div>
              </div>
            </div>
            <div className="product-headphone">
              <div className="product__card">
                <img
                  src="./images/headphone.webp"
                  alt="hero image"
                  loading="lazy"
                  width={200}
                />
                <div className="card__title">
                  <h4>Beats Headphone</h4>
                </div>
                <div className="card__footer">
                  <p className="card__price">
                    $74<span>.00</span>
                  </p>
                  <button className="card__btn">
                    <FaShoppingCart size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonContainer />
      </div>
    </div>
  );
};
export default SellStunning;

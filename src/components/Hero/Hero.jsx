import { useVisibility } from "../../hooks/useVisibility";
import { RiSearchLine } from "react-icons/ri";
import "./Hero.css";
const Hero = () => {
  const [elementRef, isVisible] = useVisibility();
  const [elementRef2, isVisible2] = useVisibility();
  return (
    <div className="container">
      <div className="overlay hero__overlay" />
      <div className="hero">
        <div
          className={`hero__image ${
            isVisible ? "appear-visible" : "appear-left"
          }`}
          ref={elementRef}
        >
          <img
            src="./images/hero-img-1.webp"
            alt="hero image"
            loading="lazy"
            width={500}
          />
          <div className="image__card">
            <div className="card__header">
              <img
                src="./images/hero-card.webp"
                alt="hero card"
                loading="lazy"
                width={100}
              />
            </div>
            <div className="card__body">
              <h3>James Bruno</h3>
              <p>Digital Marketer</p>
            </div>
          </div>
        </div>
        <div
          className={`hero__content ${
            isVisible2 ? "appear-visible" : "appear-right"
          }`}
          ref={elementRef2}
        >
          <h1>We Help You Build & Grow an Online Business</h1>
          <div>
            <input placeholder="Tell us what you need to build..." />
            <button>
              <RiSearchLine size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;

import { useVisibility } from "../../hooks/useVisibility";
import "./CardProducts.css";

const cardData = [
  {
    id: 1,
    img: "./images/card-img-1.webp",
    title: "fashion store",
    text: "Shop ladies fashion at miss guided USA. With hundreds of new styles hitting our shelves every week",
  },
  {
    id: 2,
    img: "./images/card-img-2.webp",
    title: "home furniture",
    text: "provides superior quality furniture and mattresses at a price that customers can easily afford",
  },
  {
    id: 3,
    img: "./images/card-img-3.webp",
    title: "super gadget store",
    text: "specialize in selling unique gifts cool gadgets. outdoor gear and fab toys.",
  },
];

const CardProducts = () => {
  const ref1 = useVisibility();
  const ref2 = useVisibility();
  const ref3 = useVisibility();
  const visibilityRefs = [ref1, ref2, ref3];

  return (
    <div className="container">
      <div className="overlay cardProducts__overlay" />
      <div className="cardProducts">
        {cardData.map((item, index) => {
          const [elementRef, isVisible] = visibilityRefs[index];
          return (
            <div
              key={item.id}
              className={`cardProduct ${
                isVisible ? "appear-visible" : "appear"
              }`}
              ref={elementRef}
            >
              <div className="cardProduct__img">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  width={300}
                />
              </div>
              <div className="cardProduct__text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardProducts;

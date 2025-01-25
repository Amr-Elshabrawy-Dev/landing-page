import ButtonContainer from "../ButtonContainer/ButtonContainer";
import { IoMdArrowDropupCircle } from "react-icons/io";
import "./OurCustomers.css";
import TitleHeader from "../TitleHeader/TitleHeader";
import SectionContent from "../SectionContent/SectionContent";
import { useVisibility } from "../../hooks/useVisibility";

const customersData = [
  {
    id: 1,
    img: "./images/customer-1.webp",
    earnings: "$7,654",
    revenue: "+$232",
  },
  {
    id: 2,
    img: "./images/customer-2.webp",
    earnings: "$9,978",
    revenue: "+$349",
  },
];

const OurCustomers = () => {
  const [elementRef, isVisible] = useVisibility();
  return (
    <div className="container">
      <div className="ourCustomers">
        <TitleHeader title="What we do" />
        <div className="ourCustomers__content">
          <div
            className={`ourCustomers__img ${
              isVisible ? "appear-visible" : "appear-left"
            }`}
            ref={elementRef}
          >
            {customersData.map((item) => (
              <div key={item.id} className="customer__card magic-pattern">
                <div className="customer__card__img">
                  <img src={item.img} alt="customer" loading="lazy" width={100}/>
                </div>
                <div className="customer__card__text">
                  <h3>
                    {item.earnings}
                    <span>
                      <IoMdArrowDropupCircle size={17} />
                    </span>
                  </h3>
                  <p>
                    total revenue <span>{item.revenue}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <SectionContent
              title="increase our Customers sales"
              details="Our customers are seeing big results within the first three months"
            />
          </div>
        </div>
        <ButtonContainer />
      </div>
    </div>
  );
};
export default OurCustomers;

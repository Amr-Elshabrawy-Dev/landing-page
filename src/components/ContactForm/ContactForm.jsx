import { useVisibility } from "../../hooks/useVisibility";
import { IoIosMail } from "react-icons/io";
import { TbMessageFilled } from "react-icons/tb";
import "./ContactForm.css";

const ContactForm = () => {
  const [elementRef, isVisible] = useVisibility();
  const [elementRef2, isVisible2] = useVisibility();

  return (
    <div className="container">
      <div className="overlay contact__overlay"></div>
      <div className="contact">
        <div
          ref={elementRef}
          className={`contact__img ${
            isVisible ? "appear-visible" : "appear-right"
          }`}
        >
          <img src="./images/ContactForm.webp" alt="contact" loading="lazy" width={500}/>
        </div>
        <div
          ref={elementRef2}
          className={`contact__form ${
            isVisible2 ? "appear-visible" : "appear-left"
          }`}
        >
          <h3>Write Us</h3>
          <form>
            <div className="input__group">
              <IoIosMail size={30} className="icon" />
              <input type="email" placeholder="amr_elshabrawy@gmail.com" />
            </div>
            <div className="input__group">
              <TbMessageFilled size={30} className="icon" />
              <textarea placeholder="Enter Your Message" />
            </div>
            <button type="button">Send Your Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;

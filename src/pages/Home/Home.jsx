import CardProducts from "../../components/CardProducts/CardProducts";
import Companies from "../../components/Companies/Companies";
import ContactForm from "../../components/ContactForm/ContactForm";
import Hero from "../../components/Hero/Hero";
import OurCustomers from "../../components/OurCustomers/OurCustomers";
import SellStunning from "../../components/SellStunning/SellStunning";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Companies />
      <SellStunning />
      <CardProducts />
      <OurCustomers />
      <ContactForm/>
    </div>
  );
};
export default Home;

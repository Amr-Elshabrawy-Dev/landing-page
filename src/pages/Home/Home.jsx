import BackgroundAnimation from '../../components/BackgroundAnimation/BackgroundAnimation';
import CardProducts from '../../components/CardProducts/CardProducts';
import Companies from '../../components/Companies/Companies';
import ContactForm from '../../components/ContactForm/ContactForm';
import Hero from '../../components/Hero/Hero';
import OurCustomers from '../../components/OurCustomers/OurCustomers';
import SellStunning from '../../components/SellStunning/SellStunning';
import './Home.css';
const Home = () => {
  return (
    <div className="home">
      <BackgroundAnimation
        config={{
          particleSize: 12,
          speed: 1,
          shapeCount: 30,
          shapeBorder: 0,
          lineWidth: 2,
          shapes: ['triangle', 'hexagon'],
          colors: [
            { r: 113, g: 75, b: 236 }, // Purple
            { r: 252, g: 79, b: 145 }, // Pink
            { r: 150, g: 150, b: 150 }, // Gray
          ],
        }}
      />
      <Hero />
      <Companies />
      <SellStunning />
      <CardProducts />
      <OurCustomers />
      <ContactForm />
    </div>
  );
};
export default Home;

import "./Companies.css";

const CompaniesData = [
  {
    id: 1,
    src: "./images/media-24.svg",
    alt: "media-24",
  },
  {
    id: 2,
    src: "./images/online-1.svg",
    alt: "online",
  },
  {
    id: 3,
    src: "./images/westin-guest-office.svg",
    alt: "westin-guest-office",
  },
  {
    id: 4,
    src: "./images/smart-mercedes.svg",
    alt: "smart-mercedes",
  },
  {
    id: 5,
    src: "./images/icom-inc.svg",
    alt: "icom-inc",
  },
];
const Companies = () => {
  return (
    <div className="container">
      <div className="companies">
        <div className="companies__text">
          <p>Companies we&apos;ve helped build</p>
        </div>

        <ul className="companies__img">
          {CompaniesData.map(item => (
            <li key={item.id}>
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              width={80}
            />
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Companies;

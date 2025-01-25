import "./StartNow.css"

const plansData = [
  {
    id: 1,
    title: 'basic plan',
    price: '15.00',
    features: [
      'Up to 5 users',
      'Basic support',
      '2GB storage',
      'Email notifications'
    ]
  },
  {
    id: 2,
    title: 'pro plan',
    price: '25.00',
    features: [
      'Up to 20 users',
      'Priority support',
      '10GB storage',
      'Advanced analytics'
    ]
  },
  {
    id: 3,
    title: 'enterprise',
    price: '45.00',
    features: [
      'Unlimited users',
      '24/7 support',
      '100GB storage',
      'Custom solutions'
    ]
  }
]

const StartNow = () => {
  return (
    <div className="container">
      <div className="overlay StartNow__overlay" />
      <div className="StartNow">
        <h1 className="StartNow__title">Start now</h1>
        <div className="StartNow__cards">
          {plansData.map((plan) => (
            <div className="card" key={plan.id}>
              <h2>{plan.title}</h2>
              <p className="price">${plan.price}</p>
              <ul className="features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button>Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default StartNow;

type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Forex Trading",
    description: "Professional forex trading strategies designed for consistent performance and security."
  },
  {
    title: "Crypto Trading",
    description: "Cutting-edge crypto market analysis and trading to maximize opportunities."
  },
  {
    title: "Investment Consulting",
    description: "Personalized investment consulting services to guide your trading decisions."
  },
  {
    title: "Risk Management",
    description: "Advanced risk management techniques to safeguard your capital and investments."
  }
];

export default function Services() {
  return (
    <section id="services" className="container py-16">
      <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div key={i} className="card p-6">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="mt-2 text-slate-300">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

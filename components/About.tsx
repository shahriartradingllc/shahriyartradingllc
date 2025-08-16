export default function About() {
  return (
    <section id="about" className="container py-16">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">About Us</h2>
          <p className="text-slate-300">
            Shahriyar Trading LLC specializes in Forex and Crypto Trading. Our mission is to provide secure,
            transparent, and profitable trading solutions for our clients worldwide.
          </p>
          <ul className="grid grid-cols-2 gap-3 text-slate-300">
            <li className="card p-3">Forex Trading</li>
            <li className="card p-3">Crypto Trading</li>
            <li className="card p-3">Investment Consulting</li>
            <li className="card p-3">Risk Management</li>
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="text-xl font-semibold mb-3">Quick Info</h3>
          <div className="grid grid-cols-2 gap-4 text-slate-300">
            <div>
              <p className="text-slate-400 text-sm">Company</p>
              <p>Shahriyar Trading LLC</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Industry</p>
              <p>Forex & Crypto Trading</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Email</p>
              <p>shahriaahmedsylbd@gmail.com</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Founded</p>
              <p>2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

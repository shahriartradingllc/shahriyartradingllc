export default function Hero() {
  return (
    <section className="container pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-brand-300 mb-3">Welcome to</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Shahriyar Trading LLC</h1>
          <p className="mt-4 text-lg text-slate-300">Forex & Crypto Trading Solutions</p>
          <div className="mt-6 flex gap-3">
            <a href="#services" className="btn">Our Services</a>
            <a href="#contact" className="btn">Contact Us</a>
          </div>
        </div>
        <div className="card p-6 md:p-10">
          <div className="aspect-video rounded-xl bg-gradient-to-br from-brand-600/40 to-purple-700/30 flex items-center justify-center">
            <span className="text-xl md:text-2xl text-slate-200">Company Logo / Trading Graphic</span>
          </div>
        </div>
      </div>
    </section>
  );
}

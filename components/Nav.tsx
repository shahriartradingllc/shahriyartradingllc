'use client';

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/50 border-b border-slate-800">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold text-lg">Shahriyar<span className="text-brand-400">.</span></Link>
        <nav className={`gap-6 md:flex ${open ? "flex" : "hidden"} md:items-center`}>
          <a href="#about" className="hover:text-brand-300">About</a>
          <a href="#projects" className="hover:text-brand-300">Projects</a>
          <a href="#contact" className="hover:text-brand-300">Contact</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden btn">Menu</button>
      </div>
    </header>
  );
}

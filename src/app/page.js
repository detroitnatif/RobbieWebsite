"use client";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-content">
          <h1 className="main-headline black-headline">POWERING YOUR HOME & BUSINESS SAFELY</h1>
          <p className="hero-tagline">Kuuttila Electric provides expert electrical services you can trust—24/7 emergency repairs, installations, and upgrades for homes and businesses.</p>
          <Link href="/services" className="cta-btn full-width-btn">See Our Services</Link>
        </div>
      </section>
    </>
  );
} 
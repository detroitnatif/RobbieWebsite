import Link from 'next/link';

export default function Home() {
  return (
    <section className="home-hero">
      <div className="hero-content">
        <h1 className="main-headline black-headline">WE MAKE MEDIA HUMAN</h1>
        <p className="hero-tagline">124 Media Co. blends creativity, technology, and strategy to help brands connect authentically in a digital world.</p>
        <Link href="/services" className="cta-btn full-width-btn">See What We Do</Link>
      </div>
    </section>
  );
} 
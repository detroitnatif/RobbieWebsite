import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Kuuttila Electric',
  description: 'Kuuttila Electric provides expert electrical services for homes and businesses.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main-layout">
          <nav className="navbar">
            <div className="logo">
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Kuuttila Electric</Link>
            </div>
            <ul className="nav-links">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </nav>
          <main className="main-content">{children}</main>
          <footer className="footer">
            &copy; {new Date().getFullYear()} Kuuttila Electric. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
} 
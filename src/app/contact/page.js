"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function Contact() {
  return (
    <motion.section className="contact-section" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        Or email us directly at <a href="mailto:kayla@124mediaco.com" style={{ color: '#181c24', fontWeight: 600 }}>kayla@124mediaco.com</a>
      </div>
    </motion.section>
  );
} 
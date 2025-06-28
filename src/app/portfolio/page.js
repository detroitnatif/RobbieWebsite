"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function Portfolio() {
  return (
    <motion.section className="portfolio-section" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <h2>Our Projects</h2>
      <p>Take a look at some of our completed electrical projects and satisfied clients. From residential rewiring to commercial lighting upgrades, Kuuttila Electric delivers quality results every time. Portfolio content coming soon!</p>
    </motion.section>
  );
} 
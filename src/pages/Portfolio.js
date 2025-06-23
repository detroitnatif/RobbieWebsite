import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const Portfolio = () => (
  <motion.section className="portfolio-section" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
    <h2>Our Portfolio</h2>
    <p>Showcasing our best work and client success stories. Portfolio content coming soon!</p>
  </motion.section>
);

export default Portfolio; 
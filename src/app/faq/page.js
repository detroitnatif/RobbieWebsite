"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function FAQ() {
  return (
    <motion.section className="faq-section" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <h2>Frequently Asked Questions</h2>
      <p>Answers to common questions will be available here soon!</p>
    </motion.section>
  );
} 
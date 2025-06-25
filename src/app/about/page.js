"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function About() {
  return (
    <motion.section className="about-section" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <h2>Our Mission</h2>
      <motion.blockquote className="mission-statement" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
        At 124 Media Co., we empower modern businesses through full-spectrum digital innovation. Our mission is to streamline, elevate, and scale brands by combining creative strategy, impactful content, and intelligent automation.<br/><br/>
        From crafting engaging short-form videos and branded assets to managing social media platforms and executing data-driven campaigns, we help businesses stand out and connect with their audience. We oversee the full digital presence, from content planning and community engagement to website design, development, and optimization, ensuring every touchpoint delivers value and consistency.<br/><br/>
        We also create custom, highly detailed AI-powered agents specifically tethered to your business needs. These solutions are designed to support your management processes, automate workflows, handle repetitive tasks, and improve internal efficiency with precision and scalability.<br/><br/>
        Whether you're building your brand from the ground up or ready to level up with advanced systems and strategy, 124 Media Co. is your all-in-one partner for digital transformation and measurable results.
      </motion.blockquote>
      <h2>About 124 Media Company</h2>
      <p>
        124 Media Company is dedicated to helping brands and businesses thrive in the digital world. Our team of experts brings creativity, strategy, and passion to every project, ensuring our clients stand out online.
      </p>
      <p>
        We believe in building authentic connections and delivering measurable results through innovative social media and marketing solutions.
      </p>
    </motion.section>
  );
} 
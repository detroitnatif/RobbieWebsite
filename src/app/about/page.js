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
        At Kuuttila Electric, our mission is to provide safe, reliable, and high-quality electrical solutions for homes and businesses. We are committed to delivering exceptional service, ensuring every project is completed to the highest standards of safety and craftsmanship.<br/><br/>
        From troubleshooting and repairs to new installations and upgrades, our licensed electricians bring years of experience and a passion for excellence to every job. We believe in honest communication, transparent pricing, and building lasting relationships with our clients.<br/><br/>
        Whether you need emergency repairs, a full rewiring, or energy-efficient lighting solutions, Kuuttila Electric is your trusted partner for all your electrical needs.
      </motion.blockquote>
      <h2>About Kuuttila Electric</h2>
      <p>
        Kuuttila Electric is a locally owned and operated electrical company serving residential and commercial clients. Our team of certified electricians is dedicated to providing prompt, professional, and courteous service on every project.
      </p>
      <p>
        We take pride in our attention to detail, commitment to safety, and our reputation for quality workmanship. Your satisfaction and safety are our top priorities.
      </p>
    </motion.section>
  );
} 
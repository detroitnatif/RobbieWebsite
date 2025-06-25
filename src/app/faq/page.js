"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const faqs = [
  {
    question: "Who is the CEO of 124 Media Co.?",
    answer: "Kayla Ghafari, an MSU graduate, is the CEO of 124 Media Co."
  },
  {
    question: "What services do you offer?",
    answer: "We offer digital presence management, content creation, AI & automation, marketing, and growth services tailored to your business needs."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach us through our Contact page by filling out the form, or by emailing us directly."
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "Yes! We work with startups, small businesses, and established brands looking to grow their digital presence."
  },
  {
    question: "Where are you located?",
    answer: "We are based in Michigan but work with clients nationwide."
  }
];

export default function FAQ() {
  return (
    <motion.section className="faq-section" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      <h2>Frequently Asked Questions</h2>
      <div style={{ textAlign: 'left', maxWidth: 700, margin: '0 auto' }}>
        {faqs.map((faq, idx) => (
          <motion.div key={idx} style={{ marginBottom: '1.5rem' }} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <strong>{faq.question}</strong>
            <p style={{ margin: '0.5rem 0 0 0' }}>{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
} 
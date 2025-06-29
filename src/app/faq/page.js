"use client";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const faqs = [
  {
    question: "Who is the CEO of Kuuttila Electric?",
    answer: "Robbie Kuuttila is the CEO of Kuuttila Electric."
  },
  {
    question: "What services do you offer?",
    answer: "We provide expert electrical services for homes and businesses, including 24/7 emergency repairs, installations, upgrades, troubleshooting, rewiring, lighting, panel upgrades, and more."
  },
  {
    question: "How can I contact you?",
    answer: "You can reach us through our Contact page by filling out the form, or by emailing us directly at info@kuuttilaelectric.com."
  },
  {
    question: "Do you work with businesses and homeowners?",
    answer: "Yes! We work with both residential and commercial clients, providing safe, reliable, and high-quality electrical solutions."
  },
  {
    question: "Where are you located?",
    answer: "We are based in Michigan and serve clients throughout the surrounding areas."
  },
  {
    question: "Do you offer emergency electrical services?",
    answer: "Yes, we offer 24/7 emergency electrical repairs for urgent issues at your home or business."
  },
  {
    question: "Are your electricians licensed and insured?",
    answer: "Absolutely! All of our electricians are fully licensed and insured for your safety and peace of mind."
  },
  {
    question: "How do I get started?",
    answer: "Simply contact us through our website or give us a call, and we'll set up a consultation to discuss your electrical needs."
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
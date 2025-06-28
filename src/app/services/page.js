"use client";
import { motion } from "framer-motion";

const serviceGroups = [
  {
    title: 'Residential Electrical Services',
    services: [
      'Electrical Troubleshooting & Repairs',
      'Panel Upgrades & Circuit Breaker Replacement',
      'Lighting Installation (Indoor & Outdoor)',
      'Ceiling Fan Installation',
      'Home Rewiring & Renovations',
      'Outlet & Switch Installation',
      'Smoke & Carbon Monoxide Detectors',
      'EV Charger Installation',
    ]
  },
  {
    title: 'Commercial Electrical Services',
    services: [
      'Office & Retail Electrical Fit-Outs',
      'Lighting Upgrades & Maintenance',
      'Electrical Safety Inspections',
      'Surge Protection',
      'Data & Communication Wiring',
      'Emergency Lighting Systems',
    ]
  },
  {
    title: 'Specialty & Emergency Services',
    services: [
      '24/7 Emergency Electrical Repairs',
      'Generator Installation & Maintenance',
      'Energy Efficiency Consultations',
      'Electrical Code Corrections',
    ]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

export default function Services() {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <p className="services-intro">
        At Kuuttila Electric, we offer a full range of electrical services for homes and businesses. Whether you need a quick repair, a major upgrade, or emergency assistance, our licensed electricians are here to help with safe, reliable, and efficient solutions.
      </p>
      <div className="services-groups">
        {serviceGroups.map((group, idx) => (
          <motion.div
            className="service-group"
            key={idx}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>{group.title}</h3>
            <ul className="service-list">
              {group.services.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 
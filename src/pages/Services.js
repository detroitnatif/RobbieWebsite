import React from 'react';
import { motion } from 'framer-motion';

const serviceGroups = [
  {
    title: 'Digital Presence & Content',
    services: [
      'Social Media Platform Management',
      'Photography and Videography',
      'Content Creation (Posts/Stories/Reels)',
      'Content Scheduling (Calendar)',
      'Linktree Creation/Maintenance',
      'Website Developing/Management',
      'Brand Identity Book',
    ]
  },
  {
    title: 'AI & Automation',
    services: [
      'Custom AI Agent Development',
    ]
  },
  {
    title: 'Marketing & Growth',
    services: [
      'Social Media Marketing',
      'PR Packages',
      'Promotions and Giveaways',
      'Search Engine Optimization (SEO)',
      'User Generated Content Marketing (UGC)',
      'Reputation Management Packages (Google and Yelp)',
      'SMS and Email Marketing Packages',
    ]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const Services = () => (
  <section className="services-section">
    <h2>Our Services</h2>
    <p className="services-intro">
      At 124 Media Co., we offer a comprehensive suite of digital services tailored to your unique needs. Whether you need us to build something from scratch, update what you already have, or manage it from here on out, we provide flexible solutions designed to support and grow your business.
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

export default Services; 
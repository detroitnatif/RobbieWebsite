"use client";
import { useRef } from 'react';

export default function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  function handleContactSubmit(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    const subject = encodeURIComponent(`Service Request from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:info@kuuttilaelectric.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleContactSubmit}>
        <input ref={nameRef} type="text" placeholder="Your Name" required />
        <input ref={emailRef} type="email" placeholder="Your Email" required />
        <textarea ref={messageRef} placeholder="How can we help you? Please describe your electrical issue or project." required />
        <button type="submit">Send Request</button>
      </form>
      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        Or email us directly at <a href="mailto:info@kuuttilaelectric.com" style={{ color: '#181c24', fontWeight: 600 }}>info@kuuttilaelectric.com</a>
      </div>
    </section>
  );
} 
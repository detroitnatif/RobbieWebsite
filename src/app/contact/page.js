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
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:kayla@124mediaco.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleContactSubmit}>
        <input ref={nameRef} type="text" placeholder="Your Name" required />
        <input ref={emailRef} type="email" placeholder="Your Email" required />
        <textarea ref={messageRef} placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        Or email us directly at <a href="mailto:kayla@124mediaco.com" style={{ color: '#181c24', fontWeight: 600 }}>kayla@124mediaco.com</a>
      </div>
    </section>
  );
} 
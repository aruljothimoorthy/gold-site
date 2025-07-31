import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <section className="about-section">
      <div className="about-header">
        <h1>About Us</h1>
        <p>
          We blend tradition with trend — crafting elegant jewelry that highlights your unique beauty.
        </p>
      </div>

      <div className="about-content">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✨ Finest quality gold, silver, and diamond jewelry</li>
          <li>🛠️ Unique handcrafted collections</li>
          <li>💎 Affordable luxury for every occasion</li>
          <li>🤝 100% customer satisfaction guarantee</li>
        </ul>
      </div>
    </section>
  );
};

export default About;

// src/pages/Home.jsx
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import About from './About';
import Blog from '../components/Blog';

function Home() {
  const topRef = useRef(null);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div ref={topRef} className="home-page">
      <header className="hero-section">
        
  <div className="hero-text">
    <h1>Welcome to Jewel Gallery</h1>
    <p>Discover the elegance of fine jewelry crafted for you.</p>
    <a href="/bracelets" className="cta-button">Explore Collection</a>
  </div>
      </header>

     <section className="category-section">
  <h2 className="section-title">Explore Categories</h2>
  <div className="category-cards">
    <div className="category-card">
      <img src="src/assets/mainBracelet.jpg" alt="Bangles" />
      <div className="card-content">
        <h3>Bracelet</h3>
        <Link to="/Bracelets" className="explore-btn">View Bracelet</Link>
      </div>
      <h3 style={{color:"gold"}}>Bracelet</h3>
    </div>
  
    <div className="category-card">
      <img src="src/assets/mainring.avif" alt="Rings" />
      <div className="card-content">
        <h3>Rings</h3>
        <Link to="/Rings" className="explore-btn">View Rings</Link>
      </div>
      <h3 style={{color:"gold"}}>Rings</h3>
    </div>
    <div className="category-card">
      <img src="src/assets/mainneck.jpg" alt="Necklace" />
      <div className="card-content">
        <h3>Necklace</h3>
        <Link to="/Necklaces" className="explore-btn">View Necklace</Link>

      </div>
      <h3 style={{color:"gold"}}>Necklace</h3>
    </div>
    <div className="category-card">
      <img src="src/assets/mainearings.jpeg" alt="Earrings" />
      <div className="card-content">
        <h3>Earrings</h3>
        <Link to="/Earrings" className="explore-btn">View Earrings</Link>
      </div>
      <h3 style={{color:"gold"}}>Earrings</h3>
    </div>
  </div>
</section>


 <Blog/>
 <About/>

    </div>
  );
}

export default Home;

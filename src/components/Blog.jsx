import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div>
      <h1 className="blog-h1">𝖫𝖺𝗍𝖾𝗌𝗍 𝖥𝗋𝗈𝗆 𝖡𝗅𝗈𝗀</h1>

      <div className="blog">
        <div className="blog-1">
          <img src="src/assets/b1.jpg" alt="blog1" />
          <div className="blog-date">14 <br /> July</div>
          <div className="blog-text">
            <h3>The Art of Timeless Jewelry</h3>
            <p>Discover how handcrafted gold and diamond pieces from Gold Luxe bring elegance and legacy together — perfect for every generation and occasion.</p>
          </div>
        </div>
        <div className="blog-1">
          <img src="src/assets/b2.jpg" alt="blog2" />
          <div className="blog-date">7 <br /> April</div>
          <div className="blog-text">
            <h3>Jewelry Trends 2025</h3>
            <p>Stay ahead of style with our latest collection inspired by modern designs and traditional craftsmanship — only at Gold Luxe.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

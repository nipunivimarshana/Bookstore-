import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&h=900&q=80" 
          alt="Books and reading" 
          className="hero-bg-image" 
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-headline">Find Your Next Great Read</h1>
          <p className="hero-subtext">
            Discover thousands of books from bestselling authors, classic literature, 
            and hidden gems waiting to be explored. Your next favorite story is just a click away.
          </p>
          <Link to="/store" className="hero-cta-button">
            Shop All Books
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

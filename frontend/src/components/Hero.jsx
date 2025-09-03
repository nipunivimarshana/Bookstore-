import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img 
          src="https://source.unsplash.com/random/1600x900/?books" 
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

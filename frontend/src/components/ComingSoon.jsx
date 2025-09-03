import { Link } from 'react-router-dom';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <section className="coming-soon-section">
      <div className="coming-soon-container">
        <div className="coming-soon-left">
          <img 
            src="https://via.placeholder.com/400x600" 
            alt="Book cover for upcoming release" 
            className="coming-soon-cover" 
          />
        </div>
        <div className="coming-soon-right">
          <h2 className="coming-soon-headline">Coming in September</h2>
          <p className="coming-soon-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore 
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat.
          </p>
          <p className="coming-soon-text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="coming-soon-buttons">
            <Link to="/learn-more" className="coming-soon-button primary">
              LEARN MORE
            </Link>
            <Link to="/pre-order" className="coming-soon-button secondary">
              PRE-ORDER NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;

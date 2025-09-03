import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BookCard from '../components/BookCard';
import './HomePage.css';

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('http://127.0.0.1:8000/api/books/');
        setBooks(response.data);
      } catch (err) {
        setError('Failed to fetch books. Please try again later.');
        console.error('Error fetching books:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="home-page">
        <div className="loading-container">
          <h2>Loading...</h2>
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-page">
        <div className="error-container">
          <h2>Error</h2>
          <p>{error}</p>
          <button 
            className="retry-button" 
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
            alt="Books and reading" 
            className="hero-bg-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Find Your Next Great Read</h1>
          <p>Discover thousands of books from bestselling authors, classic literature, and hidden gems waiting to be explored</p>
          <button className="cta-button">Shop All Books</button>
        </div>
      </div>

      {/* Featured Books Section */}
      <div className="featured-books-section">
        <h2>Featured Books</h2>
        
        <div className="featured-books-grid">
          {books.length > 0 ? (
            books.slice(0, 4).map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                price={book.price}
                coverImage={book.cover_image || 'https://via.placeholder.com/200x300/cccccc/666666?text=No+Image'}
              />
            ))
          ) : (
            <div className="no-books">
              <h3>No books available</h3>
              <p>Check back later for new arrivals!</p>
            </div>
          )}
        </div>
        
        <div className="view-store-button-container">
          <Link to="/store" className="view-store-button">
            View Full Store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

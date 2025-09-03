import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './FeaturedBooks.css';

const FeaturedBooks = () => {
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
        setError('Failed to fetch featured books. Please try again later.');
        console.error('Error fetching books:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <section className="featured-books-section">
        <div className="featured-books-container">
          <h2 className="featured-books-heading">Featured Books</h2>
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading featured books...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="featured-books-section">
        <div className="featured-books-container">
          <h2 className="featured-books-heading">Featured Books</h2>
          <div className="error-container">
            <p>{error}</p>
            <button 
              className="retry-button" 
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  const featuredBooks = books.slice(0, 3);

  return (
    <section className="featured-books-section">
      <div className="featured-books-container">
        <h2 className="featured-books-heading">Featured Books</h2>
        
        <div className="featured-books-grid">
          {featuredBooks.length > 0 ? (
            featuredBooks.map((book) => (
              <div key={book.id} className="featured-book-card">
                <div className="book-cover-container">
                  <img 
                    src={book.cover_image || 'https://via.placeholder.com/300x400/cccccc/666666?text=No+Image'} 
                    alt={`${book.title} cover`} 
                    className="book-cover-image"
                  />
                </div>
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <Link 
                    to={`/book/${book.id}`} 
                    className="order-now-button"
                  >
                    ORDER NOW
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="no-books">
              <h3>No featured books available</h3>
              <p>Check back later for new arrivals!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;

import { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';
import './StorePage.css';

const StorePage = () => {
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
      <div className="store-page">
        <div className="loading-container">
          <h2>Loading...</h2>
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="store-page">
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
    <div className="store-page">
      <div className="store-header">
        <h1>Our Book Collection</h1>
        <p>Discover amazing books from our curated selection</p>
      </div>
      
      <div className="books-grid">
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard
              key={book.id}
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
    </div>
  );
};

export default StorePage;

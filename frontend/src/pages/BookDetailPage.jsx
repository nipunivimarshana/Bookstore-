import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookDetailPage.css';

const BookDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`http://127.0.0.1:8000/api/books/${id}/`);
        setBook(response.data);
      } catch (err) {
        setError('Failed to fetch book details. Please try again later.');
        console.error('Error fetching book:', err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBook();
    }
  }, [id]);

  const handleBackToStore = () => {
    navigate('/store');
  };

  if (loading) {
    return (
      <div className="book-detail-page">
        <div className="loading-container">
          <h2>Loading book details...</h2>
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="book-detail-page">
        <div className="error-container">
          <h2>Error</h2>
          <p>{error}</p>
          <div className="error-actions">
            <button 
              className="retry-button" 
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
            <button 
              className="back-button" 
              onClick={handleBackToStore}
            >
              Back to Store
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="book-detail-page">
        <div className="error-container">
          <h2>Book Not Found</h2>
          <p>The book you're looking for doesn't exist.</p>
          <button 
            className="back-button" 
            onClick={handleBackToStore}
          >
            Back to Store
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="book-detail-page">
      <div className="book-detail-container">
        <button className="back-button" onClick={handleBackToStore}>
          ← Back to Store
        </button>
        
        <div className="book-detail-content">
          <div className="book-cover-section">
            <img 
              src={book.image ? `http://127.0.0.1:8000${book.image}` : 'https://via.placeholder.com/400x600/cccccc/666666?text=No+Image'} 
              alt={`${book.title} cover`} 
              className="book-cover-image"
            />
          </div>
          
          <div className="book-info-section">
            <h1 className="book-title">{book.title}</h1>
            <p className="book-author">by {book.author}</p>
            
            <div className="book-price-section">
              <span className="book-price">${book.price?.toFixed(2) || '0.00'}</span>
            </div>
            
            {book.description && (
              <div className="book-description">
                <h3>Description</h3>
                <p>{book.description}</p>
              </div>
            )}
            
            {book.isbn && (
              <div className="book-details">
                <h3>Book Details</h3>
                <div className="detail-item">
                  <span className="detail-label">ISBN:</span>
                  <span className="detail-value">{book.isbn}</span>
                </div>
                {book.publication_date && (
                  <div className="detail-item">
                    <span className="detail-label">Publication Date:</span>
                    <span className="detail-value">{new Date(book.publication_date).toLocaleDateString()}</span>
                  </div>
                )}
                {book.pages && (
                  <div className="detail-item">
                    <span className="detail-label">Pages:</span>
                    <span className="detail-value">{book.pages}</span>
                  </div>
                )}
                {book.language && (
                  <div className="detail-item">
                    <span className="detail-label">Language:</span>
                    <span className="detail-value">{book.language}</span>
                  </div>
                )}
                {book.genre && (
                  <div className="detail-item">
                    <span className="detail-label">Genre:</span>
                    <span className="detail-value">{book.genre}</span>
                  </div>
                )}
              </div>
            )}
            
            <div className="book-actions">
              <button className="add-to-cart-button">
                Add to Cart
              </button>
              <button className="wishlist-button">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;

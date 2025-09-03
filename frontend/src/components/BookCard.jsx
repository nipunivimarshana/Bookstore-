import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './BookCard.css';

const BookCard = ({ book }) => {
  const { addToCart } = useCart();

  // Format price as Rs. 1,990.00
  const formatPrice = (price) => {
    return `Rs. ${parseFloat(price).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    e.stopPropagation();
    // console.log('Adding book to cart:', book);
    addToCart(book);
  };

  // Handle different image field names and construct full URL
  const getImageUrl = () => {
    try {
      // Check for nested cover_image_url.url structure
      if (book.cover_image_url && book.cover_image_url.url) {
        const imageUrl = book.cover_image_url.url;
        // If image is a relative path, prepend the base URL
        if (imageUrl.startsWith('/')) {
          return `http://127.0.0.1:8000${imageUrl}`;
        }
        return imageUrl;
      }
      
      // Fallback to direct image field
      if (book.image) {
        // If image is a relative path, prepend the base URL
        if (book.image.startsWith('/')) {
          return `http://127.0.0.1:8000${book.image}`;
        }
        return book.image;
      }
      
      // Fallback to direct cover_image_url (if it's a string)
      if (book.cover_image_url && typeof book.cover_image_url === 'string') {
        if (book.cover_image_url.startsWith('/')) {
          return `http://127.0.0.1:8000${book.cover_image_url}`;
        }
        return book.cover_image_url;
      }
    } catch (error) {
      console.warn('Error processing image URL:', error);
    }
    
    // Fallback placeholder image
    return 'https://via.placeholder.com/400x600.png?text=No+Image';
  };

  // Handle author data (could be string or object)
  const getAuthorName = () => {
    if (typeof book.author === 'string') {
      return book.author;
    }
    if (book.author && book.author.name) {
      return book.author.name;
    }
    return 'Unknown Author';
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // TODO: Implement wishlist functionality
    console.log('Add to wishlist:', book.id);
  };

  return (
    <div className="book-card-wrapper">
      <Link to={`/book/${book.id}`} className="book-card-link">
        <div className="book-card">
          <div className="book-cover">
            <img 
              src={getImageUrl()} 
              alt={`${book.title} cover`} 
              className="cover-image" 
            />
            <button 
              className="wishlist-btn" 
              onClick={handleWishlist}
              type="button"
              aria-label="Add to wishlist"
            >
              ♥
            </button>
          </div>
          <div className="book-content">
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">{getAuthorName()}</p>
            <p className="book-price">{formatPrice(book.price)}</p>
          </div>
        </div>
      </Link>
      <button 
        className="add-to-cart-btn" 
        onClick={handleAddToCart}
        type="button"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default BookCard;

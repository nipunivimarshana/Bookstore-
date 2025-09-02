import './BookCard.css';

const BookCard = ({ title, author, price, coverImage }) => {
  return (
    <div className="book-card">
      <div className="book-cover">
        <img src={coverImage} alt={`${title} cover`} className="cover-image" />
      </div>
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">by {author}</p>
        <div className="book-price">${price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default BookCard;

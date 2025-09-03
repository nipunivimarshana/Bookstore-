import { Link } from 'react-router-dom';
import './DiscoverMore.css';

const DiscoverMore = () => {
  const categories = [
    {
      id: 1,
      title: 'Encouragement for Tough Times',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Books about encouragement and hope',
      link: '/category/encouragement'
    },
    {
      id: 2,
      title: 'Worry and Anxiety',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Books about overcoming worry and anxiety',
      link: '/category/anxiety'
    },
    {
      id: 3,
      title: 'Sharing the Gospel',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Books about sharing faith and gospel',
      link: '/category/gospel'
    }
  ];

  return (
    <section className="discover-more-section">
      <div className="discover-more-container">
        <h2 className="discover-more-heading">Discover More</h2>
        
        <div className="discover-more-grid">
          {categories.map((category) => (
            <div key={category.id} className="discover-more-card">
              <div className="card-image-container">
                <img 
                  src={category.image} 
                  alt={category.alt} 
                  className="card-image"
                />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{category.title}</h3>
                <Link 
                  to={category.link} 
                  className="browse-books-button"
                >
                  BROWSE BOOKS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverMore;

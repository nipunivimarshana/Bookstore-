import Hero from '../components/Hero';
import ComingSoon from '../components/ComingSoon';
import FeaturedBooks from '../components/FeaturedBooks';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <Hero />

      {/* Coming Soon Section */}
      <ComingSoon />

      {/* Featured Books Section */}
      <FeaturedBooks />
    </div>
  );
};

export default HomePage;

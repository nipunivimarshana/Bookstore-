import Hero from '../components/Hero';
import ComingSoon from '../components/ComingSoon';
import FeaturedBooks from '../components/FeaturedBooks';
import DiscoverMore from '../components/DiscoverMore';
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

      {/* Discover More Section */}
      <DiscoverMore />
    </div>
  );
};

export default HomePage;

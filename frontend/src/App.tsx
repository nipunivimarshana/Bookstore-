import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StorePage from "./pages/StorePage";
import "./App.css";

// Home page component
const HomePage = () => (
  <main className="main-content">
    <h1>Welcome to the Bookstore</h1>
  </main>
);

// Contact page component
const ContactPage = () => (
  <main className="main-content">
    <h1>Contact Us</h1>
    <p>Get in touch with us!</p>
  </main>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

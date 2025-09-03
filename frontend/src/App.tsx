import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import BookDetailPage from "./pages/BookDetailPage";
import "./App.css";

const ContactPage = () => (
  <main className="main-content">
    <h1>Contact Us</h1>
    <p>Get in touch with us!</p>
  </main>
);

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

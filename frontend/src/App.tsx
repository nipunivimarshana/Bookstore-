import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <h1>Welcome to the Bookstore</h1>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

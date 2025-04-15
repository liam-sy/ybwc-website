import logo from './logo2.png';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="hero">
        <img src={logo} className="hero-logo" width="100" height="100"/>
        <h1 className="hero-title">Young Bros Window Cleaning</h1>
        <div className="contact-details">
          <p className="hero-contact">📞 (412) 423-5874</p>
          <p className="hero-contact">✉️ liam@youngbroswc.com</p>
        </div>
      </header>
      <main className="content">
        <section className="services">
          <h2>Our Services</h2>
          <ul className="service-list">
            <li>Residential Window Cleaning</li>
            <li>Commercial Window Cleaning</li>
            <li>Screen Cleaning</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>© 2025 Young Bros Window Cleaning. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

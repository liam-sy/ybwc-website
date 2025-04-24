import logo from "./logo3.png";
import "./App.css";

const App = () => {
  return (
    <div className="page-wrapper">
      <div className="landing-container">
        <div className="left-half">
          <div className="logo-container">
            <img src={logo} alt="Company Logo" className="logo" />
          </div>
        </div>
        <div className="right-half">
          <div className="content">
            <h1>Helping Pittsburgh Shine, One Window at a Time</h1>
            <p>
              Our mission is simple: crystal-clear windows and seamless service. 
              While we're polishing up our new website, don't be afraid to reach out! We're out there helping your home, your business, your <i><b>Pittsburgh</b></i> shine.
            </p>
            <div className="info-sections">
              <div className="services">
                <h2>Our services:</h2>
                <ul>
                  <li>⦁ Residential Window Cleaning</li>
                  <li>⦁ Storefront Window Cleaning</li>
                </ul>
              </div>
              <div className="contact">
                <h2>Contact us for a free quote!</h2>
                <p><strong>Email:</strong> liam@youngbroswc.com</p>
                <p><strong>Phone:</strong> (412) 423-5874</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2025 Young Bros Window Cleaning. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

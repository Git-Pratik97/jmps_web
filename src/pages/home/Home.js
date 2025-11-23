import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FaLightbulb, FaTasks, FaCogs } from "react-icons/fa";
// import firmLogo from "../assets/logo.png"; // Replace with your logo file
// import heroImage from "../assets/hero.jpg"; // Replace with your hero image

const services = [
  { name: "Audit and Assurance", path: "/services/audit-assurance" },
  { name: "Taxation", path: "/services/taxation" },
  { name: "Market Research", path: "/services/market-research" },
  { name: "Accounting and Bookkeeping", path: "/services/accounting-bookkeeping" },
  { name: "IT Consulting", path: "/services/it-consulting" },
  { name: "Company Registration and Compliance", path: "/services/registration" },
];

function Home() {
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <section className="hero-section">
        {/* <img src={heroImage} alt="Intro" className="hero-image" /> */}
        <div className="hero-overlay">
          {/* <img src={firmLogo} alt="Firm Logo" className="hero-logo" /> */}
          

    <section className="hero-section">
      <h1 className="hero-title">
        <span className="welcome-text">Welcome to</span>
        <br />
        <span className="brand-name">JMPS & ASSOCIATES</span>
        <br />
        <span className="tagline">Chartered Accountants</span>
      </h1>
      <p className="hero-subtext">
        Navigating challenges, ensuring compliance, achieving your financial goals
      </p>
      {/* <button className="cta-button">Explore Our Services</button> */}
    </section>
          {/* <p className="hero-subtitle">
            Navigating challenges, ensuring compliance, achieving your financial goals
          </p> */}
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section">
        <h2 className="section-title">About Us</h2>
        <p>
          At JMPS & Associates, we are committed to providing exceptional financial services 
          to individuals, businesses and organizations. As trusted Chartered Accountants, 
          we offer a wide range of professional services tailored to meet the 
          unique needs of our clients. With a strong foundation of expertise and 
          a thorough understanding of the financial and regulatory landscape, 
          we are here to help you navigate challenges, ensure compliance, 
          and achieve your financial goals.
        </p>
      </section>

      {/* Why, What, How Section */}
      
   
<section className="why-what-how">
  <div className="card">
    <h3>Why</h3>
    <p>
      Our experienced team brings <strong>deep industry expertise</strong> to deliver
      <em> reliable, high-quality solutions</em>. We craft strategies aligned with your
      <strong> unique financial goals</strong>, ensuring compliance and confidence.
      Our approach fosters <em>long-term partnerships built on trust, integrity, and transparency</em>.
    </p>
  </div>

  <div className="card">
    <h3>What</h3>
    <p>
      We offer a <strong>comprehensive suite of services</strong>, including
      <em> Audit & Assurance</em>—statutory, internal, and tax audits—ensuring
      <strong> accuracy and compliance</strong>. Our taxation solutions cover strategic planning,
      GST, and filings to help you <em>minimize liabilities and optimize performance</em>.
    </p>
  </div>

  <div className="card">
    <h3>How</h3>
    <p>
      We manage <strong>Accounting & Bookkeeping</strong> with precision, ensuring
      <em> organized records and statutory compliance</em>. From company registration to
      <strong> corporate governance</strong>, we handle every detail seamlessly—delivering
      <em> tailored solutions that drive growth</em>.
    </p>
  </div>
</section>



      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-container">
          {services.map((service, idx) => (
            <Link to={service.path} key={idx} className="service-card">
              <h3>{service.name}</h3>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;

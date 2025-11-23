import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const services = [
    "Audit and Assurance",
    "Taxation",
    "Market Research",
    "Accounting and Bookkeeping",
    "IT Consulting",
    "Company Registration and Compliance",
  ];

  const filteredServices = services.filter((s) =>
    s.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <nav className="navbar">
        <div className="logo">JMPS & ASSOCIATES</div>

        {/* Hamburger */}
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><NavLink to="/" className="nav-item" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/services" className="nav-item" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
          <li><NavLink to="/about" className="nav-item" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/contact" className="nav-item" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
          <li>
            <button className="search-btn" onClick={() => setIsSearchOpen(true)}>🔍 Search</button>
          </li>
        </ul>
      </nav>

      {/* Card-style Search Modal */}
      {isSearchOpen && (
        <div className="search-modal">
          <div className="search-card">
            <button className="close-btn" onClick={() => { setIsSearchOpen(false); setSearchTerm(""); }}>
              ✖
            </button>
            <div className="search-input-group">
              <input
                type="text"
                placeholder="Search services..."
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="card-search-btn">Search</button>
            </div>
            {searchTerm && (
              <ul className="search-results">
                {filteredServices.length ? (
                  filteredServices.map((s, idx) => <li key={idx}>{s}</li>)
                ) : (
                  <li>No results found</li>
                )}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

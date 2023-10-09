import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from '/diamond-logo.svg'

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="Diamond Dreams"
                className="w-40 mb-4"
              />
            </Link>
            <p className="text-sm mb-5">
              Diamond Dreams || Discover a world of flavors with "Feast from the Experts," featuring top diamond from around the globe.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="text-sm">
              <li>Email: info@diamonddreams.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Main Street, City, Country</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Additional Links</h4>
            <ul className="text-sm">
              <li>
                <Link to="/about" className="text-secondary hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-secondary hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-secondary hover:text-white">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-secondary hover:text-white">
                  <FiFacebook />
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white">
                  <FiInstagram />
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white">
                  <FiTwitter />
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary hover:text-white">
                  <FiLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-4 my-3">
        <div className="container mx-auto px-4 text-center text-sm">
          &copy; {new Date().getFullYear()} Diamond Dreams. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
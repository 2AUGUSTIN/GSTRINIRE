import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSchool,
  faHome,
  faUserGraduate,
  faBookOpen,
  faNewspaper,
  faImage,
  faPhone,
  faEdit,
  faInfoCircle, // Added for the About icon
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 shadow fixed w-full z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 text-white text-2xl font-bold">
            <FontAwesomeIcon icon={faSchool} className="mr-2" />
            GS <span className="text-gray-200">Trinité</span>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-white">
            <li>
              <Link to="/" className="hover:text-yellow-200 flex items-center gap-1">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-200 flex items-center gap-1">
                <FontAwesomeIcon icon={faInfoCircle} /> About
              </Link>
            </li>
            <li>
              <Link to="/admission" className="hover:text-yellow-200 flex items-center gap-1">
                <FontAwesomeIcon icon={faUserGraduate} /> Admissions
              </Link>
            </li>
            <li>
              <Link to="/academics" className="hover:text-yellow-200 flex items-center gap-1">
                <FontAwesomeIcon icon={faBookOpen} /> Academics
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-yellow-200 flex items-center gap-1">
                <FontAwesomeIcon icon={faNewspaper} /> News
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-yellow-200 flex items-center gap-1">
                <FontAwesomeIcon icon={faImage} /> Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-200 flex items-center gap-1">
                <FontAwesomeIcon icon={faPhone} /> Contact
              </Link>
            </li>
            <li>
              <button className="ml-4 px-4 py-2 bg-yellow text-pink-600 rounded hover:bg-gray-100 flex items-center gap-1">
                <FontAwesomeIcon icon={faEdit} /> 
                <Link to="/applying" className="hover:text-yellow-200 flex items-center gap-1">
                Applying Now
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

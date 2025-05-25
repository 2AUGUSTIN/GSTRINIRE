import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdOutlineSchool } from 'react-icons/md';

function Footer() {
  return (
    <footer className="bg-gray-900 text-blue-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          
          <div>
            <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <MdOutlineSchool /> GS Trinité
            </h4>
            <p className="text-sm text-pink-400">
              Excellence in education since 1985. Providing quality education for a brighter future.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">Admissions</a></li>
              <li><a href="#programs" className="hover:text-white">Academics</a></li>
              <li><a href="#news" className="hover:text-white">News</a></li>
              <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Student Portal</a></li>
              <li><a href="#" className="hover:text-white">Parent Dashboard</a></li>
              <li><a href="#" className="hover:text-white">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-white">Library Catalog</a></li>
              <li><a href="#" className="hover:text-white">Career Opportunities</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/Nii.Aug_ustin" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition">
                <FaFacebookF className="text-white text-xl" />
              </a>
              <a href="https://www.instagram.com/vantin255" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition">
                <FaInstagram className="text-white text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/allan-augustin" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition">
                <FaLinkedinIn className="text-white text-xl" />
              </a>
              <a href="https://www.youtube.com/@allanaugustin" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition">
                <FaYoutube className="text-white text-xl" />
              </a>
              <a href="mailto:allanaugustin58@gmail.com" className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition">
                <span className="text-white text-xl">📧</span>
              </a>
            </div>
          </div>

        </div>
        <div className="border-t border-pink-700 pt-4 text-center">
          2025 /2026 GS Trinité.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

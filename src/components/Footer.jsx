import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-pink-500 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          <div>
            <h4 className="text-xl font-semibold mb-3">GS Trinité</h4>
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
              <li><a href="#contact" className="hover:text-white">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-pink-600 mb-3">Resources</h4>
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
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-pink-700 pt-4 text-center ">
          &copy; 2025 /2026 GS Trinité. All Rights Reserved.!
        </div>
      </div>
    </footer>
  );
}

export default Footer;

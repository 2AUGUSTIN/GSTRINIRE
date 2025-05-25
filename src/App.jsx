import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Header from './Components/Header';
import About from './Components/About';
import Admission from './Components/Admission';
import Academics from './Components/Academics';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import Home from './Components/Home';
import News from'./Components/News';

import './App.css';


function App() {
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <Footer /> {/* Footer is now outside Routes and will show on all pages */}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;

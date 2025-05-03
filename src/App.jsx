import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Admission from './components/Admission';
import Programs from './components/Programs';
import News from './components/News';
import Academics from './components/Academics';
import Contact from './components/Contact';
import Gallery from './components/Gallery'; // Fixed path (lowercase 'c')
import { GoogleOAuthProvider } from '@react-oauth/google';

function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <News />
    </>
  );
}

function App() {
  // Use environment variable for client ID
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || 'your-client-id.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </GoogleOAuthProvider>
  );
}

export default App;
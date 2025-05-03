import React from 'react';
import heroBg from '../assets/images/download4.jpg'; // adjust path if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="py-20 md:py-32"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to GS Trinité
          </h2>
          <p className="text-lg md:text-xl mb-8">
            GS Trinité TVET School: TVET results, courses, fees, admission, online application, and contact details.
          </p>
          <h5 className="text-3xl md:text-4xl font-light mb-6">
            Empowering Students for Excellence
          </h5>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
  href="#contact"
  className="inline-block bg-red-400 text-white px-6 py-3 rounded-sm text-lg font-medium hover:bg-red-700 transition flex items-center gap-2"
>
  <FontAwesomeIcon icon={faBookOpen} />
  Read More!
</a>
<a
  href="#"
  className="inline-block bg-blue-400 text-white px-6 py-3 rounded-sm text-lg font-medium hover:bg-blue-700 transition flex items-center gap-2"
>
  <FontAwesomeIcon icon={faUserGraduate} />
  Admission!
</a>
<a
  href="#"
  className="inline-block bg-pink-400 text-white px-6 py-3 rounded-sm text-lg font-medium hover:bg-blue-700 transition flex items-center gap-2"
>
  <FontAwesomeIcon icon={faUserGraduate} />
  Join Now
</a>
</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

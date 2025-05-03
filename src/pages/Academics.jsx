import React from 'react';

const Academics = () => {
  return (
    <main className="px-6 py-12 md:px-16 lg:px-32 bg-white text-gray-800">
      
      {/* Page Header */}
      <header className="text-center mb-2 px-8 md:px-8 lg:px-24">
  <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4 leading-tight tracking-wide">
    Academic Excellence at Our School
  </h1>
  <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
    Empowering students through knowledge, creativity, and leadership.
  </p>
</header>


      {/* Programs Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Programs Offered</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Elementary Education',
              desc: 'Focuses on reading, writing, math, and social development for young learners.',
            },
            {
              title: 'Middle School',
              desc: 'Encourages exploration, teamwork, and independent learning with interdisciplinary approaches.',
            },
            {
              title: 'High School',
              desc: 'Prepares students for university with advanced courses and extracurricular opportunities.',
            },
          ].map((item) => (
            <div key={item.title} className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Departments Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Departments</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Mathematics</li>
          <li>Science & Technology</li>
          <li>Humanities</li>
          <li>Arts & Music</li>
          <li>Physical Education</li>
          <li>Languages</li>
        </ul>
      </section>

      {/* Curriculum Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Curriculum Overview</h2>
        <p className="text-gray-700">
          Our curriculum is designed to nurture curiosity, develop analytical thinking, and build a strong foundation
          across disciplines. We follow international standards while adapting content to local relevance.
        </p>
      </section>

      {/* Faculty Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">Meet Our Faculty</h2>
        <div className="flex flex-wrap gap-4">
          {['Dr. Smith (Physics)', 'Ms. Johnson (English)', 'Mr. Lee (Math)', 'Mrs. Kaur (History)'].map((name) => (
            <div
              key={name}
              className="bg-gray-100 p-4 rounded-lg w-full md:w-[48%] lg:w-[23%] shadow-sm"
            >
              <h4 className="font-semibold text-lg mb-1">{name}</h4>
              <p className="text-sm text-gray-600">
                Highly experienced educator with passion for student success.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Resources */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Student Resources</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Digital Learning Platform</li>
          <li>Library & Research Tools</li>
          <li>Career Counseling</li>
          <li>Clubs & Competitions</li>
        </ul>
      </section>

      {/* Get Involved */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Get Involved</h2>
        <p className="mb-4 text-gray-700">
          We encourage students and parents to participate in academic planning, workshops, and feedback sessions.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded transition">
          Contact Academic Advisor
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} GS Trinité. All rights reserved/2025.</p>
      </footer>
    </main>
  );
};

export default Academics;

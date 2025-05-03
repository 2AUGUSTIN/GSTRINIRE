import React from 'react';
import elementaryImg from '../assets/images/download1.jpg';
import middleSchoolImg from '../assets/images/download2.jpg';
import highSchoolImg from '../assets/images/download4.jpg';

function Programs() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Our Programs</h3>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img src={elementaryImg} alt="Elementary Education" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Elementary Education</h4>
              <p className="text-gray-600">
                Our elementary program establishes a strong foundation for lifelong learning, focusing on core subjects while nurturing curiosity and creativity.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img src={middleSchoolImg} alt="Middle School" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Middle School</h4>
              <p className="text-gray-600">
                The middle school curriculum builds on fundamentals while introducing specialized subjects and emphasizing critical thinking skills.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img src={highSchoolImg} alt="High School" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">High School</h4>
              <p className="text-gray-600">
                Our high school program prepares students for higher education through advanced coursework, specialized tracks, and university preparation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;

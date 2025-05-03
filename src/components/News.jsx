import React from 'react';
import scienceFairImg from '../assets/images/download1.jpg';
import sportsImg from '../assets/images/download6.jpg';
import artImg from '../assets/images/download2.jpg';
import highSchoolImg from '../assets/images/download3.jpg';


function News() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">Latest News</h3>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img src={scienceFairImg} alt="Science Fair" className="w-full h-56 object-cover" />
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">April 15, 2025</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Annual Science Fair Winners</h4>
              <p className="text-gray-600">
                Congratulations to all participants and winners of our annual science fair. This year's projects showcased remarkable innovation and scientific inquiry.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img src={sportsImg} alt="Sports Tournament" className="w-full h-56 object-cover" />
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">April 10, 2025</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Regional Sports Tournament</h4>
              <p className="text-gray-600">
                Our school's basketball team advanced to the finals of the regional tournament. Join us this weekend to cheer them on!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img src={artImg} alt="Art Exhibition" className="w-full h-56 object-cover" />
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">April 5, 2025</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Student Art Exhibition</h4>
              <p className="text-gray-600">
                The annual student art exhibition opens next week, featuring works from talented young artists across all grade levels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;

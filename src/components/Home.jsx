import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Program cards data
  const programs = [
    {
      title: "O Level Program",
      description: "Comprehensive Cambridge curriculum preparing students for international examinations.",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      link: "/academics/olevel"
    },
    {
      title: "Networking Academy",
      description: "Cisco-certified courses in networking and IT infrastructure development.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      link: "/academics/networking"
    },
    {
      title: "Accounting Program",
      description: "Professional accounting courses with ACCA certification preparation.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80",
      link: "/academics/accounting"
    }
  ];

  // Manager cards data
  const managers = [
    {
      title: "School Manager",
      description: "Oversees daily operations and strategic direction of the school.",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "/management/school"
    },
    {
      title: "Staff Manager",
      description: "Manages faculty and staff development, recruitment, and welfare.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "/management/staff"
    },
    {
      title: "Account Manager",
      description: "Handles financial operations, budgeting, and school accounts.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      link: "/management/account"
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-64px)]">
        <div className="absolute inset-0 bg-black/50 z-0">
          <img 
            src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqg2B0Pq7j0J3zImJaf5GAk6lZqhxD2ijurID1hljUUSuCf2IMcbuxrD5DihxuHljrVqloo3O0VmWY24fSt5KwsOcYAIDwv1bCKElQMm9lXu-074f9ZPtnOqRVraCsbMZ1evhmvqQ=s680-w680-h510-rw"
            alt="School background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[calc(100vh-64px)] px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to GS Trinité
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-fade-in delay-100">
             GS Trinité TVET School: TVET results, courses, fees, admission, online application, and contact details
            </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
             Empowering Students for Excellence in Education
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
              <Link to="/admission" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                Apply Now
              </Link>
              <Link to="/about" className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Academic Programs</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized courses designed to prepare students for professional success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Link 
                    to={program.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Management Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Management Team</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals ensuring smooth operation of the institution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managers.map((manager, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={manager.image} 
                    alt={manager.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{manager.title}</h3>
                  <p className="text-gray-600 mb-4">{manager.description}</p>
                  <Link 
                    to={manager.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Contact
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      <div className="relative z-10 bg-white/90 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Quality Education</h3>
            <p className="text-gray-600">Our curriculum meets international standards while maintaining local relevance.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Modern Facilities</h3>
            <p className="text-gray-600">State-of-the-art classrooms, labs, and sports facilities.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">Experienced Staff</h3>
            <p className="text-gray-600">Dedicated teachers committed to student success.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
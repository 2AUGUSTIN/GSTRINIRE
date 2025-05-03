
import { useState } from 'react';
import { ChevronDown, ChevronUp, Map, Phone, Mail, Calendar, Users, BookOpen, Award, Clock } from 'lucide-react';

export default function About() {
  const [activeSection, setActiveSection] = useState('history');

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold mb-2">GS Trinité</h1>
            <p className="text-xl font-light">Excellence Through Education in Rutsiro, Rwanda</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Welcome to Groupe Scolaire Trinité</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering students through quality education and fostering a community of 
            academic excellence, moral integrity, and social responsibility in the heart of Rutsiro.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - About Sections */}
          <div className="lg:col-span-2 space-y-8">
            {/* Our History Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="flex justify-between items-center p-6 cursor-pointer bg-gray-100"
                onClick={() => toggleSection('history')}
              >
                <h3 className="text-2xl font-semibold">Our History</h3>
                {activeSection === 'history' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
              {activeSection === 'history' && (
                <div className="p-6">
                  <p className="mb-4">
                    Founded in 1998, GS Trinité began as a small community school with a mission to provide 
                    quality education to the children of Rutsiro district. Over the years, we have grown 
                    significantly while maintaining our core values of academic excellence, character 
                    development, and community service.
                  </p>
                  <p>
                    From our humble beginnings with just three classrooms and five teachers, we have 
                    expanded to become one of the leading educational institutions in the Western Province 
                    of Rwanda, now serving over 800 students with a staff of dedicated educators and 
                    support personnel.
                  </p>
                </div>
              )}
            </div>

            {/* Our Mission Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="flex justify-between items-center p-6 cursor-pointer bg-gray-100"
                onClick={() => toggleSection('mission')}
              >
                <h3 className="text-2xl font-semibold">Our Mission</h3>
                {activeSection === 'mission' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
              {activeSection === 'mission' && (
                <div className="p-6">
                  <p className="mb-4">
                    At GS Trinité, our mission is to provide a comprehensive, high-quality education that 
                    develops the intellectual, physical, social, and ethical potential of each student.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>To create a stimulating learning environment where students can achieve their fullest potential</li>
                    <li>To instill a love for learning and intellectual curiosity in our students</li>
                    <li>To promote respect, responsibility, and integrity within our community</li>
                    <li>To prepare students to be productive, responsible citizens in a diverse and changing world</li>
                    <li>To foster collaboration between students, teachers, parents, and the wider community</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Academic Programs Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="flex justify-between items-center p-6 cursor-pointer bg-gray-100"
                onClick={() => toggleSection('programs')}
              >
                <h3 className="text-2xl font-semibold">Academic Programs</h3>
                {activeSection === 'programs' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
              {activeSection === 'programs' && (
                <div className="p-6">
                  <p className="mb-4">
                    GS Trinité offers comprehensive educational programs following the national curriculum 
                    with additional emphasis on language skills, technological literacy, and moral education.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="border p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Primary Education</h4>
                      <p>Ages 6-12, focusing on foundational skills in literacy, numeracy, science, and social studies.</p>
                    </div>
                    <div className="border p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Lower Secondary</h4>
                      <p>Ages 13-15, building on fundamentals while introducing more specialized subjects.</p>
                    </div>
                    <div className="border p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Upper Secondary</h4>
                      <p>Ages 16-18, with specialized tracks in Sciences, Languages, and Humanities.</p>
                    </div>
                    <div className="border p-4 rounded-lg">
                      <h4 className="font-bold mb-2">Extracurricular Activities</h4>
                      <p>Sports, arts, music, debate club, and community service opportunities.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Our Staff Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="flex justify-between items-center p-6 cursor-pointer bg-gray-100"
                onClick={() => toggleSection('staff')}
              >
                <h3 className="text-2xl font-semibold">Our Staff</h3>
                {activeSection === 'staff' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
              {activeSection === 'staff' && (
                <div className="p-6">
                  <p className="mb-4">
                    Our dedicated team of educators and support staff is committed to providing the highest 
                    quality education and nurturing environment for all students.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mx-auto mb-3">
                        <Users size={36} className="text-gray-600" />
                      </div>
                      <h4 className="font-bold">35+ Teachers</h4>
                      <p className="text-sm">Qualified professionals with expertise in their subjects</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mx-auto mb-3">
                        <Award size={36} className="text-gray-600" />
                      </div>
                      <h4 className="font-bold">Administrative Team</h4>
                      <p className="text-sm">Ensuring smooth daily operations</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center mx-auto mb-3">
                        <BookOpen size={36} className="text-gray-600" />
                      </div>
                      <h4 className="font-bold">Support Staff</h4>
                      <p className="text-sm">Counselors, librarians and maintenance team</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Contact Info and Quick Facts */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Map className="mr-3 text-blue-700 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Address:</h4>
                    <p>GS Trinité, Rutsiro District, Western Province, Rwanda</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="mr-3 text-blue-700 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Phone:</h4>
                    <p>+250 788 123 456</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-3 text-blue-700 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Email:</h4>
                    <p>info@gstrinite.rw</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="mr-3 text-blue-700 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Established:</h4>
                    <p>1998</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="mr-3 text-blue-700 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">Students:</h4>
                    <p>Over 800 students</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-3 text-blue-700 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h4 className="font-medium">School Hours:</h4>
                    <p>Monday - Friday: 7:30 AM - 4:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="bg-blue-700 text-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4 border-b border-blue-600 pb-2">Our Values</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-300 mr-2"></div>
                  <span>Excellence in education</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-300 mr-2"></div>
                  <span>Integrity and ethical conduct</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-300 mr-2"></div>
                  <span>Respect for diversity</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-300 mr-2"></div>
                  <span>Community service</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-300 mr-2"></div>
                  <span>Innovation and critical thinking</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-yellow-300 mr-2"></div>
                  <span>Collaboration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
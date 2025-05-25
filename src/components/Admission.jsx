import { useState } from 'react';
import { 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  FileText, 
  Clock, 
  HelpCircle, 
  Download, 
  CheckSquare 
} from 'lucide-react';

export default function Admission() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(1);
  
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  
  const faqs = [
    {
      question: "What are the age requirements for admission?",
      answer: "For Primary School: 6-12 years old. For Lower Secondary (O-Level): 13-15 years old. For Upper Secondary (A-Level): 16-18 years old. We assess each child individually and may make exceptions based on academic readiness and development."
    },
    {
      question: "Does GS Trinité offer financial aid or scholarships?",
      answer: "Yes, we offer merit-based scholarships for academically gifted students and need-based financial aid for families demonstrating financial need. Applications for financial assistance must be submitted alongside admission applications."
    },
    {
      question: "What is the language of instruction?",
      answer: "Our primary language of instruction is English, with Kinyarwanda and French taught as additional languages. Students develop strong multilingual skills throughout their education at GS Trinité."
    },
    {
      question: "Do you offer transportation services?",
      answer: "Yes, GS Trinité provides bus transportation for students living within Rutsiro district. Routes and schedules are determined at the beginning of each academic year based on student needs."
    },
    {
      question: "What extracurricular activities are available?",
      answer: "We offer a wide range of extracurricular activities including sports (football, basketball, volleyball), arts (music, drama, visual arts), academic clubs (debate, science, mathematics), and community service opportunities."
    },
    {
      question: "What is the student-teacher ratio?",
      answer: "We maintain a low student-to-teacher ratio of approximately 25:1 to ensure personalized attention and effective learning for all students."
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Admissions</h1>
            <p className="text-lg sm:text-xl font-light max-w-2xl">
              Join the GS Trinité Community in Rutsiro, Rwanda
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-6">
            Begin Your Educational Journey With Us
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6 md:mb-8">
            We welcome students from diverse backgrounds who are eager to learn, grow, and contribute 
            to our vibrant school community.
          </p>
          <div className="mt-6 md:mt-8">
            <a 
              href="#apply-now" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Why Choose GS Trinité?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Academic Excellence",
                description: "Consistently high academic performance with excellent national examination results and university placement rates."
              },
              {
                title: "Holistic Education",
                description: "Focus on intellectual, physical, social, and ethical development through a balanced curriculum and extracurricular activities."
              },
              {
                title: "Qualified Teachers",
                description: "Dedicated and experienced teaching staff committed to student success and continuous professional development."
              },
              {
                title: "Modern Facilities",
                description: "Well-equipped classrooms, science laboratories, computer lab, library, and sports facilities to enhance learning experiences."
              },
              {
                title: "Community Values",
                description: "Strong emphasis on character development, leadership skills, and community service through various initiatives."
              },
              {
                title: "Inclusive Environment",
                description: "Welcoming atmosphere that celebrates diversity and provides support for students with different learning needs."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 sm:p-4 rounded-full mb-4">
                  <CheckCircle size={28} className="text-blue-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

       

        {/* Apply Now Section */}
        <section className="mb-16 bg-blue-50 py-10 px-4 rounded-lg" id="apply-now">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Apply Now
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-8 text-sm sm:text-base">
            We are currently accepting applications for the upcoming academic year. 
            Please complete the form below or download our application packet.
          </p>
          
          <div className="text-center mb-6 sm:mb-8">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-md transition duration-300 inline-flex items-center">
              <Download size={18} className="mr-2" />
              Download Application Packet
            </button>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
              Admission Application Form
            </h3>
            
            <form className="space-y-6">
              {/* Student Information */}
              <div className="border-b pb-4 mb-6">
                <h4 className="text-lg font-medium mb-4">Student Information</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                    <input 
                      type="date" 
                      id="dob" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <select 
                      id="gender" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      required
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="gradeApplying" className="block text-sm font-medium text-gray-700 mb-1">Grade Applying For</label>
                    <select 
                      id="gradeApplying" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      required
                    >
                      <option value="">Select</option>
                      <option value="Level 3">Level 3</option>
                      <option value="Level 4">Level 4</option>
                      <option value="Level 5">Level 5</option>
                      <option value="secondary1">Secondary 1 (S1)</option>
                      <option value="secondary2">Secondary 2 (S2)</option>
                      <option value="secondary3">Secondary 3 (S3)</option>
                      <option value="secondary4">Secondary 4 (S4)</option>
                      <option value="secondary5">Secondary 5 (S5)</option>
                      <option value="secondary6">Secondary 6 (S6)</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="currentSchool" className="block text-sm font-medium text-gray-700 mb-1">Current School (if any)</label>
                    <input 
                      type="text" 
                      id="currentSchool" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>
              
              {/* Parent/Guardian Information */}
              <div className="border-b pb-4 mb-6">
                <h4 className="text-lg font-medium mb-4">Parent/Guardian Information</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="parentName" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-1">Relationship to Student</label>
                    <select 
                      id="relationship" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      required
                    >
                      <option value="">Select</option>
                      <option value="mother">Mother</option>
                      <option value="father">Father</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="parentEmail" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="parentPhone" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Home Address</label>
                    <textarea 
                      id="address" 
                      rows="3" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              
              {/* Additional Information */}
              <div className="border-b pb-4 mb-6">
                <h4 className="text-lg font-medium mb-4">Additional Information</h4>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">Student's Interests and Hobbies</label>
                    <textarea 
                      id="interests" 
                      rows="2" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="specialNeeds" className="block text-sm font-medium text-gray-700 mb-1">Any Special Learning Needs</label>
                    <textarea 
                      id="specialNeeds" 
                      rows="2" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about GS Trinité?</label>
                    <select 
                      id="hearAbout" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    >
                      <option value="">Select</option>
                      <option value="friend">Friend/Family Referral</option>
                      <option value="internet">Internet Search</option>
                      <option value="social">Social Media</option>
                      <option value="newspaper">Newspaper</option>
                      <option value="event">Community Event</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              
              {/* Terms Agreement */}
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="termsAgree" 
                  className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="termsAgree" className="ml-2 block text-sm text-gray-700">
                  I confirm that all information provided is accurate and complete. I understand that false information may result in the denial of admission or withdrawal of enrollment.
                </label>
              </div>
              
              {/* Submit Button */}
              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-md transition duration-300 text-sm sm:text-base"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Fees & Financial Aid */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Fees & Financial Aid
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 sm:mb-8">
              <div className="bg-blue-700 text-white py-3 sm:py-4 px-4 sm:px-6">
                <h3 className="text-lg sm:text-xl font-bold">2024-2025 Tuition and Fees</h3>
              </div>
              <div className="p-4 sm:p-6">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-max">
                    <thead>
                      <tr className="border-b-2 border-blue-100">
                        <th className="py-2 px-3 sm:py-3 sm:px-4 text-left text-sm sm:text-base">Grade Level</th>
                        <th className="py-2 px-3 sm:py-3 sm:px-4 text-left text-sm sm:text-base">Tuition per Term</th>
                        <th className="py-2 px-3 sm:py-3 sm:px-4 text-left text-sm sm:text-base">Annual Fees</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 px-3 sm:py-3 sm:px-4 font-medium text-sm sm:text-base">Level (L3-L5)</td>
                        <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">150,000 RWF</td>
                        <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">75,000 RWF</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-2 px-3 sm:py-3 sm:px-4 font-medium text-sm sm:text-base">Lower Secondary (S1-S3)</td>
                        <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">180,000 RWF</td>
                        <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">95,000 RWF</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 sm:py-3 sm:px-4 font-medium text-sm sm:text-base">Upper Secondary (S4-S6)</td>
                        <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">220,000 RWF</td>
                        <td className="py-2 px-3 sm:py-3 sm:px-4 text-sm sm:text-base">110,000 RWF</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600">
                  <p className="mb-1 sm:mb-2"><strong>Note:</strong> Annual fees include registration, examination fees, and basic learning materials.</p>
                  <p className="mb-1 sm:mb-2">Additional costs may apply for uniforms, transportation, and special programs.</p>
                  <p>Payment plans are available. Please contact the finance office for more information.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 sm:p-6 rounded-r-lg mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Financial Aid & Scholarships</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">
                GS Trinité is committed to making quality education accessible to talented students from diverse backgrounds. 
                We offer several financial aid options:
              </p>
              <ul className="list-disc pl-5 space-y-1 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base">
                <li>Merit-based scholarships covering 25-100% of tuition for academically gifted students</li>
                <li>Need-based financial aid for families demonstrating financial hardship</li>
                <li>Sibling discounts of 10% for families with multiple children enrolled</li>
                <li>Special consideration for orphans and vulnerable children</li>
              </ul>
              <p className="text-xs sm:text-sm italic">
                Financial aid applications must be submitted along with admission applications. 
                Supporting documentation will be required.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-3 sm:mb-4 bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className="flex justify-between items-center p-4 sm:p-5 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-base sm:text-lg font-medium flex items-center">
                    <HelpCircle size={18} className="text-blue-700 mr-2 sm:mr-3 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  {openFaq === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                
                {openFaq === index && (
                  <div className="p-4 sm:p-5 pt-0 border-t text-sm sm:text-base">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-10">
            <p className="mb-3 sm:mb-4 text-sm sm:text-base">
              Have more questions that aren't answered here?
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 sm:py-2 sm:px-6 rounded-md transition duration-300 text-sm sm:text-base">
              Contact Admissions Office
            </button>
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6 sm:mb-8">
            Take the first step towards providing your child with an excellent education at GS Trinité.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a 
              href="#apply-now" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-md transition duration-300 text-sm sm:text-base"
            >
              Apply Now
            </a>
            <button className="bg-transparent hover:bg-blue-800 text-white border-2 border-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-md transition duration-300 text-sm sm:text-base">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

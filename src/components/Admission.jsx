import { useState } from 'react';
import { CheckCircle, ChevronDown, ChevronUp, Calendar, FileText, Clock, HelpCircle, Download, CheckSquare } from 'lucide-react';

export default function AdmissionPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(1);
  
  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
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
      question: "What is the student-to-teacher ratio?",
      answer: "We maintain a low student-to-teacher ratio of approximately 25:1 to ensure personalized attention and effective learning for all students."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold mb-2">Admissions</h1>
            <p className="text-xl font-light">Join the GS Trinité Community in Rutsiro, Rwanda</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Begin Your Educational Journey With Us</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            We welcome students from diverse backgrounds who are eager to learn, grow, and contribute 
            to our vibrant school community.
          </p>
          <div className="mt-8">
            <a 
              href="#apply-now" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose GS Trinité?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <CheckCircle size={32} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
              <p>Consistently high academic performance with excellent national examination results and university placement rates.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <CheckCircle size={32} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Holistic Education</h3>
              <p>Focus on intellectual, physical, social, and ethical development through a balanced curriculum and extracurricular activities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <CheckCircle size={32} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Qualified Teachers</h3>
              <p>Dedicated and experienced teaching staff committed to student success and continuous professional development.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <CheckCircle size={32} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Facilities</h3>
              <p>Well-equipped classrooms, science laboratories, computer lab, library, and sports facilities to enhance learning experiences.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <CheckCircle size={32} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Values</h3>
              <p>Strong emphasis on character development, leadership skills, and community service through various initiatives.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <CheckCircle size={32} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusive Environment</h3>
              <p>Welcoming atmosphere that celebrates diversity and provides support for students with different learning needs.</p>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className="mb-16" id="admission-process">
          <h2 className="text-3xl font-bold text-center mb-12">Our Admission Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:translate-x-[-50%] h-full w-1 bg-blue-300"></div>
              
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center mb-12">
                <div 
                  className={`z-10 flex items-center justify-center w-12 h-12 rounded-full mb-4 md:mb-0 ${
                    activeStep >= 1 ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveStep(1)}
                >
                  <span className="text-white font-bold">1</span>
                </div>
                <div className="md:absolute md:left-[calc(50%+2rem)] md:w-[calc(50%-2rem)] p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Application Submission</h3>
                  <p className="mb-3">Complete and submit the online application form along with all required documents.</p>
                  <div className="flex items-center text-blue-700">
                    <FileText size={16} className="mr-2" />
                    <span className="text-sm font-medium">Required documents: Birth certificate, previous school records, passport photos</span>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center mb-12">
                <div 
                  className={`z-10 flex items-center justify-center w-12 h-12 rounded-full mb-4 md:mb-0 ${
                    activeStep >= 2 ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveStep(2)}
                >
                  <span className="text-white font-bold">2</span>
                </div>
                <div className="md:absolute md:right-[calc(50%+2rem)] md:w-[calc(50%-2rem)] p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Entrance Assessment</h3>
                  <p className="mb-3">Students take an entrance assessment to determine academic readiness and appropriate grade placement.</p>
                  <div className="flex items-center text-blue-700">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm font-medium">Assessments are scheduled after application review</span>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center mb-12">
                <div 
                  className={`z-10 flex items-center justify-center w-12 h-12 rounded-full mb-4 md:mb-0 ${
                    activeStep >= 3 ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveStep(3)}
                >
                  <span className="text-white font-bold">3</span>
                </div>
                <div className="md:absolute md:left-[calc(50%+2rem)] md:w-[calc(50%-2rem)] p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Interview</h3>
                  <p className="mb-3">Parents and students attend an interview with school administrators to discuss educational goals and expectations.</p>
                  <div className="flex items-center text-blue-700">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm font-medium">Interviews typically last 30-45 minutes</span>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center">
                <div 
                  className={`z-10 flex items-center justify-center w-12 h-12 rounded-full mb-4 md:mb-0 ${
                    activeStep >= 4 ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setActiveStep(4)}
                >
                  <span className="text-white font-bold">4</span>
                </div>
                <div className="md:absolute md:right-[calc(50%+2rem)] md:w-[calc(50%-2rem)] p-4 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">Admission Decision</h3>
                  <p className="mb-3">Families receive an admission decision within two weeks of completing all previous steps.</p>
                  <div className="flex items-center text-blue-700">
                    <CheckSquare size={16} className="mr-2" />
                    <span className="text-sm font-medium">Upon acceptance, registration fee and forms must be submitted within 14 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Apply Now Section */}
        <section className="mb-16 bg-blue-50 py-10 px-4 rounded-lg" id="apply-now">
          <h2 className="text-3xl font-bold text-center mb-6">Apply Now</h2>
          <p className="text-center max-w-3xl mx-auto mb-8">
            We are currently accepting applications for the upcoming academic year. 
            Please complete the form below or download our application packet.
          </p>
          
          <div className="text-center mb-8">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-6 rounded-md transition duration-300 inline-flex items-center">
              <Download size={18} className="mr-2" />
              Download Application Packet
            </button>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10">
            <h3 className="text-2xl font-semibold mb-6 text-center">Admission Application Form</h3>
            
            <form className="space-y-6">
              <div className="border-b pb-4 mb-6">
                <h4 className="text-lg font-medium mb-4">Student Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                    <input 
                      type="date" 
                      id="dob" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <select 
                      id="gender" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select</option>
                      <option value="Level 3">Level 3</option>
                      <option value="Level 3">Level 4</option>
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
              
              <div className="border-b pb-4 mb-6">
                <h4 className="text-lg font-medium mb-4">Parent/Guardian Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="parentName" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-1">Relationship to Student</label>
                    <select 
                      id="relationship" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="parentPhone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Home Address</label>
                    <textarea 
                      id="address" 
                      rows="3" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div className="border-b pb-4 mb-6">
                <h4 className="text-lg font-medium mb-4">Additional Information</h4>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">Student's Interests and Hobbies</label>
                    <textarea 
                      id="interests" 
                      rows="2" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="specialNeeds" className="block text-sm font-medium text-gray-700 mb-1">Any Special Learning Needs</label>
                    <textarea 
                      id="specialNeeds" 
                      rows="2" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <div>
                    <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about GS Trinité?</label>
                    <select 
                      id="hearAbout" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="termsAgree" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  required
                />
                <label htmlFor="termsAgree" className="ml-2 block text-sm text-gray-700">
                  I confirm that all information provided is accurate and complete. I understand that false information may result in the denial of admission or withdrawal of enrollment.
                </label>
              </div>
              
              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-md transition duration-300"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Fees & Financial Aid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Fees & Financial Aid</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="bg-blue-700 text-white py-4 px-6">
                <h3 className="text-xl font-bold">2024-2025 Tuition and Fees</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-blue-100">
                        <th className="py-3 px-4 text-left">Grade Level</th>
                        <th className="py-3 px-4 text-left">Tuition per Term</th>
                        <th className="py-3 px-4 text-left">Annual Fees</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Level (L3-L5)</td>
                        <td className="py-3 px-4">150,000 RWF</td>
                        <td className="py-3 px-4">75,000 RWF</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Lower Secondary (S1-S3)</td>
                        <td className="py-3 px-4">180,000 RWF</td>
                        <td className="py-3 px-4">95,000 RWF</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Upper Secondary (S4-S6)</td>
                        <td className="py-3 px-4">220,000 RWF</td>
                        <td className="py-3 px-4">110,000 RWF</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 text-sm text-gray-600">
                  <p className="mb-2"><strong>Note:</strong> Annual fees include registration, examination fees, and basic learning materials.</p>
                  <p className="mb-2">Additional costs may apply for uniforms, transportation, and special programs.</p>
                  <p>Payment plans are available. Please contact the finance office for more information.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
              <h3 className="text-xl font-semibold mb-3">Financial Aid & Scholarships</h3>
              <p className="mb-4">
                GS Trinité is committed to making quality education accessible to talented students from diverse backgrounds. 
                We offer several financial aid options:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Merit-based scholarships covering 25-100% of tuition for academically gifted students</li>
                <li>Need-based financial aid for families demonstrating financial hardship</li>
                <li>Sibling discounts of 10% for families with multiple children enrolled</li>
                <li>Special consideration for orphans and vulnerable children</li>
              </ul>
              <p className="text-sm italic">
                Financial aid applications must be submitted along with admission applications. 
                Supporting documentation will be required.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className="flex justify-between items-center p-5 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium flex items-center">
                    <HelpCircle size={20} className="text-blue-700 mr-3 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                
                {openFaq === index && (
                  <div className="p-5 pt-0 border-t">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="mb-4">Have more questions that aren't answered here?</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300">
              Contact Admissions Office
            </button>
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Take the first step towards providing your child with an excellent education at GS Trinité.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#apply-now" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-md transition duration-300 inline-block"
            >
              Apply Now
            </a>
            <button className="bg-transparent hover:bg-blue-800 text-white border-2 border-white font-bold py-3 px-8 rounded-md transition duration-300">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
}
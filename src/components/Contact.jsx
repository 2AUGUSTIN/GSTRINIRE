import React, { useState } from 'react';
import { MdSend, MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { GoogleLogin } from '@react-oauth/google';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    }, 1500);
  };

  const responseGoogle = (response) => {
    console.log(response);
    // Handle Google auth response
  };

  const errorGoogle = (error) => {
    console.error(error);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-5">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our school? Reach out to us through the form below or visit our campus in Rustic District.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
              
              <div className="mb-6 flex justify-center">
                <GoogleLogin
                  onSuccess={responseGoogle}
                  onError={errorGoogle}
                  useOneTap
                  shape="pill"
                  size="large"
                  text="signin_with"
                />
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-100 text-green-700 rounded-md">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${isSubmitting ? 'bg-blue-600' : 'bg-blue-700 hover:bg-blue-800'} text-white font-medium py-3 px-4 rounded-md transition duration-300 flex items-center justify-center`}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <MdSend size={18} className="mr-2" />
                      Submit Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info and Map */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                
                {/* Google Map Embed */}
                <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_MAP_PARAMETERS"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="GS Trinie Location in Rustic District"
                  ></iframe>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MdLocationOn className="text-blue-600 mt-1 mr-3 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-900">Address</h4>
                      <p className="text-gray-600">
                        123 Education Street<br />
                        Rustic District, City 12345<br />
                        Country
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MdPhone className="text-blue-600 mr-3" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-600">+1 (123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MdEmail className="text-blue-600 mr-3" size={20} />
                    <div>
                      <h4 className="font-medium text-gray-900">Email</h4>
                      <p className="text-gray-600">info@gstrinie.edu</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
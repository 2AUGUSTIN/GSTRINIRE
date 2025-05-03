import React from 'react';
import { MdSend } from 'react-icons/md';
import { GoogleLogin } from '@react-oauth/google';  // For Google Sign-In

export default function Contact() {
    const responseGoogle = (response) => {
        console.log(response);
        // Handle the Google sign-in response here
        // You'll get the user's profile information and tokens
    };

    const errorGoogle = (error) => {
        console.error(error);
        // Handle errors here
    };

    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-5">Contact Us</h2>
                        <p className="text-gray-600">Have questions about our school? Fill out the form below and we'll get back to you as soon as possible.</p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
                        {/* Google Sign-In Button */}
                        <div className="mb-6 flex justify-center">
                            <GoogleLogin
                                onSuccess={responseGoogle}
                                onError={errorGoogle}
                                useOneTap  // Optional: enables one-tap sign-up
                                shape="pill"  // Optional: rounded button
                                size="large"  // Optional: button size
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

                        <form className="space-y-6">
                            {/* Form fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your first name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Your last name"
                                    />
                                </div>
                            </div>

                            {/* Other fields */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Send button */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-4 rounded-md transition duration-300 flex items-center justify-center"
                                >
                                    <MdSend size={18} className="mr-2" />
                                    Submit Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
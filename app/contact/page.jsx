import React from 'react';

export default function Contact() {
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="p-8">
                    <h1 className="text-2xl font-bold mb-2">Contact Us</h1>
                    <p className="text-gray-700 mb-4">Feel free to reach out to us via phone or email.</p>
                    <div className="flex items-center mb-2">
                        <svg className="h-6 w-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15v5a2 2 0 002 2h14a2 2 0 002-2v-5M5 12h14l-1.5-4.5L15 9H9l-1.5-1.5L5 12z"></path></svg>
                        <p className="text-gray-700">+91 97179 90571</p>
                    </div>
                    <div className="flex items-center">
                        <svg className="h-6 w-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15v5a2 2 0 002 2h14a2 2 0 002-2v-5M5 12h14l-1.5-4.5L15 9H9l-1.5-1.5L5 12z"></path></svg>
                        <p className="text-gray-700">d.sharma4319@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

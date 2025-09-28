import React, { useState } from "react";
import img1 from "../assets/img1.png";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-20 bg-gradient-to-br from-white to-purple-50">
      {/* Left Side */}
      <div className="flex-1 space-y-6">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          Hello, I’m <br />
          <span className="text-gray-900">Katragadda Chiranjeevi</span>
        </h2>

        <p className="text-lg text-gray-600 max-w-xl">
          I’m a Freelance <span className="font-semibold">UI/UX Designer</span>{" "}
          and <span className="font-semibold">Developer</span> based in London,
          England. I strive to build immersive and beautiful web applications
          through carefully crafted code and user-centric design.
        </p>

        {/* Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition"
        >
          Say Hello!
        </button>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-8 max-w-md">
          <div className="bg-purple-50 rounded-lg p-6 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800">15 Y.</h3>
            <p className="text-sm text-gray-600">Experience</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800">250+</h3>
            <p className="text-sm text-gray-600">Project Completed</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-gray-800">58</h3>
            <p className="text-sm text-gray-600">Happy Client</p>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <img
          src={img1}
          alt="Hero"
          className="w-80 h-auto rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">👋 Hello!</h3>
            <p className="text-gray-600 mb-6">
              Thanks for reaching out. I’ll get back to you soon!
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

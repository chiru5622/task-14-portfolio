import React from "react";
import img1 from "../assets/img1.png";

export default function AboutCard() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center px-6 py-8 bg-white rounded-3xl shadow-xl mx-auto">
      {/* Left: Profile Image & Socials */}
      <div className="flex flex-col items-center w-full md:w-1/2 mb-8 md:mb-0">
        <div className="relative">
          <img
            src={img1}
            alt="Profile"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg"
          />
          {/* Social icons bar */}
          <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 flex gap-3 bg-white rounded-xl shadow-lg px-5 py-2">
            <a href="#" className="text-purple-600 hover:text-purple-800 text-xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-purple-600 hover:text-purple-800 text-xl">
              <i className="fab fa-dribbble"></i>
            </a>
            <a href="#" className="text-purple-600 hover:text-purple-800 text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="bg-purple-600 text-white rounded px-2 py-1 text-xl"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Right: Info & Actions */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-8">
        <h3 className="text-3xl font-bold mb-4 text-gray-900 leading-snug">
          I am Professional User Experience Designer
        </h3>
        <p className="text-gray-600 mb-2">
          I design and develop services for customers specializing creating
          stylish, modern websites, web services and online stores. My passion
          is to design digital user experiences.
        </p>
        <p className="text-gray-600 mb-6">
          I design and develop services for customers specializing creating
          stylish, modern websites, web services.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-purple-700 transition"
          >
            My Project
          </a>

          {/* Download CV Button */}
          <a
            href="/cv.pdf"   // file in public/
            download="Katragadda_Chiranjeevi_CV.pdf" // custom name when saving
            className="border border-purple-600 text-purple-600 px-6 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-purple-50 transition"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="inline-block"
            >
              <path d="M5 8l5 5 5-5H13V3h-2v5H5z"></path>
              <path d="M19 18H5v-2h14v2z"></path>
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

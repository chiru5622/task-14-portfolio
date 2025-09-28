import React from 'react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 bg-white rounded-3xl shadow-xl max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 px-8">
        {/* Left side: Info and Social */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-3 text-gray-900">Let’s discuss your Project</h3>
          <p className="text-gray-500 mb-8">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alte.
          </p>
          <div className="flex flex-col gap-4 mb-8">
            {/* Address */}
            <div className="bg-white rounded-xl shadow p-4 flex items-center gap-4 w-fit">
              <span className="bg-purple-100 text-purple-600 rounded-lg p-2">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path d="M12 21s6-5.686 6-10a6 6 0 1 0-12 0c0 4.314 6 10 6 10z" stroke="#a855f7" strokeWidth="2" />
                  <circle cx="12" cy="11" r="2" fill="#a855f7" />
                </svg>
              </span>
              <div>
                <div className="text-xs text-gray-500 font-bold">Address:</div>
                <div className="text-gray-900 font-semibold">New Mexico 31134</div>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center gap-4">
              <span className="bg-purple-100 text-purple-600 rounded-lg p-2">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect x="3" y="7" width="18" height="10" rx="2" stroke="#a855f7" strokeWidth="2" />
                  <path d="M3 7l9 6 9-6" stroke="#a855f7" strokeWidth="2" />
                </svg>
              </span>
              <div>
                <div className="text-xs text-gray-500 font-bold">My Email:</div>
                <div className="text-gray-900 font-semibold">mymail@mail.com</div>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-4">
              <span className="bg-purple-100 text-purple-600 rounded-lg p-2">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.19a1.004 1.004 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V21a1 1 0 01-1 1C10.5 22 2 13.5 2 3a1 1 0 011-1h4.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.19 2.2z"
                    stroke="#a855f7"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <div>
                <div className="text-xs text-gray-500 font-bold">Call Me Now:</div>
                <div className="text-gray-900 font-semibold">00-1234 00000</div>
              </div>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex gap-6 mt-4">
            <a href="#" className="text-purple-600 text-2xl hover:text-purple-800">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-purple-600 text-2xl hover:text-purple-800">
              <i className="fab fa-dribbble"></i>
            </a>
            <a href="#" className="text-purple-600 text-2xl hover:text-purple-800">
              <span className="font-bold">Bē</span>
            </a>
            <a href="#" className="text-purple-600 text-2xl hover:text-purple-800">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-purple-600 text-2xl hover:text-purple-800">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        {/* Right side: Contact Form */}
        <div className="lg:w-1/2 bg-white rounded-2xl shadow px-8 py-10 flex flex-col justify-center">
          <p className="text-gray-500 mb-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alte.
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-700 font-semibold mb-2">
                  Name*
                </label>
                <input type="text" placeholder="Your Name" className="w-full border-b-2 border-purple-400 outline-none py-2 px-1 bg-transparent" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 font-semibold mb-2">
                  Email*
                </label>
                <input type="email" placeholder="Your Email" className="w-full border-b-2 border-purple-400 outline-none py-2 px-1 bg-transparent" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-700 font-semibold mb-2">
                  Location
                </label>
                <input type="text" placeholder="Your Location" className="w-full border-b-2 border-purple-400 outline-none py-2 px-1 bg-transparent" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 font-semibold mb-2">
                  Budget*
                </label>
                <input type="text" placeholder="Your Budget" className="w-full border-b-2 border-purple-400 outline-none py-2 px-1 bg-transparent" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-700 font-semibold mb-2">
                Subject*
              </label>
              <input type="text" placeholder="Subject" className="w-full border-b-2 border-purple-400 outline-none py-2 px-1 bg-transparent" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 font-semibold mb-2">
                Message*
              </label>
              <textarea placeholder="Your Message" className="w-full border-b-2 border-purple-400 outline-none py-2 px-1 bg-transparent min-h-[80px]" />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-xl shadow hover:bg-purple-700 transition flex items-center gap-2 mt-2"
            >
              Submit
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
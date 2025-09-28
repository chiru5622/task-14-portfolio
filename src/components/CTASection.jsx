import React from 'react';

export default function CTASection() {
  return (
    <section className="py-16 bg-[#18233a] text-center rounded-none">
      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
        Do you have Project Idia?<br />
        Let's discuss your project!
      </h3>
      <p className="text-gray-300 mb-8">
        There are many variations of passages of Lorem Ipsum available,<br className="hidden md:block"/>
        but the majority have suffered alteration.
      </p>
      <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow transition inline-flex items-center gap-2 text-lg">
        Let's work Together
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </section>
  );
}
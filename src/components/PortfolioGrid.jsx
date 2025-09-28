import React from 'react';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80'

];

export default function PortfolioGrid() {
  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-3 text-gray-900">Portfolio</h3>
        <p className="text-gray-500 mb-10">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {images.map((src, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border border-transparent hover:border-purple-200 transition"
            >
              <img src={src} alt="portfolio" className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col flex-1 justify-between">
                <span className="text-xs text-gray-400 font-bold tracking-wide mb-2">
                  UI-UX DESIGN
                </span>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Product Admin Dashboard
                </h4>
                <p className="text-gray-500 text-sm flex-1 mb-4">
                  Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 border border-purple-600 rounded-lg px-5 py-2 font-semibold text-sm hover:bg-purple-100 transition"
                >
                  Case Study
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <a
          href="#"
          className="inline-block px-7 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow hover:bg-purple-700 transition"
        >
          More Project
        </a>
      </div>
    </section>
  );
}
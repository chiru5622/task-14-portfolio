import React from 'react';

const services = [
  {
    title: 'User Experience (UX)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.',
    highlight: true,
  },
  {
    title: 'User Interface (UI)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.',
    highlight: false,
  },
  {
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.',
    highlight: false,
  },
];

export default function ServicesList() {
  return (
    <section id="services" className="bg-[#f6f8fb] py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 px-4">
        {/* Left Side */}
        <div className="md:w-1/2">
          <h3 className="text-3xl font-bold mb-4 text-gray-900 text-left">What I do?</h3>
          <p className="text-gray-500 mb-4 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
          </p>
          <p className="text-gray-500 mb-6 text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
          </p>
          <button className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition">
            Say Hello!
          </button>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl shadow-md px-8 py-6 text-left border border-transparent ${
                s.highlight ? 'border-l-4 border-purple-500 shadow-lg' : ''
              }`}
              style={s.highlight ? { boxShadow: '8px 8px 0 0 #a855f726, 0 4px 24px 0 #0000000d' } : {}}
            >
              <h4 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h4>
              <p className="text-gray-500 text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
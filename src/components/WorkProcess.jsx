import React from 'react';

const steps = [
  {
    title: 'Research',
    icon: (
      // Calendar icon
      <svg className="w-10 h-10 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="4" fill="currentColor" opacity="0.15" />
        <rect x="3" y="8" width="18" height="14" rx="2" fill="currentColor" />
        <rect x="7" y="12" width="2" height="2" fill="#fff" />
        <rect x="11" y="12" width="2" height="2" fill="#fff" />
        <rect x="15" y="12" width="2" height="2" fill="#fff" />
      </svg>
    ),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.'
  },
  {
    title: 'Analyze',
    icon: (
      // Chart icon
      <svg className="w-10 h-10 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="4" fill="currentColor" opacity="0.15" />
        <polyline points="7 15 10 10 13 14 17 8" stroke="#a855f7" strokeWidth="2" fill="none" />
        <circle cx="7" cy="15" r="1.5" fill="#a855f7" />
        <circle cx="10" cy="10" r="1.5" fill="#a855f7" />
        <circle cx="13" cy="14" r="1.5" fill="#a855f7" />
        <circle cx="17" cy="8" r="1.5" fill="#a855f7" />
      </svg>
    ),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.'
  },
  {
    title: 'Design',
    icon: (
      // Pencil icon
      <svg className="w-10 h-10 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="4" fill="currentColor" opacity="0.15" />
        <path d="M7 17l2 2 8-8-2-2-8 8z" fill="#a855f7"/>
        <path d="M15 7l2 2" stroke="#a855f7" strokeWidth="2"/>
      </svg>
    ),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.'
  },
  {
    title: 'Launch',
    icon: (
      // Laptop icon
      <svg className="w-10 h-10 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="4" fill="currentColor" opacity="0.15" />
        <rect x="7" y="10" width="10" height="6" rx="2" fill="#a855f7" />
        <rect x="9" y="14" width="6" height="1" fill="#fff" />
      </svg>
    ),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.'
  }
];

export default function WorkProcess() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-start md:items-center py-16 bg-[#f6f8fb]">
      {/* Left Side: Heading and Description */}
      <div className="md:w-1/2 px-8 mb-10 md:mb-0">
        <h3 className="text-3xl font-bold text-gray-900 mb-4 text-left">Work Process</h3>
        <p className="text-gray-500 text-left mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
        </p>
        <p className="text-gray-500 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
        </p>
      </div>
      {/* Right Side: Steps */}
      <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-start transition hover:shadow-lg"
          >
            <div className="mb-6 bg-purple-50 rounded-xl p-3 flex items-center justify-center">
              {step.icon}
            </div>
            <h4 className="font-bold text-gray-900 text-lg mb-2"> {i + 1}. {step.title}</h4>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
import React from 'react';

export default function Testimonial() {
  return (
    <section className="py-16 bg-gradient-to-tr from-pink-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-4 text-gray-900">Testimonial</h3>
        <p className="text-gray-500 mb-10">
          There are many variations of passages of Lorem Ipsum available,<br className="hidden md:block"/>
          but the majority have suffered alteration.
        </p>
        <blockquote className="text-lg font-semibold text-gray-700 max-w-3xl mx-auto mb-6">
          “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta.”
        </blockquote>
        <div className="mb-2">
          <span className="font-bold text-gray-900 text-lg block">Esther Howard</span>
          <span className="text-gray-500 text-sm">Managing Director, ABC company</span>
        </div>
        {/* Dots for carousel navigation */}
        <div className="mt-6 flex justify-center gap-2">
          <span className="w-3 h-3 bg-purple-600 rounded-full inline-block"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full inline-block"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full inline-block"></span>
        </div>
      </div>
    </section>
  );
}
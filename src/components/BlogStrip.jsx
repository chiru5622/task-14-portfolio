import React from 'react';

const posts = [
  {
    title: 'Lorem ipsum dolor sit consea. Nulla purus arcu',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    date: '22 Oct, 2020',
    comments: 246,
  },
  {
    title: 'Lorem ipsum dolor sit consea. Nulla purus arcu',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    date: '22 Oct, 2020',
    comments: 246,
  },
  {
    title: 'Lorem ipsum dolor sit consea. Nulla purus arcu',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    date: '22 Oct, 2020',
    comments: 246,
  },
  {
    title: 'Lorem ipsum dolor sit consea. Nulla purus arcu',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    date: '22 Oct, 2020',
    comments: 246,
  },
];

export default function BlogStrip() {
  return (
    <section className="py-16 bg-gradient-to-tr from-pink-50 via-white to-green-50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-3 text-gray-900">Blog</h3>
        <p className="text-gray-500 mb-10">
          There are many variations of passages of Lorem Ipsum available, <br className="hidden md:block"/> but the majority have suffered alteration.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border border-transparent hover:border-purple-200 transition">
              <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col">
                <span className="text-xs text-gray-400 mb-2">
                  {p.date} / {p.comments} Comments
                </span>
                <h4 className="font-semibold text-gray-900 text-base">{p.title}</h4>
              </div>
            </div>
          ))}
        </div>
        {/* Carousel dots (static for now, for demo purposes) */}
        <div className="mt-8 flex justify-center gap-2">
          <span className="w-3 h-3 bg-purple-500 rounded-full inline-block"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full inline-block"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full inline-block"></span>
        </div>
      </div>
    </section>
  );
}
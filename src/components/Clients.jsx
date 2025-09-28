import React from 'react';

const logos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google",
    style: { height: "40px" }
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg",
    alt: "Dribbble",
    style: { height: "40px" }
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Linkedin.svg",
    alt: "LinkedIn",
    style: { height: "40px", background: "#fff", padding: "2px", borderRadius: "6px" }
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    alt: "Amazon",
    style: { height: "40px" }
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/medium-1.svg",
    alt: "Medium",
    style: { height: "40px" }
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo.svg",
    alt: "Spotify",
    style: { height: "40px" }
  }
];

export default function Clients() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-3 text-gray-900">Happy Clients</h3>
        <p className="text-gray-500 mb-10">
          There are many variations of passages of Lorem Ipsum available,<br className="hidden md:block" />
          but the majority have suffered alteration.
        </p>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className={`h-10 object-contain`}
              style={logo.style}
              title={logo.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
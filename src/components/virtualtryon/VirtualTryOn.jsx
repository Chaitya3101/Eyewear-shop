import React from 'react';
import Image1 from '../../assets/virtualtryon.webp'

export default function VirtualOnSection() {
  return (
    <section 
      className="flex flex-col items-center justify-center py-16 px-6 border-4 border-black rounded-lg bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${Image1})`,
        backgroundPosition: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">See Yourself</h2>
      <button 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        3D View
      </button>
      <p className="mt-4 text-center text-gray-600 max-w-md">
        Try on our eyewear collection virtually and see how they look on you before making a purchase!
      </p>
    </section>
  );
}


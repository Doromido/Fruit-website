import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Фоновий шар */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-br from-orange-300 via-yellow-200 to-lime-200"
        style={{
          backgroundImage: `url('/src/assets/images/14.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
        
        {/* Навігація */}
        <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex gap-1 text-sm font-medium text-white z-20">
  <a href="#" className="px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300">about +</a>
  <a href="#" className="px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300">faqs +</a>
  <a href="#" className="px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300">shop +</a>
  <a href="#" className="px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300">contact +</a>
</nav>

        {/* Основний контент */}
        <div className="max-w-4xl mx-auto">
          {/* Логотип/назва бренду */}
          <div className="mb-8">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-black text-white drop-shadow-2xl tracking-tight leading-none mb-6">
              FRUIT<span className="text-white">&DROP</span>
            </h1>
            <div className="bg-orange-500 backdrop-blur-sm px-8 py-3 rounded-full inline-block shadow-xl">
              <span className="text-white font-bold text-xl tracking-wider">FRUITOPIA</span>
            </div>
          </div>
          
          <p className="mt-12 text-3xl sm:text-4xl text-white font-light tracking-wide drop-shadow-lg font-serif">
  your daily splash of fruity chill
</p>
          
          <button className="mt-16 bg-gradient-to-r from-lime-500 to-red-500 text-white py-4 px-12 rounded-full text-xl font-bold hover:from-lime-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-2xl">
            Taste the tang – grab yours today!
          </button>
        </div>
      </div>
    </main>
  );
}

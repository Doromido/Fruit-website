import React from 'react';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isOnBrightBackground, setIsOnBrightBackground] = useState(true);

  const fruits = [
    {
      name: 'STRAWBERRY',
      color: 'from-red-300 to-red-100',
      image: 'strawberry.png',
      video: 'strawberry-video.mp4',
      text: 'text-red-600',
      buttonColor: '#dc2626'
    },
    {
      name: 'GRAPEFRUIT',
      color: 'from-orange-300 to-orange-100',
      image: 'grapefruit.png',
      video: 'grapefruit-video.mp4',
      text: 'text-orange-600',
      buttonColor: '#ea580c'
    },
    {
      name: 'GRAPE',
      color: 'from-purple-300 to-purple-100',
      image: 'grape.png',
      video: 'grape-video.mp4',
      text: 'text-purple-600',
      buttonColor: '#9333ea'
    },
    {
      name: 'BANANA',
      color: 'from-yellow-300 to-yellow-100',
      image: 'banana.png',
      video: 'banana-video.mp4',
      text: 'text-yellow-600',
      buttonColor: '#ca8a04'
    },
    {
      name: 'APPLE',
      color: 'from-lime-300 to-lime-100',
      image: 'apple.png',
      video: 'apple-video.mp4',
      text: 'text-lime-600',
      buttonColor: '#65a30d'
    },
  ];

  // Дублюємо фрукти для безкінечного ефекту
  const duplicatedFruits = [...fruits, ...fruits, ...fruits];

  // Adaptive navbar logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Якщо користувач на першій секції (яскравий фон) - білий текст
      // Якщо на білих секціях - оранжевий текст
      const brightSectionEnd = windowHeight * 0.9; // Кінець першої секції
      setIsOnBrightBackground(scrollPosition < brightSectionEnd);
    };

    window.addEventListener('scroll', handleScroll);
    // Викликаємо одразу для початкового стану
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <main className="min-h-screen relative overflow-hidden">
        {/* Фоновий шар */}
        <div 
          className="absolute inset-0 z-0 bg-gradient-to-br from-orange-300 via-yellow-200 to-lime-200"
          style={{
            backgroundImage: `url('/src/assets/images/bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
          {/* Адаптивна навігація */}
          <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex gap-1 text-sm font-medium z-20 transition-all duration-300 ${
            isOnBrightBackground ? 'text-white' : 'text-orange-600'
          }`}>
            <a href="#" className={`px-6 py-3 rounded-full transition-colors duration-300 ${
              isOnBrightBackground 
                ? 'hover:bg-orange-500 hover:text-white' 
                : 'hover:bg-orange-500 hover:text-white'
            }`}>about +</a>
            <a href="#" className={`px-6 py-3 rounded-full transition-colors duration-300 ${
              isOnBrightBackground 
                ? 'hover:bg-orange-500 hover:text-white' 
                : 'hover:bg-orange-500 hover:text-white'
            }`}>faqs +</a>
            <a href="#" className={`px-6 py-3 rounded-full transition-colors duration-300 ${
              isOnBrightBackground 
                ? 'hover:bg-orange-500 hover:text-white' 
                : 'hover:bg-orange-500 hover:text-white'
            }`}>shop +</a>
            <a href="#" className={`px-6 py-3 rounded-full transition-colors duration-300 ${
              isOnBrightBackground 
                ? 'hover:bg-orange-500 hover:text-white' 
                : 'hover:bg-orange-500 hover:text-white'
            }`}>contact +</a>
          </nav>

          {/* Основний контент */}
          <div className="max-w-4xl mx-auto">
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

            <button className="mt-16 bg-gradient-to-r from-lime-500 to-red-500 text-white py-4 px-12 rounded-full text-xl font-bold hover:from-lime-400 hover:to-red-400 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              Taste the tang – grab yours today!
            </button>
          </div>
        </div>
      </main>

     {/* НОВА СЕКЦІЯ */}
      <section className="bg-white py-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="font-sans font-bold tracking-wider text-sm text-red-600 mb-3">MEET THE TEAM</h3>
          <h2 className="font-serif text-7xl font-normal text-red-600 mb-5 leading-tight">best picked fresh</h2>
          <p className="font-sans text-xl font-normal text-red-600 mb-4">
           A burst of flavor + vitamins in every bite with four juicy favorites.
          </p>
          <p className="font-sans text-lg italic text-red-600">
            contains no additives
          </p>
        </div>
      </section>

 <section className="py-3 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden h-[500px]">       
          {/* Стрічка фруктів — безкінечний рух */}
          <div 
            className={`flex gap-10 marquee ${hoveredIndex !== null ? 'paused' : ''}`}
            style={{ width: 'calc(100% * 3)' }} // Ширина для 3 копій
          >
            {duplicatedFruits.map((fruit, i) => (
              <div key={i} className="shrink-0">
                <div
                  className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl group/item cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Відео при наведенні */}
                  <div className={`absolute inset-0 transition-opacity duration-500 z-0 ${
                    hoveredIndex === i ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-full object-cover"
                    >
                      <source
                        src={`/src/assets/images/${fruit.video}`}
                        type="video/mp4"
                      />
                    </video>
                  </div>

                  {/* Градієнтний фон */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${fruit.color} z-0 transition-opacity duration-500 ${
                    hoveredIndex === i ? 'opacity-0' : 'opacity-100'
                  }`} />

                  {/* Зображення + Назва */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center z-10 gap-2">
                    <div className="w-32 h-32 bg-white/40 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center shadow-xl relative">
                      <img
                        src={`/src/assets/images/${fruit.image}`}
                        alt={fruit.name}
                        className="w-16 h-16 object-contain"
                      />
                      <span className={`text-xs font-bold ${fruit.text} mt-1 text-center`}>{fruit.name}</span>
                    </div>
                  </div>
                </div>
                
                {/* Кнопка під блоком */}
                <div className="flex justify-center mt-4 w-80">
                  <button 
                    className="group/btn border-2 border-dashed bg-transparent px-8 py-3 text-sm font-bold transition-all duration-300 w-64 hover:border-solid hover:text-white"
                    style={{
                      borderRadius: '25px',
                      borderColor: fruit.buttonColor,
                      color: fruit.buttonColor
                    }}
                    onMouseEnter={(e) => {
                      setHoveredIndex(i); // Зупиняємо анімацію
                      e.target.style.backgroundColor = fruit.buttonColor;
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      setHoveredIndex(null); // Відновлюємо анімацію
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = fruit.buttonColor;
                    }}
                  >
                    <span className="group-hover/btn:hidden">{fruit.name}</span>
                    <span className="hidden group-hover/btn:inline">SHOP NOW</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
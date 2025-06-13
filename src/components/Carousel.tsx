
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Bolos',
      description: 'Feitos com os melhores ingredientes e Sabor'
    },
    {
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'Café Premium',
      description: 'O melhor café com aquele aroma que surpreende'
    },
    {
      image: 'https://as2.ftcdn.net/v2/jpg/03/08/40/43/1000_F_308404381_LqyMIXDPOR6Ut1TqE2cJRQdxomGsQegc.jpg',
      title: 'Doces e Tortas',
      description: 'Deliciosos doces e sobremesas para alegrar o seu dia'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1675667390417-d9d23160f4a6?q=80&amp;w=387&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%20387w',
      title: 'Sucos',
      description: 'Sucos naturais que refrescam e melhoram a saúde'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden" id="home">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item absolute inset-0 ${
              index === currentSlide ? 'active' : ''
            }`}
          >
            <div
              className="h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="h-full bg-black/30 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-shadow">
                    {slide.description}
                  </p>
                  <button
                    onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
                  >
                    Explore Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Floating Cat Decoration */}
      <div className="absolute top-20 right-10 hidden lg:block">
        <div className="float-animation purr-animation">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
            <span className="text-2xl">😸</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

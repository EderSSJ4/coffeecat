
import React from 'react';
import Navigation from '../components/Navigation';
import Carousel from '../components/Carousel';
import AboutSection from '../components/AboutSection';
import MenuSection from '../components/MenuSection';
import RaffleSection from '../components/RaffleSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Carousel />
      <AboutSection />
      <MenuSection />
      <RaffleSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">🐱</span>
            </div>
            <span className="font-bold text-xl">Coffee Cat</span>
          </div>
          <p className="text-background/80 mb-4">
            Onde cada xícara conta uma história e cada visita cria memórias perfeitas
          </p>
          <div className="flex justify-center space-x-6 text-sm">
            <span>© 2024 Coffee Cat</span>
            <span>•</span>
            <span>Feito com ❤️ by Mariana Melazzo</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

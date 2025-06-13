
import React, { useState } from 'react';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('cakes');

  const menuCategories = {
    cakes: {
      title: 'Bolos e Pudim',
      icon: '🎂',
      items: [
        {
          name:'Bolos',
          description: 'Bolo de cenoura delicioso. Adeus dieta!',
          price: 'R$',
          image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Pizzas',
          description: 'Mini pizzas muito saborosas',
          price: 'R$2,50 +-',
          image: 'https://as2.ftcdn.net/v2/jpg/06/42/04/25/1000_F_642042597_mPgIh2MRe9el3876AOguiMB0n7gHwqpE.jpg'
        },
        {
          name: 'Pudim',
          description: 'Ah! Eu amo um Pudim!',
          price: 'R$8,00',
          image: 'https://as1.ftcdn.net/v2/jpg/05/74/69/60/1000_F_574696092_7N3HZQKEVr2AHWl9oPohNgbpPZo0AutP.jpg'
        },
        {
          name: 'Pão de Queijos',
          description: 'O melhor pão de queijo do Brasil!',
          price: 'R$7,00',
          image: 'https://as1.ftcdn.net/v2/jpg/03/92/06/28/1000_F_392062854_gYUpQ18ZTR22mbEH8ddr6depgvAm2XaZ.jpg'
        }
      ]
    },
    coffee: {
      title: 'Bebidas',
      icon: '☕',
      items: [

        {
          name: 'Cappuccino',
          description: 'O melhor cappuccino do mundo',
          price: 'R$5.25',
          image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Café',
          description: 'Aquele cafézinho, como é bom!',
          price: 'R$2,00',
          image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
        },
        {
          name: 'Suco de Laranja',
          description: 'Como eu Amo Suco de Laranja',
          price: 'R$',
          image: 'https://as1.ftcdn.net/v2/jpg/00/82/63/32/1000_F_82633218_O7UXYKOVTuzDHEZo1DQLL9k5kPwlRcXg.jpg'
        }
      ]
    },

  
  };

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nosso delicioso Menu
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
           Descubra nossa seleção cuidadosamente elaborada de guloseimas, cada uma feita com amor e os melhores ingredientes
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(menuCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-secondary text-secondary-foreground hover:bg-primary/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuCategories[activeCategory as keyof typeof menuCategories].items.map((item, index) => (
            <div
              key={index}
              className="menu-item bg-card rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;

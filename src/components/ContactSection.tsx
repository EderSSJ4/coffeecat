
import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visite nosso Coffee Cat
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Venha ter a melhor experiência culinária de Minas Gerais e do Brasil. Aproveite e se delicie!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg card-hover">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="mr-3">📍</span>
                Encontre nos
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Endereço:</h4>
                  <p className="text-muted-foreground">
                    Escola Petrus<br />
                    Av, Oscar Miranda, 363<br />
                    Uberlândia/MG
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                  <p className="text-muted-foreground">(34)3212-2248</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">contato@coffeecat.com.br</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg card-hover">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Clock className="mr-3" size={24} />
                Aberto
              </h3>
              <div className="space-y-3">

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábado</span>
                  <span className="font-semibold text-foreground">8:00 AM - 16:00 PM</span>
                </div>
              
              </div>
              <div className="mt-6 p-4 bg-accent/20 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <Calendar className="inline mr-2" size={16} />
                  Aberto no sábado dia 28 de junho. Aguardando vocês!
                </p>
              </div>
            </div>
          </div>

          {/* Social Media & Newsletter */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg card-hover">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="mr-3">🐱</span>
                  Siga-nos nas nossas redes sociais
              </h3>
              <p className="text-muted-foreground mb-6">
              Fique atualizado com nossas aventuras diárias com gatos, novos itens do menu e eventos especiais!
              </p>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span>📷</span>
                  <span className="font-semibold">Instagram</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span>📘</span>
                  <span className="font-semibold">Facebook</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-sky-400 to-sky-500 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span>🐦</span>
                  <span className="font-semibold">Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span>📺</span>
                  <span className="font-semibold">YouTube</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-soft rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <span className="mr-3">📬</span>
                Newsletter
              </h3>
              <p className="text-muted-foreground mb-6">
              Assine para receber as últimas atualizações, ofertas especiais e fotos de gatos na sua caixa de entrada!
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Seu endereço de email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  Se inscreva na nossa Newsletter
                </button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Nós respeitamos sua privacidade.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg text-center">
              <div className="text-4xl mb-4">😻</div>
              <h4 className="text-xl font-bold text-foreground mb-2">
                Está pronto para ter a melhor experiência da sua vida?
              </h4>
              <p className="text-muted-foreground mb-6">
                Venha conhecer nossos adoráveis ​​gatos enquanto saboreia o melhor café e as melhores guloseimas da cidade!
              </p>
              <button
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Home 🐾
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

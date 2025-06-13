
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-soft cat-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Nossa História
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Orange tabby cat lying comfortably"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl">☕</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card p-8 rounded-2xl shadow-lg card-hover">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Quem Somos ☕🐱
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                O Coffee Cat nasceu da ideia de misturar duas paixões irresistíveis: café fresquinho e gatinhos fofos! Criado por um grupo de amigos criativos durante uma feira escolar, nosso café é um lugar onde cada xícara vem com uma dose extra de carinho — e miados de alegria! Aqui, acreditamos que um ambiente aconchegante com a presença de gatos deixa qualquer lanche mais gostoso.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                Inspirados pelos cafés temáticos do mundo, resolvemos criar um cantinho onde o cheirinho de bolo quentinho se mistura com ronronados e muita diversão. Nossos “baristinhas” (como chamamos a equipe) cuidam de cada detalhe com amor, desde o cardápio até as decorações com patinhas e rabinhos. E claro: nossos mascotes felinos (mesmo que de pelúcia!) estão sempre por perto para arrancar sorrisos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                O Coffee Cat é mais do que um café. É uma experiência! Um espaço para relaxar, rir, compartilhar histórias e saborear delícias artesanais. Venha fazer parte da nossa turma felina — prometemos que você vai sair daqui com o coração quentinho e vontade de voltar!
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 p-6 rounded-xl text-center">
                  <div className="text-3xl mb-2">🎂</div>
                  <h4 className="font-semibold text-foreground mb-1">50+</h4>
                  <p className="text-sm text-muted-foreground">Novos visitantes</p>
                </div>
                <div className="bg-primary/10 p-6 rounded-xl text-center">
                  <div className="text-3xl mb-2">🐾</div>
                  <h4 className="font-semibold text-foreground mb-1">8000</h4>
                  <p className="text-sm text-muted-foreground">Visitantes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

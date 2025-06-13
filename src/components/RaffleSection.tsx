
import React from 'react';

const RaffleSection = () => {
  const currentPrizes = [
    {
      title: 'Cesta Papelaria Patinho Fofo',
      description: '',
      image: 'https://as1.ftcdn.net/v2/jpg/00/34/70/32/1000_F_34703220_TiczZRk73LnvUcvt2J2qj57mKzwKAtBT.jpg'
    },
    {
      title: '2 Vouchers para o Mundo Jump',
      description: '',
      image: 'https://as1.ftcdn.net/v2/jpg/04/33/44/50/1000_F_433445033_XxUXTEqvJf7hgONVsZYx1zz3YyiMoZwB.jpg'
    },
    {
      title: 'Um voucher para Hotel Aero Inn',
      description: '',
      image: 'https://as1.ftcdn.net/v2/jpg/00/29/13/38/1000_F_29133877_bfA2n7cWV53fto2BomyZ6pyRujJTBwjd.jpg'
    }
  ];

  const recentWinners = [
    { name: 'Aguardando Ganhador', prize: 'Número da Rifa', month: 'Junho 2025' },
    { name: 'Aguardando Ganhador', prize: 'Número da Rifa', month: 'Junho 2025' },
    { name: 'Aguardando Ganhador', prize: 'Número da Rifa', month: 'Junho 2025' }
    
  ];

  return (
    <section id="raffle" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossa Rifa 
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agrademos à todos que nos ajudaram com a Rifa para nosso projeto. 
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Current Prizes */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              🎁 Os prêmios da Rifa
            </h3>
            <div className="space-y-6">
              {currentPrizes.map((prize, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-lg card-hover flex items-center space-x-4"
                >
                  <img
                    src={prize.image}
                    alt={prize.title}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-1">
                      {prize.title}
                    </h4>
                    <p className="text-muted-foreground mb-2">{prize.description}</p>
                    <span className="text-primary font-bold text-lg">Value: {prize.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-accent/20 rounded-2xl border border-accent">
              <h4 className="text-lg font-semibold text-foreground mb-2">Sorteio</h4>
              <ul className="text-muted-foreground space-y-1">
                <li>• Cada Rifa tem o valor de R$ 5,00</li>
                <li>• Todo valor será convertido para ajudar no nosso projeto escolar</li>
                <li>• Os ganhadores terão seu nome aqui divulgados</li>
              </ul>
            </div>
          </div>

          {/* Recent Winners */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              🏆 Vencedores da Rifa
            </h3>
            <div className="space-y-4">
              {recentWinners.map((winner, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-lg card-hover border-l-4 border-primary"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {winner.name}
                      </h4>
                      <p className="text-primary font-medium">{winner.prize}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{winner.month}</p>
                      <div className="text-2xl">🎉</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="bg-primary/10 rounded-2xl p-8">
                <div className="text-4xl mb-4">🍀</div>
                <h4 className="text-2xl font-bold text-foreground mb-2">
                 Preparados para a próxima?
                </h4>
                <p className="text-muted-foreground mb-6">
                  Sempre nos visite e aguarde novas chances de ganhar prêmios exclusivos!
                </p>
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                  Indique-nos para um amigo!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RaffleSection;

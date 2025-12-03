import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

// Importa automaticamente todas as imagens da pasta clients
const clientModules = import.meta.glob<{ default: string }>([
  '/src/assets/clients/*.png',
  '/src/assets/clients/*.jpg',
  '/src/assets/clients/*.jpeg',
  '/src/assets/clients/*.svg',
  '/src/assets/clients/*.webp',
  '/src/assets/clients/*.avif'
], { eager: true });

const clientImages = Object.entries(clientModules)
  .filter(([path]) => !path.includes('.gitkeep'))
  .map(([path, module]) => ({
    src: module.default,
    name: path.split('/').pop()?.replace(/\.[^/.]+$/, '') || 'client'
  }));

const Clients = () => {
  const { ref: refEvents, isVisible: isEventsVisible } = useScrollReveal();
  const { ref: refClients, isVisible: isClientsVisible } = useScrollReveal();
  
  const majorEvents = [
    "Lollapalooza Brasil",
    "Rock In Rio",
    "Reveillon na Paulista",
    "Comic Con Experience",
    "Oktoberfest São Paulo",
    "Festival de Inverno",
    "Salão do Automóvel",
    "São Paulo Fashion Week",
    "Carnaval Salvador",
    "Heineken UEFA Champions League",
    "Fifa Fan Fest",
    "Taste of São Paulo"
  ];

  const colors = ['border-t-cyan', 'border-t-purple', 'border-t-accent', 'border-t-magenta', 'border-t-lime', 'border-t-gold', 'border-t-primary', 'border-t-teal'];

  return (
    <section id="clientes" className="py-24 lg:py-32 bg-muted/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan/10 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isEventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={refEvents}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Projetos de Destaque</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Presente nos maiores eventos do Brasil
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
          {majorEvents.map((event, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-elegant transition-all duration-700 hover:-translate-y-2 border border-border/50 bg-card group ${colors[index % colors.length]} border-t-4 ${
                isEventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <p className="font-semibold text-foreground text-base group-hover:text-primary transition-colors duration-300">{event}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mb-12 transition-all duration-1000 ${isClientsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={refClients}>
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-warm">Quem São Nossos Clientes?</span>
          </h3>
        </div>

        {clientImages.length > 0 ? (
          <div 
            className={`flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 transition-all duration-1000 ${isClientsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '200ms' }}
          >
            {clientImages.map((logo, index) => (
              <div 
                key={index}
                className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110"
              >
                <img 
                  src={logo.src} 
                  alt={logo.name}
                  className="h-12 md:h-16 lg:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            Adicione logos na pasta src/assets/clients/
          </p>
        )}
      </div>
    </section>
  );
};

export default Clients;

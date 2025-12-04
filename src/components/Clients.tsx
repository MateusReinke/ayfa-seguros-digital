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
    "Comic Con Experience",
    "Oktoberfest SP e Blumenau",
    "Reveillon na Paulista",
    "Carnaval Salvador",
    "Shell Open Air",
    "Skol Sensation",
    "Heineken UEFA Champions",
    "Fifa Fan Fest",
    "São Paulo Fashion Week",
    "Salão do Automóvel",
    "Festival de Inverno",
    "Taste of São Paulo",
    "Festival Path",
    "Gramado Winter Season"
  ];

  const colors = ['border-t-cyan', 'border-t-purple', 'border-t-accent', 'border-t-magenta', 'border-t-lime', 'border-t-gold', 'border-t-primary', 'border-t-teal'];

  return (
    <section id="clientes" className="py-16 md:py-24 lg:py-32 bg-muted/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 md:right-20 w-40 md:w-72 h-40 md:h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 md:left-20 w-32 md:w-64 h-32 md:h-64 bg-cyan/10 rounded-full blur-3xl" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${isEventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={refEvents}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="text-gradient">Principais Jobs</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Presente nos maiores eventos do Brasil
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 mb-16 md:mb-24">
          {majorEvents.map((event, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-elegant transition-all duration-700 hover:-translate-y-2 border border-border/50 bg-card group ${colors[index % colors.length]} border-t-4 ${
                isEventsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-3 md:p-6 text-center">
                <p className="font-semibold text-foreground text-xs sm:text-sm md:text-base group-hover:text-primary transition-colors duration-300">{event}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mb-8 md:mb-12 transition-all duration-1000 ${isClientsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} ref={refClients}>
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-gradient-warm">Nossos Clientes</span>
          </h3>
        </div>

        {clientImages.length > 0 ? (
          <div 
            className={`flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12 xl:gap-16 transition-all duration-1000 ${isClientsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
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
                  className="h-8 sm:h-10 md:h-14 lg:h-16 xl:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-sm md:text-base">
            Adicione logos na pasta src/assets/clients/
          </p>
        )}
      </div>
    </section>
  );
};

export default Clients;

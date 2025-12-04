import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import logo from "@/assets/ayfa-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Colorful Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple/90 via-primary/80 to-cyan/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--cyan)/0.2),transparent_50%)]" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-10 md:right-20 w-48 md:w-96 h-48 md:h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 md:left-20 w-40 md:w-80 h-40 md:h-80 bg-cyan/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/3 w-32 md:w-64 h-32 md:h-64 bg-magenta/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-16 md:py-24 lg:py-40">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6 md:mb-10 animate-fade-in opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
            <img src={logo} alt="Ayfa Seguros" className="h-14 md:h-20 lg:h-24 xl:h-28 drop-shadow-2xl" />
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-[1.1] animate-fade-in opacity-0 tracking-tight" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            Seguros de Eventos<br />
            <span className="text-gradient-warm">Proteção Completa</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-8 md:mb-12 font-light leading-relaxed animate-fade-in opacity-0 max-w-3xl mx-auto px-2" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
            Segurança e tranquilidade para organizadores de eventos. Garantimos a reposição de prejuízos 
            e eventuais imprevistos ocorridos antes, durante e após seu evento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center animate-fade-in opacity-0 px-4" style={{animationDelay: '0.7s', animationFillMode: 'forwards'}}>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-accent to-gold hover:opacity-90 text-white font-semibold px-6 md:px-10 py-5 md:py-7 text-base md:text-lg shadow-glow hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={scrollToContact}
            >
              Solicitar Cotação
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-cyan/50 hover:border-cyan backdrop-blur-md font-semibold px-6 md:px-10 py-5 md:py-7 text-base md:text-lg transition-all duration-300 hover:shadow-cyan w-full sm:w-auto"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Client types */}
          <div className="mt-10 md:mt-16 animate-fade-in opacity-0" style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}>
            <p className="text-white/70 text-sm md:text-base mb-4">Atendemos:</p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 px-2">
              {['Agências de Eventos', 'Organizadores', 'Promotores', 'Centros de Convenções', 'Patrocinadores'].map((client, idx) => (
                <span key={idx} className="px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-xs md:text-sm border border-white/20">
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

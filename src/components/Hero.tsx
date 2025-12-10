import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import logo from "@/assets/ayfa-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Darker Overlay for logo visibility */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background dark:bg-[hsl(222,47%,6%)]" style={{ opacity: 0.95 }} />
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-20 right-4 md:right-20 w-32 md:w-96 h-32 md:h-96 bg-accent rounded-full blur-3xl" style={{ opacity: 0.2 }} />
      <div className="absolute bottom-20 left-4 md:left-20 w-28 md:w-80 h-28 md:h-80 bg-gold rounded-full blur-3xl" style={{ opacity: 0.15 }} />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-12 md:py-24 lg:py-40">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center items-center mb-6 md:mb-10 animate-fade-in opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
            <img src={logo} alt="Ayfa Seguros" className="h-16 md:h-24 lg:h-32 xl:h-40 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
          </div>
          
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 md:mb-6 leading-[1.1] animate-fade-in opacity-0 tracking-tight" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
            Sua Corretora de Seguros<br />
            <span className="text-gradient-warm">Proteção Completa</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-foreground/80 mb-6 md:mb-12 font-light leading-relaxed animate-fade-in opacity-0 max-w-3xl mx-auto px-2" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
            Soluções personalizadas em seguros para você, sua família e seu negócio. 
            Proteção e tranquilidade com atendimento especializado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center animate-fade-in opacity-0 px-2" style={{animationDelay: '0.7s', animationFillMode: 'forwards'}}>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-5 md:px-10 py-4 md:py-7 text-sm md:text-lg shadow-glow hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={scrollToContact}
            >
              Solicitar Cotação
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-foreground/5 hover:bg-foreground/10 text-foreground border-2 border-foreground/20 hover:border-foreground/40 font-semibold px-5 md:px-10 py-4 md:py-7 text-sm md:text-lg transition-all duration-300 w-full sm:w-auto"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça Nossos Serviços
            </Button>
          </div>

          {/* Client types */}
          <div className="mt-8 md:mt-16 animate-fade-in opacity-0" style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}>
            <p className="text-foreground/60 text-xs md:text-base mb-3 md:mb-4">Seguros para:</p>
            <div className="flex flex-wrap justify-center gap-1.5 md:gap-3 px-1">
              {['Pessoas', 'Empresas', 'Veículos', 'Patrimônio', 'Eventos'].map((client, idx) => (
                <span key={idx} className="px-2.5 md:px-4 py-1 md:py-2 bg-foreground/5 rounded-full text-foreground/80 text-xs md:text-sm border border-foreground/10">
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